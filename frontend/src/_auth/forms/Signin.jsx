import React from 'react'
import { Link } from 'react-router'
import TextField from '../../components/forms/TextField'
import { Formik,Form } from 'formik';
import { signinSchema } from '../../validation';
import { loginOptions } from '../../react-queries/userQueries';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
const Signin = () => {

  const navigate = useNavigate();
  const loginMutation = useMutation({
    ...loginOptions,
    onSuccess: ()=>{
      navigate('/');
    }
  })

  return (
 <div className="flex min-h-full flex-col justify-center px-6 pt-25 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik initialValues={{email:"", password: ""}} validationSchema={signinSchema} 
           onSubmit={
            (values, actions)=> {
              loginMutation.mutate(values)
              // actions.resetForm()
              console.log('Clicked');
              
    
              
            }}>

            { (props) => (
              <Form>
                {/* EMAIL FIELD */}
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <TextField  id="email" name="email" type="email" required autoComplete="email"/>
            </div>
            {/* END EMAIL FIELD */}

            {/* PASSWORD FIELD */}
            <div className='mb-4'>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                </div>
                <TextField  id="password" name="password" type="password" required autoComplete="current-password"/>
            </div>
            {/* END PASSWORD FIELD */}

            <div>
              <button
                type="submit"
                className={`${loginMutation.isPending ? 'opacity-15' : ''}flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer`}
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
              </button>
            </div>


              </Form>

            )}
          </Formik>
    

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?{' '}
            <Link to={'/sign-up'} className='font-semibold text-indigo-600 hover:text-indigo-500'>Register</Link>
          
          </p>
        </div>
  </div>

  )
}

export default Signin
