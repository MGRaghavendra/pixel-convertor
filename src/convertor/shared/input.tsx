import React, { ChangeEvent, FC } from 'react';
import './input.css';

interface Iinput {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  tittle: string;
}
const Input: FC<Iinput> = ({ handleChange, value, tittle }) => {
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  return (
    <div className="Input_Container">
      <p className="tittle">{tittle}</p>
      <input type="text" value={value} onChange={handleOnchange} />
    </div>
  );
};

export default Input;
