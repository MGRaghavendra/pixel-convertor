import React, { ChangeEvent, FC } from 'react';
import './input.css';

interface Iinput {
  handleChange: (e: ChangeEvent<HTMLInputElement>, from: string) => void;
  value: string;
  tittle: string;
  from: string;
}
const Input: FC<Iinput> = ({ handleChange, value, tittle, from }) => {
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e, from);
  };
  return (
    <div className="Input_Container">
      <p className="tittle">{tittle}</p>
      <input type="text" value={value} onChange={handleOnchange} />
    </div>
  );
};

export default Input;
