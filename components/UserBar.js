import {useContext} from 'react'
import { Authcontext } from "@/context/UserContext.js";
import FireImg from '../public/resources/images/fire-img.svg'
import Image from 'next/image';

function UserBar() {
    const { user } = useContext(Authcontext);
  return (
    <div className='flex md:flex-row flex-col justify-between px-[12px] pt-[20px] md:gap-[0px] gap-[10px]'>
      <p className='md:relative left-[2%] font-gilroybold md:text-[40px] md:leading-[52px] text-[16px] leading-[20px] tracking-wide'>{`Hi, ${user.usersInfo.userName}`}</p>
      <div className='md:w-[356px] w-[full] bg-[#3A3C43] px-[12px] py-[8px] rounded-[8px]'>
        <p className='font-gilroybold md:text-[16px] text-[14px] leading-[24px]'>Complete 100 Days Streak Get +500 Points</p>
        <div className='flex items-center gap-[20px]'>
            <Image src={FireImg} alt='fire-img'/>
            <div className='flex items-center w-full gap-[4px]'>
                <div className="h-2 w-[70%] bg-[#30333A] rounded">
                    <div className="h-2 bg-[#F59E0B] rounded" style={{ width: `10%` }}></div>
                </div>
                <p className='font-gilroybold text-[12px] leading-[16px] text-[#F8FAFC]'>10/100 Days</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserBar
