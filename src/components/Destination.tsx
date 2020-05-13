// src/components/Destination.tsx

import * as React from 'react';
import TextareaCard from './TextareaCard';
import transform, { loadSkillConfig } from '../transformer/transform';

const Destination: React.FC<{ value: string }> = ({ value }) => {
  const [skillConfig, setConfig] = React.useState([] as any[]);

  React.useEffect(() => {
    const getConfig = async () => {
      const { data } = await loadSkillConfig();
      setConfig(data);
    };
    if (skillConfig.length === 0) {
      getConfig();
    }
  }, [skillConfig]);

  return (
    <TextareaCard
      name="Destination statblock"
      id="destination"
      value={transform(value, skillConfig as [string, string][])}
    />
  );
};

export default Destination;
