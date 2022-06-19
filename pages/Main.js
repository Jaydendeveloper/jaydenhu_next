import Image from "next/image";

const Main = () => {
        /* <h2 className="text-[35px] text-center text-[#38b4c8]">Jayden <br /><div className="text-white" > &lt; Web developer /&gt;</div></h2> */

    return (
    <div className="md:mt-[150px] md:mb[150px] lg:mt-[150px] lg:mb-[150px]"> 
{/*        <div className="text-[150px] hidden md:block lg:block mt-[15px] float-left md:text-[150px] lg:text-[250px] lg:mt-[-110px] md:mt-[-40px] md:ml-[30px] lg:ml-[300px] text-white">
            &lt;<span className="text-[#38b4c8]">/</span>&gt;
        </div> */}
        <div className="hidden md:block lg:block mt-[15px] float-left md:text-[150px] lg:text-[250px] lg:mt-[-110px] md:mt-[-40px] md:ml-[30px] lg:ml-[300px] text-white">
            {/* <img className="h-[400px] mainpic" src="main.png" /> */}
            <Image height={400} width={400} src="/main.png" className="mainpic"/>
        </div>
        <div className="text-white ml-[30px] max-w-[300px] mt-[200px] md:ml-[300px] lg:ml-[780px] md:max-w-full lg:max-w-full">
            <div className="text-[50px]">Welcome to my page!
        </div>
            <div className="max-w-[700px] mt-5">I am a full stack web developer, currently open for new clients. Depending on the website complexity I work with HTML, CSS, JS, React.js, Next.js and Firebase as backend. You can look at my portfolio if you just scroll down a little bit.</div>
        </div>
    </div>   
    );
}
 
export default Main;