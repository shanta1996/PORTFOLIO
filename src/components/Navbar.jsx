import React from 'react'
import { Link} from 'react-router-dom'
import { GiRotaryPhone } from "react-icons/gi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { RxCross2 } from "react-icons/rx";
// import { CiMenuBurger } from "react-icons/ci";

;

const Navbar = () => {
    // const [hamBurger, setHamBurger] = useState(true)
    // const handleToggle = () => {
    //     setHamBurger(!hamBurger)
    // }
    useGSAP(() => {
        gsap.from('.callIcon', {
            y: -10,
            duration: 1.5,
            // ease: "bounce.out",
            ease: "myBounce-squash",
            repeat: -1,
            yoyo: true
        })
    })

    return (
        <>
            <nav className='fixed z-40 w-full font-[Ubuntu]'>
                <div className=' flex items-center justify-between px-5 md:px-7 py-2 md:py-7 2xl:py-10 w-full  text-white text-2xl md:text-3xl 2xl:text-4xl'>
                    <Link to="/" className='text-emeraldText'>SC</Link>
                    <Link to="/contact" className='text-emeraldText bg-red-800 md:pt-4 pt-[5px] text-xl '>Contact Me
                        <div className='callIcon text-2xl xl:text-3xl 2xl:text-4l flex items-center justify-center  text-white'>
                            <GiRotaryPhone />
                        </div>
                    </Link>



                    {/* <div onClick={handleToggle} className='cursor-pointer'>
                        {hamBurger ? <CiMenuBurger /> : ''}
                    </div>
                    <ul className={`${hamBurger ? 'right-[-100%] hidden' : 'right-0 z-50 block '} bg-slate-100 text-black absolute top-0 w-full md:w-[500px] h-screen text-[20px] md:text-[30px] 2xl:text-[40px] tracking-[1px] flex flex-col justify-evenly items-center ease-linear duration-[0.5s] pb-[70px] 2xl:pb-[150px]`}>
                        <li className='md:ml-[400px] ml-[250px] cursor-pointer text-3xl 2xl:text-4xl' onClick={() => setHamBurger(!hamBurger)}>
                            {hamBurger ? '' : <RxCross2 />}
                        </li>
                        <li>
                            <p className='text-lg 2xl:text-xl'>Menu</p>
                        </li>
                        <li className='py-[10px]'>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-emeraldText' : 'text-black'}>Home</NavLink>
                        </li>
                        <li className='py-[10px]'>
                            <NavLink to="about" className={({ isActive }) => isActive ? 'text-emeraldText' : 'text-black'}>About</NavLink>
                        </li>
                        <li className='py-[10px]'>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-emeraldText' : 'text-black'}>Projects</NavLink>
                        </li>
                        <li className='py-[10px]'>
                            <NavLink to="/skills" className={({ isActive }) => isActive ? 'text-emeraldText' : 'text-black'}>Skills</NavLink>
                        </li>
                        <li className='py-[10px]'>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-emeraldText' : 'text-black'}>Contact</NavLink>
                        </li>
                    </ul> */}


                </div>
            </nav>
        </>
    )
}

export default Navbar