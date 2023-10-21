import { useState} from "react";

interface Props {
    submit: (name: string, date: string) => void
}
const CompanyForm = ({submit = (name, date) => {}}: Props) => {



    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    function isValidDate(dateString: string) {
        // Attempt to parse the input string as a date
        const parsedDate = Date.parse(dateString);

        // Check if the parsed date is a valid date
        return !isNaN(parsedDate) && !isNaN(new Date(parsedDate).getDate());
    }
    const handleSubmit = () => {
        if(isValidDate(date) && name !== ""){
            submit(name, date);
        } else {
            alert("no proper input!");
        }
    }
    return(
        <>
            <div className="space-y-12 px-10 py-10 rounded-lg p-4 bg-slate-200">
                <div className="border-b border-gray-900/10 pb-12">
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        To complete the signup process, please give information about the company.
                    </p>

                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Tell us about your company</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">


                    <div className="sm:col-span-1">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Founding Date
                        </label>
                        <div className="mt-2">
                            <input
                                onChange = {(e) => setDate(e.target.value)}
                                placeholder="yyyy-mm-dd"
                                type="text"
                                name="company-name"
                                id="company-name"
                                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Company Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange = {(e) => setName(e.target.value)}
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={handleSubmit} className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Next
                </button>
            </div>
        </>
        );

}

export default CompanyForm;