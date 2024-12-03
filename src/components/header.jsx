import { Header_nav } from "./nav";
import { Video } from './video'
import { Text } from './txt'
import '/src/app.css'

export function Header() {
    return (
        <>
            <header className="mb-[264px] mx-auto">
                <section className="mb-[264px]">
                    <img src="/src/assets/imgs/header_img2.png" className='absolute left-0 -z-10 mx-auto' alt="" />
                    <Header_nav />
                    <Text/>
                    <h2 className='z-20 text-2 font-normal absolute flex items-center top-[550px] left-[-384px] before:bg-mouse before:block before:w-5 before:h-6 before:bg-no-repeat before:rotate-90 before:mr-3 -rotate-90 after:block after:h-[2px] after:w-[725px] after:bg-wh_5 after:ml-8'>Scroll down</h2>
                    <button className='z-20 transition-transform delay-25 active:scale-95 flex mt-80 mx-auto'><img src="src\assets\icons\Play Button.svg" alt=""/></button>
                    <Video />
                </section>
                <section className='mx-auto relative'>
                    <section className="flex gap-x-[448px] text-[#FFFFFF] mb-[303px]">
                        <div className='w-[628px]'>
                            <h2 className='text-6 leading-6 font-bold mb-8 font-inter'>Today in <br />
                            Beau Mountain</h2>
                            <div className='flex gap-x-[40px]'>
                                <p className='text-4 leading-4 text-[#FFFFFF99]'>Condition</p>
                                <h2 className='flex items-center gap-x-[13px] before:bg-[url("src/assets/icons/fluent_weather-hail-day-20-filled.svg")] before:w-[56px] before:h-[56px] before:block text-5 leading-5'>Cloudy sunny</h2>
                            </div>
                        </div>
                        <div className='w-[512px] rounded-xl'>
                            <h2 className='w-full bg-[#11327B] py-6 px-12 text-5 leading-5 font-bold rounded-t-xl font-inter'>Opening Hours</h2>
                            <div className='bg-blur px-12 py-6 backdrop-blur-xl  rounded-b-xl'>
                                <p className='text-2 leading-2 font-medium mb-[14px]'>Open Today</p>
                                <h3 className='mb-12 text-5 leading-5 font-bold font-inter'>09:00 - 06:00 PM</h3>
                                <a href="#" className='flex items-center gap-x-4 after:block after:bg-arrow after:bg-no-repeat after:w-14 after:h-4 text-3 leading-3 text-[#16F1FF]'>See all schedule</a>
                            </div>
                        </div>
                    </section>
                    <section className='flex gap-x-[143px] bg-[#020E20]'>
                        <div>
                            <h2 className='flex gap-x-6 items-center font-bold text-5 leading-5 font-inter mb-16'><span className='px-[35px] py-4 bg-[#2AEF84] text-black text-5 leading-5 font-bold rounded-[100%]'>3 Day</span> Forecast</h2>
                        </div>
                        <div className='bg-[url("src/assets/imgs/Route_Map.png")] w-[780px] h-[718px]'></div>
                    </section> 
                </section>
            </header>
        </>
    )
}