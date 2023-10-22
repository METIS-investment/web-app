import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {useNavigate} from "react-router-dom";
import CheckoutForm from "../components/CheckOutForm";
import {auth} from "./firebase";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51O3HaIC7Nc96FuKDYGMSnRuuKhlsDXchuJuz58rxcefONebf4xE58Sh6ETQkyRXzFHxfTngNM70HoSmPNGLuUyjV00ZXvB9QC1");

export default function OneTimeInvestment({login}) {
    const [clientSecret, setClientSecret] = useState("");
    const nav = useNavigate();
    const [nu, setNumber] = useState(0);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (!login) {
            nav('/');
        }
    }, []);

    const load_from_price = () => {
        auth.currentUser?.getIdToken(true).then(function (idToken) {
            console.log("got hihi");
            fetch("https://api.metis-investment.com/one-time-investment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer `+idToken
                },
                body: JSON.stringify({
                    value: (nu*100)
                }),
            })
                .then(res => res.json())
                .then((data) => {
                    console.log("got here");
                    console.log(data)
                    console.log("hoi")
                    console.log(data.pi);
                    setClientSecret(data.pi);
                });
        });
    };

    const handleChange = (e) => {
        setNumber(parseInt(e.target.value, 10));
    };

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    if (!clientSecret) {
        return (
            <div className="px-200 py-20 flex-cols justify-center space-y-10 pb-200 pt-200">
                <div className="text-center">
                    <a>Enter your investment amount in €.</a><br/>
                    <input className="border-4 border-blue-400 rounded" type="number" value={nu} onChange={handleChange}/>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-400 p-2 rounded" onClick={load_from_price}>Submit</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="px-200 mx-200 py-20">
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        );
    }
}
