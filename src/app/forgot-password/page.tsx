'use client';
import { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import preambleLogo from "../preambleLogo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className='flex justify-center'>
            <Image
            src={preambleLogo}
            alt="OpenResume Logo"
            className="h-10 w-10"
            priority
          />
            </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => resetEmail()}
                disabled={!email}
                className="flex w-full cursor-pointer justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-blackwwwwwww shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send Forgot Password Email
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            Back to sign in?{' '}
            <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </>
  )
}