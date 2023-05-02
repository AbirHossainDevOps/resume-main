import React from 'react';

const Projects = () => {
  return (
    <div className="w-4/5 drop-shadow-lg bg-white py-4 px-10">
      <div className="text-2xl font-semibold pb-2">Projects</div>
        <div className='pl-4 pb-2'>
          <div className='font-medium'>Rick and Morty wiki</div>
          <div className='pl-2'>Personal project</div>
          <div className='pl-2'>A wiki application that uses rick and morty rest api as it's backend. The application show characters, episodes and locaion. Character details and episode details are also present. Showcases react and tailwind use.</div>
        </div>
        <div className='pl-4 pb-2'>
          <div className='font-medium'>Etch a Sketch</div>
          <div className='pl-2'>Personal project</div>
          <div className='pl-2'>A drawing appliation allows for user to draw on the screen on NxN drawwing field. Users can use black pen or use random colors. Showcases use of dom manipulation</div>
        </div>
        <div className='pl-4 pb-2'>
          <div className='font-medium'>Some Local Restaurant</div>
          <div className='pl-2'>Personal project</div>
          <div className='pl-2'>Restaurant application that provides info on the website. Showcases use of eslint, webpack and tailwind</div>
        </div>
        <div className='pl-4 pb-2'>
          <div className='font-medium'>Analysis on the effect of wallstreetbets on the stock market</div>
          <div className='pl-2'>Thesis</div>
          <div className='pl-2'>Research on the wallstreetbets short squeeze of wallstreet hedge fund.</div>
        </div>
    </div>
  );
};

export default Projects;
