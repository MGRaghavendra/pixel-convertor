import React, { FC } from 'react';
import Input from '../shared/input';
import { ChangeEvent } from 'react';
interface Isource {
  handleChange: (e: ChangeEvent<HTMLInputElement>, from: string) => void;
  value: string;
  from: string;
}
const Source: FC<Isource> = ({ handleChange, value, from }) => {
  return (
    <div>
      <Input
        handleChange={handleChange}
        value={value}
        tittle={'1920PX'}
        from={from}
      />
    </div>
  );
};

export default Source;
