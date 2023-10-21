import CustomButton from "./customButton";

const FirstBlock = () => {
    return (

        <div className="relative h-screen w-full">
        <video className="absolute top-0 left-0 z-0 w-screen h-screen object-cover" autoPlay loop muted playsInline>
            <source src="https://github.com/METIS-investment/resources/raw/main/web_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-20 z-5"></div>
        <div className="absolute inset-0 flex flex-col justify-center text-center z-10 mx-auto max-w-2xl sm:pt-32 lg:pt-56">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Elevating Growth, Empowering Tomorrow.
            </h1>
            <p className="mt-6 text-lg leading-8  text-white">
            Unlocking potential and enabling growth all over the world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <CustomButton text="Apply Now!" destination="apply" />
            </div>
        </div>
        </div>

    );
}

export default FirstBlock;