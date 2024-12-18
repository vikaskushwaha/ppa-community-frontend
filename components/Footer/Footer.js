import React from 'react'
import Image from 'next/image'
import { AboutUs, PopularPrograms, Courses, Contacts, Socials } from '@/constants/FooterConstants'
import FlexibleLink from '../FlexibleLink/FlexibleLink'

function Footer() {
    return (
        <div className='bg-[#181b43] py-[40px] md:px-[40px] sm:px-[30px] px-[20px] flex justify-center'>
            <div className='flex md:flex-nowrap flex-wrap sm:justify-between lg:gap-[56px] md:gap-[20px] sm:gap-[56px] gap-[20px]'>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>About us</h3>
                    <div className='flex flex-col gap-[20px] mt-[12px]'>
                        {
                            AboutUs.map((about) => (
                                <FlexibleLink key={about.id} href={about.aboutLink}>
                                    <p className='cursor-pointer font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{about.aboutTxt}</p>
                                </FlexibleLink>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:w-[381px] md:w-[351px] sm:w-[330px] sm:order-none -order-[1] lg:order-none'>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Popular ProgramS</h3>
                    <div className='mt-[12px] flex flex-col gap-[20px]'>
                        {
                            PopularPrograms.map((program) => (
                                <FlexibleLink key={program.id} href={program.programLink}>
                                    <div className='cursor-pointer flex items-center gap-[12px]'>
                                        <div className='relative lg:w-[116px] w-[113px]'>
                                            <Image src={program.programImg} alt='program-img' />
                                        </div>
                                        <div className='lg:max-w-[296px] sm:max-w-[150px] max-w-[190px]'>
                                            <h3 className='text-[#f8fafc] text-[14px] text-left leading-[20px] tracking-wide text-wrap'>{program.programName}</h3>
                                        </div>
                                    </div>
                                </FlexibleLink>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>More Courses</h3>
                    <div className='mt-[12px] flex flex-col gap-[20px]'>
                        {
                            Courses.map((course) => (
                                <FlexibleLink key={course.id} href={course.courseLink}>
                                    <p className='cursor-pointer font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{course.courseName}</p>
                                </FlexibleLink>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Contact Us</h3>
                        <div className='mt-[12px] flex flex-col gap-[20px] max-w-[271px]'>
                            {
                                Contacts.map((contact) => (
                                    <div key={contact.id} className='cursor-pointer flex gap-[8px] items-center'>
                                        <div className={`${contact.id === 2 ? 'w-[35px]' : 'w-[24px]'}`}>
                                            <Image src={contact.contactIcon} width={24} alt='contact-icon' />
                                        </div>
                                        <FlexibleLink href={contact.contactLink}>
                                            <h3 className='font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>{contact.contactTxt}</h3>
                                        </FlexibleLink>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-[40px]'>
                        <div>
                            <h3 className='text-[#f8fafc] text-[16px] leading-[20px] tracking-wide uppercase'>Social Links</h3>
                            <div className='flex gap-[12px] mt-[12px]'>
                                {
                                    Socials.map((social) => (
                                        <div key={social.id} className='cursor-pointer w-[40px]'>
                                            <FlexibleLink href={social.socialLink}>
                                                <Image src={social.socialIcon} alt='social-icon' />
                                            </FlexibleLink>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-[40px]'>
                            <h3 className='font-gilroyregular text-[#f8fafc] text-[14px] leading-[20px] tracking-wide'>All Right Reserved with @Programming Pathshala</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
