type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

function WelcomePage({ params: { city, lat, long } }: Props) {
  return (
    <div>
      Welcome to {city} {lat} {long}
    </div>
  );
}

export default WelcomePage;
