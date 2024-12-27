import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RadialProgress = () => {
  const percentage = 66;
  return (
    <div className="w-40 h-40 mt-20">
      {value => <CircularProgressbar value={percentage} />}
    </div>
  );
};

export default RadialProgress;
