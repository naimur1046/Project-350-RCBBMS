import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import Logo from '../../assets/redcrecentlogo.svg'

export default function Footer() {
     return (
         <footer className="bg-white border-y">
             <div className="mx-auto w-full max-w-screen-xl ml-0 p-4 py-6 ">
                 <div className="flex justify-center space-x-6 mr-0">
                     <div className="mb-6 ml-40 mr-20">
                       <div className="flex items-left">
                            <img
                               src={Logo}
                               className="mr-3 h-12"
                              alt="Logo"
                          />
                            <p className="text-3xl text-red-600 m-0 p-0 font-bold">RED CRESCENT</p>
                        </div>
                     </div>
                     <div className="mr-0 flex flex-row space-x-5  ">
                         <div>
                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Sylhet Branch</h2>
                             <ul className="text-gray-500 font-medium">
                                 <li className="mb-4">
                                     <p href="" className='hover:underline'>
                                     Chowhatta, Sylhet

                                     </p>
                                 </li>
                                 <li>
                                     <p className=''>
                                       01611300900, 0821724098
                                     </p>
                                 </li>
                             </ul>
                         </div>
                         <div>
                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Dhaka Branch</h2>
                             <ul className="text-gray-500 font-medium">
                                 <li className="mb-4">
                                     <p>
                                     7/5, Aurongzeb Road, Mohammadpur, Dhaka.
                                     </p>
                                 </li>
                                 <li>
                                     <p>
                                     01811458537
                                     </p>
                                 </li>
                             </ul>
                         </div>
                         <div>
                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Chattogram Branch </h2>
                             <ul className="text-gray-500 font-medium">
                                 <li className="mb-4">
                                     <p>
                                     395 Anderkilla,Chattogram
                                     </p>
                                 </li>
                                 <li>
                                     <p>
                                     01815850533, 
                                     </p>
                                 </li>
                             </ul>
                         </div>
                         <div className='pl-5 '>
                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                             <ul className="text-gray-500 font-medium">
                                 <li className="mb-4">
                                     <a
                                         href="https://www.facebook.com/bdredcrescent"
                                         className="hover:underline"
                                         target="_blank"
                                         rel="noreferrer"
                                     >
                                         Facebook
                                     </a>
                                 </li>
                                 <li>
                                    <a className='hover:underline' href="https://www.instagram.com/palestineredcrescent/">
                                    Instragram
                                    </a>
                                     
                                 </li>
                             </ul>
                         </div>
                         
                     </div>
                 </div>
                 <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                 <div className="sm:flex sm:items-center sm:justify-between">
                     <span className="text-sm text-gray-500 sm:text-center">
                         © 2023
                         <a href="https://hiteshchoudhary.com/" className="hover:underline">
                             Red Crescent Blood Bank
                         </a>
                         . All Rights Reserved.
                     </span>
                     
                 </div>
             </div>
         </footer>
     );
 }
 