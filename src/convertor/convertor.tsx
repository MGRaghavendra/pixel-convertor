import React, { ChangeEvent, FC, useState } from 'react';
import './convertor.css';
import Destiny from './res_component/destiny';
import Source from './source_component/source';
const Convertor: FC = () => {
  const [srcpixels, setSrcpixels] = useState<string>('');
  const [dstpixels, setDstpixels] = useState<string>('');
  const convert = (src: number, dst: number, to: string) => {
    if (to === '1280') {
      setDstpixels(((src * 1280) / 1920).toString());
    } else if (to === '1920') {
      setSrcpixels(((dst * 1920) / 1280).toString());
    }
  };
  const sourcetodestiny = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSrcpixels('');
      setDstpixels('');
      return;
    }
    if (!isNaN(Number(e.target.value))) {
      setSrcpixels(e.target.value);
      convert(Number(e.target.value), Number(dstpixels), '1280');
    }
  };
  const destinytosource = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSrcpixels('');
      setDstpixels('');
      return;
    }
    if (!isNaN(Number(e.target.value))) {
      setDstpixels(e.target.value);
      convert(Number(srcpixels), Number(e.target.value), '1920');
    }
  };
  return (
    <div className="container">
      <Source handleChange={sourcetodestiny} value={srcpixels} />
      <Destiny handleChange={destinytosource} value={dstpixels} />
    </div>
  );
};

export default Convertor;
