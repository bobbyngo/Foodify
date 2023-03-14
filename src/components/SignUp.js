import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const fixedInputClass =
    'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

export default function SignUp() {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    // Get the signup method from context
    const [loading, setLoading] = React.useState(false);
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleChange = () => {};
    const handleSignUp = async (e) => {
        //e.preventDefault();
        setLoading(true);
        await signUp(emailRef.current.value, passwordRef.current.value);
        navigate('/');

        setLoading(false);
    };

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='content-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
                <h5 className='text-xl font-medium text-gray-900 dark:text-black'>
                    Sign Up
                </h5>
                <div className='my-5 max-w-md'>
                    <input
                        onChange={handleChange}
                        id='email'
                        name='email'
                        type='email'
                        required={true}
                        className={fixedInputClass + ' my-3'}
                        placeholder='Email'
                        ref={emailRef}
                    />
                    <input
                        onChange={handleChange}
                        id='password'
                        name='password'
                        type='password'
                        required={true}
                        className={fixedInputClass + ' my-3'}
                        placeholder='Password'
                        ref={passwordRef}
                    />

                    <button
                        onClick={handleSignUp}
                        type='button'
                        className='w-full px-3 py-2 mt-2 font-semibold text-gray-900 bg-white border-2 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none'
                    >
                        Sign Up
                    </button>
                    <div className='w-100 text-center mt-5'>
                        Already have an account?
                        <Link to='/signin'> Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
