'use client';

import { City, State } from 'country-state-city';
import { useState } from 'react';
import Select from 'react-select';
import { GlobeIcon } from '@heroicons/react/solid';
import { log } from 'console';

type Option = {
  value: string;
  label: string;
};

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
};

function CityPicker() {
  const [selectedState, setSelectedState] = useState<Option | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

  const handleSelectedState = (option: Option | null) => {
    setSelectedState(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: CityOption | null) => {
    setSelectedCity(option);
  };

  const stateOptions = State.getStatesOfCountry('AU').map((state) => ({
    value: state.isoCode,
    label: state.name,
  }));

  const cityOptions = selectedState
    ? City.getCitiesOfState('AU', selectedState.value).map((city) => ({
        value: {
          latitude: '',
          longitude: '',
          isoCode: '',
        },
        label: city.name,
      }))
    : [];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80 text-base">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="state">State</label>
        </div>

        <Select
          options={stateOptions}
          placeholder="Select a state"
          value={selectedState}
          onChange={(option) => handleSelectedState(option as Option | null)}
        />
      </div>

      {selectedState && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80 text-base">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">City</label>
          </div>

          <Select
            options={cityOptions}
            placeholder="Select a city"
            value={selectedCity}
            onChange={(option) =>
              handleSelectedCity(option as CityOption | null)
            }
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
