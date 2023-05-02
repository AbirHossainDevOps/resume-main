import React from 'react';

const Education = () => {
  return (
    <div className="w-4/5 drop-shadow-lg bg-white py-4 px-10">
      <div className="text-2xl font-semibold">Education</div>
      <div>
        <div className='pl-4 py-2'>
          <div className='font-medium'>Bachelor of Computer Science and Engineering</div>
          <div>CGPA 3.73 (out of 4.00)</div>
          <div>BRAC University</div>
        </div>
        <div className='pl-4 pb-2'>
          <div className='font-medium'>HSC</div>
          <div>GPA 5.00 (out of 5.00)</div>
          <div>St. Joseph Higher Secondary School</div></div>
        <div className='pl-4 pb-2'>
          <div className='font-medium'>SSC</div>
          <div>GPA 5.00 (out of 5.00)</div>
          <div>Dhanmondi Govt. Boys' High School</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
