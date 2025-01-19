import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ContactForm = () => {
    // https://formspree.io/f/mkggazbj
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')



    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "39492388-5177-4a49-8f38-121eb560b17a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Your message sent successfully🤗",
                icon: "success"
            });
        }

        setFullname("")
        setEmail("")
        setMessage("")
    };
    return (
        <>
            <div className='h-full 2xl:h-[70vh] w-full md:w-[50%] 2xl:w-[55%] px-5  shadow-lg shadow-slate-400 rounded-xl border-[1px] md:flex-none flex flex-col items-center justify-center'>
                <p className='text-center pt-3 md:pl-[180px] 2xl:pl-[220px] text-[22px] md:text-[25px] 2xl:text-[35px] font-bold tracking-[1px]'>Send a message</p>
                <div className='flex h-[90%] 2xl:h-full 2xl:w-full gap-[50px] 2xl:gap-[100px] '>
                    <div className='w-[200px] 2xl:w-[400px] h-[250px] 2xl:h-[300px] my-auto hidden md:block '>
                        <img src="/3dphone.webp" alt="" className='h-full w-full object-cover ' />
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-evenly text-[20px] font-normal w-auto 2xl:w-[70%]'>
                        <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" name="Name" id="fullname" placeholder='Your name' className='py-1 pr-0 md:pr-10 outline-none border-b-2 hover:border-black border-slate-300' required />
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="Email" id="email" placeholder='Your email' className='py-1  outline-none bg-transparent border-b-2 hover:border-black border-slate-300' required />
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="text" id="Message" placeholder='Your message' className='py-1  outline-none bg-transparent border-b-2 hover:border-black border-slate-300' required></textarea>
                        <button type='submit' className='bg-mainBg text-white p-2 mx-[60px] rounded-[50px] my-4 relative hover:bg-white hover:border-[1px] hover:border-[#17202a] hover:text-[#17202a] duration-300 ease-linear'>Send</button>


                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm