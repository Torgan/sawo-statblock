// src/components/Source.tsx
import * as React from 'react';
import TextareaCard from './TextareaCard';

const Source: React.FC<{
  onChange: (e: React.FormEvent) => void;
  value: string;
}> = ({ onChange, value }) => {
  return (
    <TextareaCard
      name="Source statblock"
      id="source"
      onChange={onChange}
      value={value}
    />
  );
};

export default Source;
