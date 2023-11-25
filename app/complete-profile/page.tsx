"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FcSettings } from 'react-icons/fc'; // Replace with your preferred icons
import { HiOutlineUser, HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi';
import { GiTeacher, GiComputerFan, GiArtificialIntelligence } from 'react-icons/gi';
import Image from 'next/image';
import Logo from '../../media/nest site favi con.png'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const CompleteProfilePage: React.FC = () => {

const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    dob: '',
    country: '',
    profession: '',
    otherProfession: '',
  });
  
  const { username,firstName, lastName } = formData;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
  };

  return (
   <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='bg-white sm:mx-auto rounded-md w-full  sm:max-w-md flex flex-col shadow-md p-3'>
        
        <div className="">
        <div className="flex items-center">
        <Image
            className="h-12 w-auto"
            src={Logo}
            alt="NestSite Logo"
            width={179.8}
            height={78.9}
          />
          <h2 className="text-2xl font-bold leading-9 text-gray-900">
            Complete your profile
          </h2>
        </div>
          <p className="mt-2 text-gray-600">
            Enter your details
          </p>
          <h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <form className="space-y-5 mt-4 mb-8" onSubmit={handleSubmit}>
          
            <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
            <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">nestsite.io/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Nzubechi"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Bio
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Profile photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
           
            <div className="border-t border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 mb-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Firstname
              </label>
              <div className="mt-2">
                <div className="flex items-center border rounded-md border-gray-300 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 sm:text-sm sm:leading-6">
                <HiOutlineUser className="w-6 h-6 mr-2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="lastName"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full focus:outline-none placeholder:text-gray-400"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Lastname
              </label>
              <div className="mt-1">
                <div className="flex items-center border rounded-md border-gray-300 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 sm:text-sm sm:leading-6">
                <HiOutlineUser className="w-6 h-6 mr-2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="lastName"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full focus:outline-none placeholder:text-gray-400"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-1">
                <div className="flex items-center border rounded-md border-gray-300 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 sm:text-sm sm:leading-6">
                <HiOutlineUser className="w-6 h-6 mr-2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="lastName"
                    type="number"
                    autoComplete="new-password"
                    required
                    className="w-full focus:outline-none placeholder:text-gray-400"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            </div>
            
           
          
            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                  ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin mr-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        className="text-white border-t-2 border-b-2 border-indigo-500 border-solid rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    Submitting...
                  </div>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
        </div>
        
        </div>
      </div>
   </>
  );
};

export default CompleteProfilePage;
