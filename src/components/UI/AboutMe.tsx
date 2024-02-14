import React from 'react';
import EmptySection from '@/components/emptySection';
import { Button, Chip } from '@nextui-org/react';

const AboutMe = () => {
  return (
    <EmptySection>
      {/* About Me Top Section */}
      <div className='flex flex-col justify-center items-center lg:min-h-[70vh] min-h-[40vh] px-4'>
        <h1 className='text-2xl font-semibold'>About Me</h1>
        <div className='relative my-2 h-1 w-24 bg-violet-600 rounded-full'></div>
        <p className='text-center max-w-2xl px-6'>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      {/* Below About Me Two Columns*/}
      <div className='grid lg:grid-cols-2 gap-4 mb-10 px-4'>
        {/* Left Column*/}
        <div className='flex flex-col justify-center items-center space-y-4'>
          <div className='font-bold text-center'>Get to know me!</div>
          <div className='text-center space-y-4'>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <Button className='w-32 bg-violet-700 text-white py-2 rounded text-lg'>
              Projects
            </Button>
          </div>
        </div>
        {/* Right Column*/}
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div className='font-bold text-center'>My Skills</div>
          <div className='flex flex-wrap justify-center items-center gap-2'>
            <Chip className='bg-gray-200 text-black rounded-lg'>HTML</Chip>
            <Chip className='bg-gray-200 text-black rounded-lg'>CSS</Chip>
            {/* ... other skills ... */}
          </div>
        </div>
      </div>
      <div className='mb-52'></div>
    </EmptySection>
  );
};

export default AboutMe;
