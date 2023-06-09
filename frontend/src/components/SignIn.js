import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Alert from './Alert';
const fixedInputClass =
    'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

export default function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = React.useState(false);
    const [err, setErr] = React.useState('');
    const { login, loginWithGoogle, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            setErr('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch (err) {
            console.log(err);
            setErr('Invalid email or password');
        }
        setLoading(false);
    };

    const handleSignInGoogle = async (e) => {
        e.preventDefault();
        try {
            await loginWithGoogle();
            //console.log(currentUser);
            navigate('/');
        } catch (err) {}
    };
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='content-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
                <h5 className='text-xl font-medium text-gray-900 dark:text-black'>
                    Log In
                </h5>
                {err && <Alert msg={err} />}
                <form className='my-5 max-w-md'>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        required={true}
                        className={fixedInputClass + ' my-3'}
                        placeholder='Email'
                        ref={emailRef}
                    />
                    <input
                        id='password'
                        name='password'
                        type='password'
                        required={true}
                        className={fixedInputClass + ' my-3'}
                        placeholder='Password'
                        ref={passwordRef}
                    />
                    <button
                        onClick={handleSignInGoogle}
                        type='button'
                        className='w-full px-3 py-2 mt-2 font-semibold text-gray-900 bg-white border-2 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none'
                    >
                        <svg
                            className='inline w-4 h-4 mr-3 text-gray-900 fill-current'
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fab'
                            data-icon='google'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 48 48'
                        >
                            <path
                                fill='#fbc02d'
                                d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                            ></path>
                            <path
                                fill='#e53935'
                                d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                            ></path>
                            <path
                                fill='#4caf50'
                                d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                            ></path>
                            <path
                                fill='#1565c0'
                                d='M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                            ></path>
                        </svg>
                        Sign in with Google
                    </button>

                    <button
                        onClick={handleSignIn}
                        type='button'
                        disabled={loading}
                        className='w-full px-3 py-2 mt-2 font-semibold text-gray-900 bg-white border-2 rounded-md shadow outline-none hover:bg-blue-50 hover:border-blue-400 focus:outline-none'
                    >
                        Sign In
                    </button>
                    <div className='w-100 text-center mt-5'>
                        Need an account?
                        <Link to='/signup'> Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
