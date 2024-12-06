import React from 'react'
import Image from 'next/image'
import CoinImg from '../public/resources/images/coin-img.png'
import Button from './Button'

function RewardCouponCard({cardImg,cardTxt,cardPoints}) {
  return (
    <div className='w-[339px] bg-[#FFFFFF] rounded-[20px] p-[12px]'>
        <div>
            <Image src={cardImg} alt='coupon-img' />
        </div>
        <div className='mt-[17px] flex justify-between items-center'>
            <p className='text-[#020617] font-gilroybold text-[18px] leading-[24px] tracking-wide'>{cardTxt}</p>
            <div className='flex bg-[#020617] items-center px-[12px] py-[8px] gap-[8px] rounded-[46px]'>
                <p className='text-[#FFFFFF] text-[16px] leading-[24px] tracking-wide font-gilroybold'>{cardPoints}</p>
                <div className='w-[16px] h-[16px]'>
                    <Image src={CoinImg} alt='coin-img'/>
                </div>
            </div>
        </div>
        <Button className={`mt-[17px] bg-[#3940A0] w-full py-[12px] text-center rounded-[6px]`}>
            <p className='text-[16px] leading-[24px] text-[#ffffff] tracking-wide'>Redeem Now</p>
        </Button>
    </div>
  )
}

export default RewardCouponCard
