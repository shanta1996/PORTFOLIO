import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import getIcon from '../utils/contactIcons.json'
import { Link } from 'react-router-dom'

import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const ContactIcon = () => {
    const geticon = {
        CiLocationOn: <CiLocationOn />,
        FiPhone: <FiPhone />,
        CiMail: <CiMail />,
    }
    return (
        <>
            <div className='h-[80%] pt-0 md:pt-[100px] 2xl:pt-[150px]'>
                <div className='h-[55%] flex flex-col border-b-[1px] border-[#17202a]'>
                    {getIcon.map((data, index) => {
                        const { icon, detail } = data
                        return (
                            <div key={index} className='h-full text-[18px] flex items-center gap-[20px] px-[10px]'>
                                <span className=''>{geticon[icon]}</span>
                                <span>{detail}</span>

                            </div>
                        )
                    })}
                </div>
                <div className='text-[20px] py-5 px-[10px] flex items-center gap-[30px]'>
                    <Link to="https://github.com/shanta1996?tab=overview&from=2025-01-01&to=2025-01-14"><IoLogoGithub /></Link>
                    <Link to="https://www.instagram.com/shantachaudhary34/"><FaInstagram /></Link>
                    <Link to="https://www.facebook.com/profile.php?id=61570126347803"><RiFacebookFill /></Link>
                </div>
            </div>
        </>
    )
}

export default ContactIcon