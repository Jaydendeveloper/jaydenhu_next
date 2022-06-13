import {ArrowRightIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from "react";
import {app, user, auth, db} from "./fbconfig"

const Navbar = () => {

const [loading, setLoading] = useState(false)

    return (
        <div className='mt-10 mb-[0px] flex flex-wrap flex-col space-y-4 bottom-20 lg:space-x-10 justify-center lg:flex-row md:flex-col md:space-y-4 lg:space-y-0'>
            <Link href={'/contact'}>
                <div>
                    <div className='fill-anim pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 border-red-500  cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                        <h2 className='text-[30px] ml-5 mt-10 text-[white] hover:text-red-500'>Contact</h2>
                        <ArrowRightIcon className='pop-out-arrow relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-red-500'/>
                    </div>
                </div>
            </Link>
            <Link href={'/services'}>
                <div>
                    <div className='fill-anim pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer border-red-500 rounded-md m-auto md:m-auto lg:m-0'>
                        <h2 className='text-[30px] ml-5 mt-10 text-[white] hover:text-red-500'>Services</h2>
                        <ArrowRightIcon className='pop-out-arrow relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-red-500'/>
                    </div>
                </div>
            </Link>
            <Link href={'/info'}>
                <div>
                    <div className='fill-anim pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer border-red-500 rounded-md m-auto md:m-auto lg:m-0'>
                        <h2 className='text-[30px] ml-5 mt-10 text-[white] hover:text-red-500'>Info</h2>
                        <ArrowRightIcon className='pop-out-arrow relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-red-500'/>
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default Navbar;