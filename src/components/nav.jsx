import '/src/app.css'

export function Header_nav() {
    return (
        <>
            <section className="flex gap-x-[302px] items-center py-8 mx-auto whitespace-nowrap z-20">
                <div className="flex gap-x-2 z-10">
                    <img src="src\assets\icons\logo.svg" alt="" />
                    <h1 className="text-3 leading-3 font-bold">Beau Montain</h1>
                </div>
                <ul className="flex gap-x-12 items-center z-10">
                    <li className="text-1 leading-1 font-normal relative headr_a"><a href="">Home</a></li>
                    <li className="text-1 leading-1 font-normal relative headr_a"><a href="">Package</a></li>
                    <li className="text-1 leading-1 font-normal relative headr_a"><a href="">Ticket</a></li>
                    <li className="text-1 leading-1 font-normal relative headr_a"><a href="">About Us</a></li>
                    <li className="text-1 leading-1 font-normal relative headr_a"><a href="">Contact Us</a></li>
                    <li className="text-1 leading-1 font-normal relative headr_a"><a href="">Blog</a></li>
                </ul>
                <button className="pt-2 pb-2 pl-2 pr-12 bg-btn items-center gap-x-4 rounded-xl z-50 flex w-[157px]">
                    <img src="src\assets\icons\yout.svg" alt="" />
                    <h2 className="font-medium text-2 leading-2">Youtube</h2>
                </button>
                <div className='absolute left-0 top-[112px] w-[1920px] h-[2px] bg-wh_5'></div>
            </section>
        </>
    )
}