import React from 'react';
import a from './co/1.webp';
import b from './co/2.webp';
import c from './co/3.webp';

const Co: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <img
        src={a}
        alt="Image 1"
        className="block m-0 p-0"
      />
      <img
        src={b}
        alt="Image 2"
        className="block m-0 p-0"
      />
      <img
        src={c}
        alt="Image 3"
        className="block m-0 p-0"
      />
    </div>
  );
};

export default Co;