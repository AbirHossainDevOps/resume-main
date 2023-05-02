import React from 'react';

const Skills = () => {
  return (
    <div className="w-4/5 drop-shadow-lg bg-white py-4 px-10">
      <div className="text-2xl font-semibold">Skills</div>
      <div className='flex flex-wrap'>
        <div className='p-4 w-1/2'>
          <div className='font-medium'>Web Frameworks</div>
          <p>Experienced with react and tailwind css</p>
        </div>
        <div className='p-4 w-1/2'>
          <div className='font-medium'>Database</div>
          <p>Capable of using mysql</p>
        </div>
        <div className='p-4 w-1/2'>
          <div className='font-medium'>Version Control</div>
          <p>Experienced with version control system like git</p>
        </div>
        <div className='p-4 w-1/2'>
          <div className='font-medium'>Development Tools</div>
          <p>Knowledgable on dev tools such as webpack, eslint and more</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
