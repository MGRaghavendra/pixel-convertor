import React, { ChangeEvent, FC } from 'react';
import Input from '../shared/input';
interface Idestiny {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const Destiny: FC<Idestiny> = ({ handleChange, value }) => {
  return (
    <div>
      <Input handleChange={handleChange} value={value} tittle={'1280PX'} />
    </div>
  );
};

export default Destiny;
