import React, { FC } from 'react';
import Input from '../shared/input';
import { ChangeEvent } from 'react';
interface Isource {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const Source: FC<Isource> = ({ handleChange, value }) => {
  return (
    <div>
      <Input handleChange={handleChange} value={value} tittle={'1920PX'} />
    </div>
  );
};

export default Source;
