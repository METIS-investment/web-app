import CountUp from "react-countup";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    return (
    <>
        <div className="lg:block mx-auto bg-slate-200">
            <div className="flex justify-between  px-64 py-20">
                <div className="w-auto h-40 bg-slate-200 text-center rounded-lg p-4">
                    <h2>Active Users</h2>
                    <CountUp
                        start={0}
                        end={69420}
                        duration={2.5}
                    >
                        {({ countUpRef, start }) => (
                            <div className="flex justify-center align-middle">
                                    <span className="text-4xl font-bold" ref={countUpRef} />

                            </div>
                        )}
                    </CountUp>

                </div>
                <div>
                    <div className="w-auto h-40 bg-slate-200 text-center rounded-lg p-4">
                        <h2>$ Invested</h2>
                        <CountUp
                            start={600000}
                            separator=","
                            end={722082}
                            duration={3}
                        >
                            {({ countUpRef, start }) => (

                                <div className="flex justify-center align-middle">
                                    <span className="text-4xl font-bold" ref={countUpRef} />

                                </div>
                            )}
                        </CountUp>

                    </div>
                </div>
                <div>
                    <div className="w-auto h-40 bg-slate-200 text-center rounded-lg p-4">
                        <h2>Businesses Supported</h2>
                        <CountUp
                            start={0}
                            end={1000}
                            suffix={"+"}
                            duration={2.75}
                        >
                            {({ countUpRef, start }) => (

                                <div className="flex justify-center align-middle">
                                    <span className="text-4xl font-bold" ref={countUpRef} />

                                </div>
                            )}
                        </CountUp>

                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Statistics;