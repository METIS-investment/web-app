import CustomButton from "./customButton";
const FirstBlock = () => {
    return (
        <div className="mx-auto h-screen max-w-2xl sm:pt-32 lg:pt-56">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Elevating Growth, Empowering Tomorrow.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    We are supporting growing companies in developing countries. Here is what they say:
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <CustomButton text="Apply Now!" destination="apply" />
                </div>
            </div>
        </div>
    );
}

export default FirstBlock;