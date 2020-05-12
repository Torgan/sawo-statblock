// src/components/Destination.tsx

import * as React from 'react';
import TextareaCard from './TextareaCard';

const Destination: React.FC<{ value: string }> = ({ value }) => {
  return (
    <TextareaCard name="Destination statblock" id="destination" value={value} />
  );
};

export default Destination;
