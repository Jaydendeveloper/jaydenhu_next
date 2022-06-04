import { ArrowRightIcon } from "@heroicons/react/outline";

const Portfolio = () => {
/*     return (
        <div className="text-center text-[30px] text-[gray] border-b-2 border-orange-500 mb-10">
            Portfolio
        </div>
        
    ); */
    return (
        <div>
        <div className="text-center text-[30px] text-[gray] border-b-2 border-orange-500 mb-10">
            Portfolio
        </div>
        <div className='mt-10 mb-10 flex flex-wrap flex-col space-y-4 top-20 lg:space-x-10 justify-center lg:flex-row md:flex-col md:space-y-4 lg:space-y-0'>
            <div className='pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                <h2 className='text-[30px] ml-5 mt-10 text-[gray]'>Jayden-Netflix</h2>
                <ArrowRightIcon className='relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-orange-500'/>
            </div>
            
            <div className='pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                <h2 className='text-[30px] ml-5 mt-10 text-[gray]'>Jayden-weather</h2>
                <ArrowRightIcon className='relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-orange-500'/>
            </div>

            <div className='pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                <h2 className='text-[30px] ml-5 mt-10 text-[gray]'>AlphaTDMA</h2>
                <ArrowRightIcon className='relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-orange-500'/>
            </div>
            </div>
            <div className='mt-10 mb-10 flex flex-wrap flex-col space-y-4 top-20 lg:space-x-10 justify-center lg:flex-row md:flex-col md:space-y-4 lg:space-y-0'>
            <div className='pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                <h2 className='text-[30px] ml-5 mt-10 text-[gray]'>Jayden-Netflix</h2>
                <ArrowRightIcon className='relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-orange-500'/>
            </div>
            
            <div className='pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                <h2 className='text-[30px] ml-5 mt-10 text-[gray]'>Jayden-weather</h2>
                <ArrowRightIcon className='relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-orange-500'/>
            </div>

            <div className='pop-out h-[250px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[250px] lg:w-[400px] border-2 cursor-pointer rounded-md m-auto md:m-auto lg:m-0'>
                <h2 className='text-[30px] ml-5 mt-10 text-[gray]'>AlphaTDMA</h2>
                <ArrowRightIcon className='relative w-9 left-[250px]  top-[120px] md:left-[350px] md:top-[120px] lg:left-[350px] lg:top-[120px] text-orange-500'/>
            </div>
            </div>
        </div>
    );
}
 
export default Portfolio;