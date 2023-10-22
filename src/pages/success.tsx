import {useNavigate} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import CustomButton from "../components/customButton";

export default function Success() {
    return (<div className="px-200 flex-cols justify-center text-center pt-36 pb-200 space-y-20">
        <h1 className="text-3xl font-bold">SUCCESS!</h1>
        <CustomButton text={"Home"} destination={''}></CustomButton>
    </div>);
}
