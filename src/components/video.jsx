export function Video() {
    return (
        <div className="flex relative items-center mx-auto">
            <section className="flex gap-x-12 mt-32">
                <div className="bg-video w-[302px] bg-no-repeat h-80 relative">
                    <a href="#" className="pt-8 pl-8 text-3 leading-3 flex items-center gap-x-4 after:block after:bg-arrow after:bg-no-repeat after:w-14 after:h-4">See Video</a>
                    <h2 href="#" className="absolute bottom-0 text-center w-full py-4 bg-blur backdrop-blur-xl rounded-b-xl">Our Facilities</h2>
                </div>
                <div className="flex flex-col w-[507px] align-text-bottom pt-[73px]">
                    <h2 className="text-7 mb-6 whitespace-nowrap leading-7 font-bold">Look deep into Beau</h2>
                    <h3 className="text-4 leading-4 text-[#16F1FF] mb-6 font-inter">The beautiful mountain view</h3>
                    <p className="text-1 leading-1">A mountain is a part of the earth's crust that is higher than the area around it. Mountains usually have steep sides that significantly expose the bedrock.</p>
                </div>
            </section>
            <section className="bg-blur backdrop-blur-xl h-[243px] inline-block absolute w-[528px] right-[-164px] rounded-xl pt-8 mt-36">
                <a href="#" className="text-3 leading-3 ml-8 flex items-center gap-x-4 after:block after:bg-arrow after:bg-no-repeat after:w-14 after:h-4">Our Blog</a>
                <img className="absolute bottom-0 rounded-b-xl" src="/src/assets/imgs/tent.png" alt="" />
            </section>
        </div>
    )
}