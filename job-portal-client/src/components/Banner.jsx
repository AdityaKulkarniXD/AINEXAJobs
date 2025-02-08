import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold text-primary mb-3'>
        Find your <span className='text-blue'>new job </span>today
      </h1>
      <p className='text-lg text-black/70 mb-8'>
        Thousands of jobs in the computer, engineering, and technology sector are waiting for you.
      </p>
      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within-ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='What position are you looking for ?'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within-ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
            <input
              type='text'
              name='location'
              id='location'
              placeholder='Location'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
            />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>
            Search
          </button>
        </div>
      </form>

      {/* Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
        {/* Card 1 */}
        <div className='bg-white rounded-md shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Job Application AI</h2>
          <p className='text-gray-700'>Apply to inumerous job openings with just few clicks and some personal details.</p>
          <div className='flex mt-4'>
            <button className='bg-blue text-white px-4 py-2 rounded-md'><a>Apply now</a></button>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-white rounded-md shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>MCQ practice and reviews here</h2>
          <p className='text-gray-700'>Get all resources for skill prep and upgrade your concept here .</p>
          <div className='flex mt-4'>
            <button className='bg-blue text-white px-4 py-2 rounded-md'><a href="http://127.0.0.1:5500/quizmain/index.html" target="_blank">MCQ Test</a></button>
          </div>
        </div>

        {/* Card 3 */}
        <div className='bg-white rounded-md shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Coding Ground</h2>
          <p className='text-gray-700'>Practice Various coding problems and improve skills.</p>
          <div className='flex mt-4'>
            <button className='bg-blue text-white px-4 py-2 rounded-md'><a href=" http://localhost:5174/" target="_blank">Code now</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
