import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";
import { useState} from "react";

interface Props {
    submit: (year1: number[], year2: number[], year3: number[], year4: number[], year5: number[]) => void
}



const ValueForm = ({submit = (year1, year2, year3, year4, year5) => {}}: Props) => {

    const years = [2018, 2019, 2020, 2021, 2022];

    const [profit1, setProfit1] = useState(0);
    const [profit2, setProfit2] = useState(0);
    const [profit3, setProfit3] = useState(0);
    const [profit4, setProfit4] = useState(0);
    const [profit5, setProfit5] = useState(0);

    const [revenue1, setRevenue1] = useState(0);
    const [revenue2, setRevenue2] = useState(0);
    const [revenue3, setRevenue3] = useState(0);
    const [revenue4, setRevenue4] = useState(0);
    const [revenue5, setRevenue5] = useState(0);

    const [assets1, setAssets1] = useState(0);
    const [assets2, setAssets2] = useState(0);
    const [assets3, setAssets3] = useState(0);
    const [assets4, setAssets4] = useState(0);
    const [assets5, setAssets5] = useState(0);

    const [liability1, setLiability1] = useState(0);
    const [liability2, setLiability2] = useState(0);
    const [liability3, setLiability3] = useState(0);
    const [liability4, setLiability4] = useState(0);
    const [liability5, setLiability5] = useState(0);

    const handleSubmit = (event: any) => {
        submit([profit1, revenue1, assets1, liability1, years[0]],
            [profit2, revenue2, assets2, liability2, years[1]],
            [profit3, revenue3, assets3, liability3, years[2]],
            [profit4, revenue4, assets4, liability4, years[3]],
            [profit5, revenue5, assets5, liability5, years[4]]
            )
    }

    return (
        <>
            <div className="space-y-12 px-10 py-10 rounded-lg p-4 bg-slate-200">
                <div className="border-b border-gray-900/10 pb-12">
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        To complete the signup process, please give information about the company.
                    </p>

                </div>


                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Tell us about the performance of your company</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-4 m-0 p-0">
                            {years[4]+ " (Optional) "}
                        </div>
                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setProfit1(Number(e.target.value))}
                                    placeholder="Profit"
                                    type="text"
                                    name="profit-1"
                                    id="profit-1"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setRevenue1(Number(e.target.value))}
                                    placeholder="Revenue"
                                    type="text"
                                    name="revenue-1"
                                    id="revenue-1"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setAssets1(Number(e.target.value))}
                                    placeholder="Assets"
                                    type="text"
                                    name="assets-1"
                                    id="assets-1"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLiability1(Number(e.target.value))}
                                    placeholder="Liability"
                                    type="text"
                                    name="liability-1"
                                    id="liability-1"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-4 m-0 p-0">
                            {years[3]+ " (Optional) "}
                        </div>
                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setProfit2(Number(e.target.value))}
                                    placeholder="Profit"
                                    type="text"
                                    name="profit-2"
                                    id="profit-2"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setRevenue2(Number(e.target.value))}
                                    placeholder="Revenue"
                                    type="text"
                                    name="revenue-2"
                                    id="revenue-2"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setAssets2(Number(e.target.value))}
                                    placeholder="Assets"
                                    type="text"
                                    name="assets-2"
                                    id="assets-2"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLiability2(Number(e.target.value))}
                                    placeholder="Liabilities"
                                    type="text"
                                    name="liability-2"
                                    id="liability-2"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-4 m-0 p-0">
                            {years[2]+ " (Optional) "}
                        </div>
                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setProfit3(Number(e.target.value))}
                                    placeholder="Profit"
                                    type="text"
                                    name="profit-3"
                                    id="profit-3"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setRevenue3(Number(e.target.value))}
                                    placeholder="Revenue"
                                    type="text"
                                    name="revenue-3"
                                    id="revenue-3"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setAssets3(Number(e.target.value))}
                                    placeholder="Assets"
                                    type="text"
                                    name="assets-3"
                                    id="assets-3"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLiability3(Number(e.target.value))}
                                    placeholder="Liabilities"
                                    type="text"
                                    name="liabilities-3"
                                    id="liabilities-3"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-4 m-0 p-0">
                            {years[1]+ " (Optional) "}
                        </div>
                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setProfit4(Number(e.target.value))}
                                    placeholder="Profit"
                                    type="text"
                                    name="profit-4"
                                    id="profit-4"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setRevenue4(Number(e.target.value))}
                                    placeholder="Revenue"
                                    type="text"
                                    name="revenue-4"
                                    id="revenue-4"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setAssets4(Number(e.target.value))}
                                    placeholder="Assets"
                                    type="text"
                                    name="assets-4"
                                    id="asssets-4"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLiability4(Number(e.target.value))}
                                    placeholder="Liabilities"
                                    type="text"
                                    name="liabilities-4"
                                    id="liabilities-4"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-4 m-0 p-0">
                            {years[0] + " (Optional) "}
                        </div>
                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setProfit5(Number(e.target.value))}
                                    placeholder="Profit"
                                    type="text"
                                    name="profit-5"
                                    id="profit-5"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setRevenue5(Number(e.target.value))}
                                    placeholder="Revenue"
                                    type="text"
                                    name="revenue-5"
                                    id="revenue-5"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">

                            <div className="mt-2">
                                <input
                                    onChange={(e) => setAssets5(Number(e.target.value))}
                                    placeholder="Assets"
                                    type="text"
                                    name="assets-5"
                                    id="assets-5"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setLiability5(Number(e.target.value))}
                                    placeholder="Liabilities"
                                    type="text"
                                    name="liability-5"
                                    id="liability-5"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={handleSubmit} className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                </button>
            </div>
            <div>
            </div>
        </>
    );
}

export default ValueForm;