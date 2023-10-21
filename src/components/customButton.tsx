import { Link } from "react-router-dom";
import {JSX} from "react";

interface WrapperProps {
    text: string;
    destination: string;
}
const CustomButton = (props: WrapperProps): JSX.Element => {
    return (
        <>
            <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Link to={"/"+props.destination}>{props.text}</Link>
            </button>

        </>
    );
}

export default CustomButton;