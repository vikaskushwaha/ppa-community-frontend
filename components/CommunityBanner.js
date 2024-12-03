import star from '../public/resources/images/star.svg'
import Image from 'next/image'
import CommunityFeatures from './Freatures';
import SignupForm from './Signup';

function communityBanner() {
    return (
        <div className="flex bg-[#14171F] py-[5rem] px-16 w-full">
            <div className="flex justify-between flex-row w-full max-w-[82.125rem]">
                <div className="flex flex-col gap-[2.5rem]">
                    <div className="flex flex-col gap-2 w-[39.0625rem]">
                        <div className="flex flex-row gap-x-2 items-center bg-[#FEF3C7] rounded-[0.75rem] py-2 px-6 w-[13.8125rem]">
                            <div className="w-[20px] h-[20px]">
                                <Image alt='star' src={star} />
                            </div>
                            <p className='text-[1rem] leading-[1.5rem] tracking-wide'>Build Skills For Free</p>
                        </div>
                        <h1 className='text-[4.5rem] text-[#F8FAFC] leading-[5rem] tracking-wide font-gilroybold'> {`<Code Everyday>`} </h1>
                        <p className=' text-[#F8FAFC] text-[1.125rem] font-gilroyregular leading-[1.75rem] tracking-wider'>Get job-ready in just 15 minutes a day! Watch quick videos, solve one problem daily, and build your skills—completely free for 100 Days. Refer friends & win rewards</p>
                    </div>
                    <CommunityFeatures />
                </div>
                <SignupForm />

            </div>
        </div>


    )
}

//styleName: Sub heading/H2/Regular;



export default communityBanner;