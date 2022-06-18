import Link from "next/link";
import Header from "./Header";

const Services = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[300px] relative top-[200px] lg:left-0">
            <Link href="/contact">
                <div className="pop-out h-[auto] w-[200px] text-white mb-5 md:mb-5 lg:mb-5 md:w-[400px] lg:w-[400px]  cursor-pointer rounded-md">
                    <img className="h-[150px] relative left-5 md:left-[30%] lg:left-[30%]" src="dev.png" alt="" />
                    <h2 className="text-[30px] text-center mt-10 mb-3">Web development</h2>
                    <div className="text-center mb-5">Building your ordered website based on your visual design. I work with HTML, CSS, JS, React.js or Next.js and if needed with a firebase backend.</div>
                </div>
            </Link>
            <Link href="/contact">
                <div className="pop-out h-[auto] w-[200px] text-white mb-5 md:mb-5 lg:mb-5 md:w-[400px] lg:w-[400px] cursor-pointer rounded-md">
                    <img className="h-[150px] relative left-5 md:left-[30%] lg:left-[30%]" src="host.png" alt="" />
                    <h2 className="text-[30px] text-center mt-10 mb-3">Help in hosting</h2>
                    <div className="text-center mb-5">I will help in hosting your website is you don&apos;t have enough experience doing it.</div>
                </div>
            </Link>
            </div>
        </>
    );
}
 
export default Services;