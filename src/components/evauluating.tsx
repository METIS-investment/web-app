import CustomButton from "./customButton";
import {useState} from "react";
import {SquareLoader} from "react-spinners";


const Evauluating = () => {

    const [step, setStep] = useState("Evaluating growsth...")
    return (
        <div className="mx-auto max-w-2xl sm:pt-32 lg:pt-56">
            <div className="flex justify-center align-middle">
                <div className = "text-center">
                    {step}
                </div>
                <SquareLoader color="#3b82f6" />
            </div>
        </div>
    );
}