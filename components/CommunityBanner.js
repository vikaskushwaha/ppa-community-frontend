import star from '../public/resources/images/star.svg'
import Image from 'next/image'
import CommunityFeatures from './Freatures';
import SignupForm from './Signup';

function communityBanner() {
    return (
        <div className="flex bg-[#14171F] justify-center sm:py-[5rem] py-5 px-5 w-full">
            <div className="flex flex-wrap lg:justify-between md:justify-center items-center lg:flex-row flex-col w-full max-w-[82.125rem]">
                <div className="flex flex-col gap-[2.5rem]">
                    <div className="flex flex-col gap-2 sm:w-[39.0625rem] w-[20.9375rem]">
                        <div className="flex flex-row gap-x-2 items-center bg-[#FEF3C7] rounded-[0.75rem] py-2 sm:px-5 px-2 sm:w-[13.8125rem] w-[9.9375rem]">
                            <div className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]">
                                <Image alt='star' src={star} />
                            </div>
                            <p className='sm:text-[1rem] text-[#D97706] sm:leading-[1.5rem] text-[0.75rem] leading-[1rem] tracking-wide'>Build Skills For Free</p>
                        </div>
                        <h1 className='sm:text-[4.5rem] text-[#F8FAFC] sm:leading-[5rem] text-[2rem] leading-[2.5rem] tracking-wide font-gilroybold'> {`<Code Everyday>`} </h1>
                        <p className=' text-[#F8FAFC] sm:text-[1.125rem] font-gilroyregular sm:leading-[1.75rem] text-[0.875rem] leading-[1.25rem] tracking-wider'>Get job-ready in just 15 minutes a day! Watch quick videos, solve one problem daily, and build your skills—completely free for 100 Days. Refer friends & win rewards</p>
                    </div>
                    <div className='lg:block hidden'>
                        <CommunityFeatures />
                    </div>
                </div>
                <SignupForm />
                <div className='mt-[20px] lg:hidden block sm:w-full w-[20.9375rem]'>
                    <CommunityFeatures />
                </div>
            </div>
        </div>


    )
}

//styleName: Sub heading/H2/Regular;



export default communityBanner;