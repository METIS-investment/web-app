import {useNavigate} from "react-router-dom";

function Philosophy() {
    const nav = useNavigate();

    return (
        <div className="flex-col mx-200 my-10 space-y-10 mt-32">
            <h1 className="text-center font-bold text-5xl">Investing in the Future of Small Businesses</h1>
            <h2 className="text-center text-3xl">Empower. Transform. Prosper.</h2>
            <div className="flex justify-between items-center space-x-8">
                <div>
                    <h3 className="font-bold text-3xl">Our Vision</h3>
                    <p>Establish a transformative fund that bridges the financial gap for underserved entrepreneurs.</p>
                </div>
                <img src="/globe.png" className="w-72"/>
            </div>
            <div className="flex justify-between items-center space-x-8">
                <img src="/hurdles.png" className="w-72"/>
                <div>
                    <h3 className="font-bold text-3xl">The Challenge</h3><br/>
                    <a><a className="font-bold">Funding</a>: Small enterprises often face hurdles in acquiring necessary funding.</a><br/>
                    <a><a className="font-bold">Growth</a>: These businesses are crucial for local community growth.</a><br/>
                    <a><a className="font-bold">Independence</a>: They play a key role in fostering economic independence and job opportunities.</a>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-8">
                <div>
                    <h3 className="font-bold text-3xl">Dual Commitment</h3><br/>
                    <p><a className="font-bold">Capital Provision</a>: Deliver essential capital for expansion and innovation.</p><br/>
                    <p><a className="font-bold">Ethical Investment</a>: Adhere to the highest ethical and environmental standards.</p>
                </div>
                <img src="/scale.png" className="w-72"/>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-400 p-4 rounded-md text-1xl" onClick={() => { nav('/apply'); }}>Join Us</button>
            </div>
            <div className="text-center">
                Introducing an innovative and impactful business concept that embodies both social responsibility and financial empowerment: Our vision is to establish a transformative fund that seeks to invest in the future of small businesses in developing nations, businesses too often overlooked by traditional banking institutions.
                In today's interconnected world, the global economy thrives on diversity and inclusivity. However, small enterprises in developing nations often face significant barriers in accessing the funding they need to grow and thrive. These businesses represent the backbone of their local communities, fostering economic independence, creating job opportunities, and driving sustainable development.
                Our mission is clear and inspiring: to bridge the financial gap and provide these underserved entrepreneurs with the financial resources they require to unlock their full potential. We firmly believe that every business, regardless of size or location, should have the chance to flourish.
                Our fund is guided by a dual commitment. Firstly, we aim to provide small businesses in developing nations with the essential capital they need to expand, innovate, and become self-sustaining. This, in turn, fuels local economic growth and social progress.
                Secondly, we are dedicated to ensuring that our investments adhere to the highest ethical and environmental standards. We believe that responsible investment is not only an obligation but a pathway to a more sustainable and inclusive global economy.
                By investing in our fund, you are joining a movement that transcends borders and empowers communities. You are enabling entrepreneurs to transform their aspirations into reality, enabling their families and communities to thrive, and playing a vital role in addressing global economic inequalities.
                Together, we can create a brighter future where the potential of small businesses in developing nations is realized, prosperity is shared, and economic disparities are diminished. Join us on this journey to make a lasting impact, one investment at a time.
            </div>
      </div>
    );
}

export default Philosophy;
