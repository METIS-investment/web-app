import {SquareLoader} from "react-spinners";
import {useEffect, useState} from "react";
import {auth} from "../../pages/firebase";

interface Props {
    value: {
    step: number,
    firstname: string,
    lastname: string,
    email: string,
    country: string,
    street: string,
    city: string,
    zip: string,
    companyname: string,
    creationdate: string,
    year1: number[],
    year2: number[],
    year3: number[],
    year4: number[],
    year5: number[]
}
}
const CheckSuccess = (props: Props) => {

    const [done, setDone] = useState(false);


    useEffect(() => {


        auth.currentUser?.getIdToken().then(function (idToken) {
            fetch('https://api.metis-investment.com/company/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer `+idToken
                },
                body: JSON.stringify({
                    "name": props.value.companyname,
                    "country": props.value.country,
                    "city": props.value.city,
                    "street": props.value.street,
                    "incorporation_date": props.value.creationdate,
                    "evaluation_0": {
                        "profit": props.value.year1[0],
                        "revenue": props.value.year1[1],
                        "assets": props.value.year1[2],
                        "liability": props.value.year1[3],
                        "time": String(props.value.year1[4])+"-01-01"
                    }
                }),
            })
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(`HTTP Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    console.log(responseData)
                    setDone(true);
                    console.log("Response Data:", responseData);
                })
                .catch(error => {
                    console.log("Error:", error);
                });
        });
    }, []);

    return (!done ? <SquareLoader color="#3b82f6" /> : <p>Congrats!</p>);
}

export default CheckSuccess;
