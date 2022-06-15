import {ArrowRightIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import { Router, useRouter } from 'next/router';
import { useState } from "react";
import {app, user, auth, db} from "./fbconfig"
import Portfolio from './Portfolio';

const Navbar = () => {

const [loading, setLoading] = useState(false)

    return (
<>
<div className='mt-[250px] mb-[0px] flex flex-wrap flex-col space-y-4 bottom-20 lg:gap-5 justify-center lg:flex-row md:flex-col md:space-y-4 lg:space-y-0'>
            <Link href={'/contact'}>
                <div className='text-xl text-white'>
                    <div className='text-center mb-2'>Contact me here:</div>
                    <div className='fill-anim pop-out h-[100px] w-[300px] md:h-[100px] md:w-[400px] lg:h-[100px] lg:w-[400px] border-2 border-[#38b4c8]  cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                        <h2 className='text-[30px] ml-5 mt-10 text-white hover:text-[gray]'>Contact</h2>
                        <ArrowRightIcon className='pop-out-arrow relative w-9 left-[250px]  top-[-10px] md:left-[350px] md:top-[-10px] lg:left-[350px] lg:top-[-10px] text-[#38b4c8]'/>
                    </div>
                </div>
            </Link>
            <Link href={'/services'}>
                <div className='text-xl text-white'>
                    <div className='text-center mb-2'>Look at my services:</div>
                    <div className='fill-anim pop-out h-[100px] w-[300px] md:h-[100px] md:w-[400px] lg:h-[100px] lg:w-[400px] border-2 cursor-pointer border-[#38b4c8] rounded-md m-auto md:m-auto lg:m-0'>
                        <h2 className='text-[30px] ml-5 mt-10 text-white hover:text-[gray]'>Services</h2>
                        <ArrowRightIcon className='pop-out-arrow relative w-9 left-[250px]  top-[-10px] md:left-[350px] md:top-[-10px] lg:left-[350px] lg:top-[-10px] text-[#38b4c8]'/>
                    </div>
                </div>
            </Link>
            <Link href={'/info'}>
                <div className='text-xl text-white'>
                    <div className='text-center mb-2'>More information:</div> 
                    <div className='fill-anim pop-out h-[100px] w-[300px] md:h-1000px] md:w-[400px] lg:h-[100px] lg:w-[400px] border-2 cursor-pointer border-[#38b4c8] rounded-md m-auto md:m-auto lg:m-0'>
                        <h2 className='text-[30px] ml-5 mt-10 text-white hover:text-[gray]'>Info</h2>
                        <ArrowRightIcon className='pop-out-arrow relative w-9 left-[250px]  top-[-10px] md:left-[350px] md:top-[-10px] lg:left-[350px] lg:top-[-10px] text-[#38b4c8]'/>
                    </div>
                </div>
            </Link>
        </div>
        <div className='flex justify-center'>
            <div className='text-white bottom-3 absolute lg:block hidden'>
                <Link href="#portfolio">
                <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
                </Link>
            </div>
        </div>
</>
    );
}
 
export default Navbar;