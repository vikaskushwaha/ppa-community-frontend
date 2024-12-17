import star from '../public/resources/images/star.svg'
import Image from 'next/image'
import CommunityFeatures from './Freatures';
import SignupForm from './Signup';

function communityBanner() {
    return (
        <div className="flex bg-[#14171F] justify-center sm:py-[5rem] py-5 sm:px-8 px-5 w-full">
            <div className="flex flex-wrap md:justify-around sm:flex-row flex-col w-full">
                <div className="flex flex-col gap-[2.5rem] lg:w-auto md:w-[55%] w-full">
                    <div className="flex flex-col gap-4 lg:w-[39.0625rem] md:w-[100%] ">
                        <div className="flex flex-row gap-x-2 items-center bg-[#FEF3C7] rounded-[0.75rem] py-2 sm:px-5 px-2 sm:w-[13.8125rem] w-[9.9375rem]">
                            <div className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]">
                                <Image alt='star' src={star} />
                            </div>
                            <p className='sm:text-[1rem] text-[#D97706] sm:leading-[1.5rem] text-[0.75rem] leading-[1rem] tracking-wide'>Build Skills For Free</p>
                        </div>
                        <h1 className='lg:text-[4.5rem] text-[#F8FAFC] md:text-[3.8rem] md:leading-[4.4rem] lg:leading-[5rem] text-[2rem] leading-[2.5rem] tracking-wide font-gilroybold'> {`<Code Everyday>`} </h1>
                        <p className=' text-[#F8FAFC] md:text-[1.125rem] font-gilroyregular md:leading-[1.75rem] text-[0.875rem] leading-[1.25rem] tracking-wider'>Get job-ready in just 15 minutes a day! Watch quick videos, solve one problem daily, and build your skills—completely free for 100 Days. Refer friends & win rewards</p>
                    </div>
                    <div className='md:block hidden'>
                        <CommunityFeatures />
                    </div>
                </div>
                <div className='lg:w-auto md:w-[45%] w-full flex justify-end'>
                    <SignupForm />
                </div>
                <div className='mt-[20px] md:hidden block sm:w-full w-[20.9375rem]'>
                    <CommunityFeatures />
                </div>
            </div>
        </div>


    )
}

//styleName: Sub heading/H2/Regular;



export default communityBanner;