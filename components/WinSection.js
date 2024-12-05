import React from 'react'
import RewardCouponCard from './RewardCouponCard'
import { RewardCards } from '@/constants/WinSerionConstant'

function WinSection() {
  return (
    <div className='bg-[#292C33] py-[60px]'>
        <h1 className='font-gilroybold text-center text-[48px] leading-[64px] tracking-wide text-[#F8FAFC]'>What will you win?</h1>
        <div className='mt-[40px] max-w-[1097px] mx-auto flex flex-wrap gap-[40px]'>
            {
                RewardCards.map((card)=>(
                    <RewardCouponCard
                        key={card.id}
                        cardImg={card.rewardImg}
                        cardTxt={card.rewardTxt}
                        cardPoints={card.rewardPoints}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default WinSection
