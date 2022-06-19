import React, { ChangeEvent, FC } from 'react';
import Input from '../shared/input';
interface Idestiny {
  handleChange: (e: ChangeEvent<HTMLInputElement>, from: string) => void;
  value: string;
  from: string;
}
const Destiny: FC<Idestiny> = ({ handleChange, value }) => {
  return (
    <div>
      <Input
        handleChange={handleChange}
        value={value}
        tittle={'1280PX'}
        from={'1280'}
      />
    </div>
  );
};

export default Destiny;
