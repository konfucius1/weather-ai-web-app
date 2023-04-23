'use-client';

import { Card, Divider, Subtitle, Text } from '@tremor/react';
import CityPicker from './components/CityPicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 to-slate-800 p-10 flex flex-col justify-center items-center">
      <main className="text-6xl">
        <Card className="max-w-4xl mx-auto">
          <Text className="text-5xl font-bold text-center mb-10 text-slate-600">
            Weather AI
          </Text>
          <Subtitle className="text-xl text-center">
            Powered by Next.js 13.3, Tailwind CSS, Tremor 2.0, GraphQL
          </Subtitle>

          <Divider className="my-10" />

          <Card className="bg-gradient-to-br from-slate-600 to-slate-700">
            <CityPicker />
          </Card>
        </Card>
      </main>
    </div>
  );
}
