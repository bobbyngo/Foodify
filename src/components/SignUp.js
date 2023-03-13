import React from 'react';
const fixedInputClass =
    'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

export default function SignUp() {
    const handleChange = () => {};
    const handleSignUp = () => {};
    return (
        <div class='h-screen flex items-center justify-center'>
            <div class='content-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
                <h5 class='text-xl font-medium text-gray-900 dark:text-black'>
                    Sign Up
                </h5>
                <div className='my-5 max-w-md'>
                    <input
                        onChange={handleChange}
                        id='email'
                        name='email'
                        type='email'
                        required='true'
                        className={fixedInputClass + ' my-3'}
                        placeholder='Email'
                    />
                    <input
                        onChange={handleChange}
                        id='password'
                        name='password'
                        type='password'
                        required='true'
                        className={fixedInputClass + ' my-3'}
                        placeholder='Password'
                    />

                    <button
                        onClick={handleSignUp}
                        type='button'
                        class='w-full px-3 py-2 mt-2 font-semibold text-gray-900 bg-white border-2 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none'
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
