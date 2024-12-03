
'use client'
import Button from './Button';
import Image from 'next/image';
import rockect from '../public/resources/images/Rocket.svg'
import { useState } from 'react';
function SignupForm() {

    const [signedUp, setSignUp] = useState(true)
    const toggleTab = (index) => {
        console.log(index);

        setSignUp(index)
    }
    return (
        <div className="flex rounded-[1.25rem] p-6 bg-[#292C33] ">
            <div className="flex flex-col gap-y-3 w-full">
                <div className="flex  w-[28.125rem] justify-center">
                    <div className="flex  flex-row rounded-[0.75rem] p-2 gap-x-5 bg-[#14171F] max-w-[19.75rem]">
                        <div
                            className={`flex py-2 px-4 w-[8.75rem]  rounded-[0.375rem] ${signedUp ? 'bg-[#292C33]' : 'bg-[#14171F]'} justify-center  cursor-pointer " `}
                            onClick={() => toggleTab(true)}
                        >
                            <p className="text-[1rem] leading-6 tracking-wide align-middle text-[#FFFFFF] font-gilroybold max-w-[8.75rem] ">Sign up</p>
                        </div>
                        <div
                            className={`flex py-2 px-4   w-[8.75rem] rounded-[0.375rem] ${!signedUp ? 'bg-[#292C33]' : 'bg-[#14171F]'} justify-center cursor-pointer "`}
                            onClick={() => toggleTab(false)}
                        >
                            <p className="text-[1rem] leading-6 tracking-wide  align-middle  font-gilroybold text-[#FFFFFF]  max-w-[8.75rem]">Login</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-3">
                        <form className=" flex flex-col gap-3">
                            {signedUp && (
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-[1rem] font-gilroysemibold leading-6 tracking-wide text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="bg-[#14171F] py-2 px-5 rounded-[0.375rem]  text-white placeholder-white"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-[1rem] font-gilroysemibold leading-6 tracking-wide text-white">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="bg-[#14171F] py-2 px-5 rounded-[0.375rem] text-white placeholder-white"
                                    placeholder="Enter your eamil"
                                    required
                                />
                            </div>
                            {signedUp && (
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-[1rem] font-gilroysemibold leading-6 tracking-wide text-white">
                                        WhatsApp Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="bg-[#14171F] py-2 px-5 rounded-[0.375rem] text-white placeholder-white"
                                        placeholder="Enter 10-digit number"
                                        required
                                    />
                                    <p className='font-gilroymedium text-[0.875rem] leading-5 tracking-wide text-white'>
                                        We have a strict no-spam policy
                                    </p>
                                </div>
                            )}

                            <Button className="bg-[#3940A0] py-3 px-2 rounded-[0.625rem] text-white text-[1rem] leading-6 tracking-wide font-gilroybold flex justify-center gap-2 items-center cur "
                                imageUrl={signedUp ? rockect : null} // Conditionally pass the imageUrl prop
                                altText={signedUp ? "rocket" : null}
                            >
                                {signedUp ? "Join the Challenge" : "Log in"}
                            </Button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}




export default SignupForm

