import React from 'react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';
import FoodCard from './FoodCard';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [input, setInput] = useState();
    const [data, setData] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        if (data === undefined) {
            console.log('Loading...');
        } else {
            if (input) {
                const response = await fetch(
                    `http://localhost:5000/api/${input}`
                );

                const responseData = await response.json();
                setData(responseData);
            }
        }
    }

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar />
            <div className='mt-10 container mx-auto bg-emerald-500 rounded-lg p-14'>
                <h1 className='text-center font-bold text-white text-4xl'>
                    Find the best recipe for {currentUser.email}!
                </h1>
                <p className='text-center text-white mx-auto font-normal text-sm my-6 max-w-lg'>
                    The best way to impress your crush is good food. Enter any
                    ingredients to find the best recipes for a perfect date
                    (chicken, fried rice)
                </p>
                <form className='' onSubmit={handleSubmit}>
                    <label
                        htmlFor='default-search'
                        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                    >
                        Search
                    </label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg
                                aria-hidden='true'
                                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                ></path>
                            </svg>
                        </div>
                        <input
                            type='search'
                            id='default-search'
                            className='block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                            placeholder='Enter ingredients for recipe ...'
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            required
                        />
                        <button
                            type='submit'
                            className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex flex-wrap w-9/12 justify-around mx-auto max-w-full'>
                {data == null ? (
                    <p></p>
                ) : (
                    data.map((i) => {
                        return <FoodCard foodItem={i.recipe} />;
                    })
                )}
            </div>
        </div>
    );
}
