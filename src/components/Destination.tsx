// src/components/Destination.tsx

import * as React from 'react';
import TextareaCard from './TextareaCard';
import transformer, { loadConfig } from '../transform/transform';

const Destination: React.FC<{ value: string }> = ({ value }) => {
  const [config, setConfig] = React.useState([] as any[]);

  React.useEffect(() => {
    const getConfig = async () => {
      const { data } = await loadConfig();
      setConfig(data);
    };
    if (config.length === 0) {
      getConfig();
    }
  }, [config]);

  return (
    <TextareaCard
      name="Destination statblock"
      id="destination"
      value={transformer(value, config as [string, string][])}
    />
  );
};

export default Destination;
