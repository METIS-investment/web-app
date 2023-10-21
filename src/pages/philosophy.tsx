import {useNavigate} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Philosophy() {
    const nav = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div>
        {isMobile ? (
            <div className="px-3">
<div className="flex-col mx-50 my-5 space-y-5 mt-16">
            <h1 className="text-center font-bold text-3xl">Investing in the Future of Small Businesses</h1>
            <h2 className="text-center text-2xl">Empower. Transform. Prosper.</h2>
            <div className="flex flex-col justify-between items-center space-y-4">
                <div>
                    <h3 className="font-bold text-2xl">Our Vision</h3>
                    <p className="text-sm">Our vision is to create a transformative fund focused on financially empowering small businesses in developing nations, often overlooked by traditional banking. Our dual mission aims to provide essential capital for growth and innovation, while adhering to ethical and environmental standards.</p>
                </div>
                <img src="/globe.png" className="w-36"/>
            </div>
            <div className="flex flex-col justify-between items-center space-y-4">
                <img src="/hurdles.png" className="w-36"/>
                <div>
                    <h3 className="font-bold text-2xl">The Challenge</h3><br/>
                    <p className="text-sm"><span className="font-bold">Funding</span>: Broadening participation expands the fund's reach, enabling us to support more small businesses and amplify our socio-economic impact. It also fosters collective ownership and engagement, uniting a larger audience in the effort to combat global economic inequalities and drive sustainable development.</p><br/>
                    <p className="text-sm"><span className="font-bold">Growth</span>: The capital provision is directly aimed at stimulating economic activity within the local communities of small businesses. By empowering them to grow and innovate, we contribute to a cascade of benefits such as job creation, increased production, and higher community incomes, leading to a more stable and profitable local economy. The ultimate goal is to drive self-sustaining economic loops that result in progress in all facets of life.</p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center space-y-4">
                <div>
                    <h3 className="font-bold text-2xl">Dual Commitment</h3><br/>
                    <p className="text-sm"><span className="font-bold">Capital Provision</span>: Our fund provides essential capital to small businesses in developing nations, enabling them to overcome financial barriers for growth and innovation. This targeted capital infusion not only fuels local economies but also aligns with ethical and environmental standards for sustainable development.</p><br/>
                    <p className="text-sm"><span className="font-bold">Ethical Investment</span>: Investing in our fund enables economic growth, social progress, and addresses global inequalities. Join us to make a lasting impact, one investment at a time.</p>
                </div>
                <img src="/scale.png" className="w-36"/>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-400 p-2 rounded-md text-lg">Join Us</button>
            </div>
        </div>
            </div>

            
        
        ) : (
            <div className="flex-col mx-200 my-10 space-y-10 mt-32">
                <h1 className="text-center font-bold text-5xl">Investing in the Future of Small Businesses</h1>
                <h2 className="text-center text-3xl">Empower. Transform. Prosper.</h2>
                <div className="flex justify-between items-center space-x-8">
                    <div>
                        <h3 className="font-bold text-3xl">Our Vision</h3>
                        <p>Our vision is to create a transformative fund focused on financially empowering small businesses in developing nations, often overlooked by traditional banking. Our dual mission aims to provide essential capital for growth and innovation, while adhering to ethical and environmental standards.</p>
                    </div>
                    <img src="/globe.png" className="w-72"/>
                </div>
                <div className="flex justify-between items-center space-x-8">
                    <img src="/hurdles.png" className="w-72"/>
                    <div>
                        <h3 className="font-bold text-3xl">The Challenge</h3><br/>
                        <a><a className="font-bold">Funding</a>: Broadening participation expands the fund's reach, enabling us to support more small businesses and amplify our socio-economic impact. It also fosters collective ownership and engagement, uniting a larger audience in the effort to combat global economic inequalities and drive sustainable development.</a><br/><br/>
                        <a><a className="font-bold">Growth</a>: The capital provision is directly aimed at stimulating economic activity within the local communities of small businesses. By empowering them to grow and innovate, we contribute to a cascade of benefits such as job creation, increased production, and higher community incomes, leading to a more stable and profitable local economy. The ultimate goal is to drive self-sustaining economic loops that result in progress in all facets of life.</a><br/>
                    </div>
                </div>
                <div className="flex justify-between items-center space-x-8">
                    <div>
                        <h3 className="font-bold text-3xl">Dual Commitment</h3><br/>
                        <p><a className="font-bold">Capital Provision</a>: Our fund provides essential capital to small businesses in developing nations, enabling them to overcome financial barriers for growth and innovation. This targeted capital infusion not only fuels local economies but also aligns with ethical and environmental standards for sustainable development.</p><br/>
                        <p><a className="font-bold">Ethical Investment</a>: Investing in our fund enables economic growth, social progress, and addresses global inequalities. Join us to make a lasting impact, one investment at a time.</p>
                    </div>
                    <img src="/scale.png" className="w-72"/>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-400 p-4 rounded-md text-1xl">Join Us</button>
                </div>
        </div>
      )}
    </div>
    );
}

export default Philosophy;
