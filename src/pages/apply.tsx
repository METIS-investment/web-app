import { useNavigate } from "react-router-dom";
import LocationForm from "../components/application/locationForm";
import ValueForm from "../components/application/valueForm";
import CompanyForm from "../components/application/companyForm";
import {useEffect, useState} from "react";


export default function Apply({login}: {login: boolean}) {
  const nav = useNavigate();

  const [vals, setVals] = useState({
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    street: "",
    city: "",
    zip: "",
    companyname: "",
    creationdate: "",
    assets: 0,
    liabilities: 0,
    profit: 0,
    revenue: 0
  });
  
  useEffect(() => {
    if (!login) {
      nav('/login');
    }
  }, [login]);



  const handleLocationSubmit = (fn: string, ln: string, ma: string, co  :string, st :string, ci :string, zi:string) => {
    setVals(previousState => {
      return { ...previousState,
        step: 2,
        firstname: fn,
        lastname: ln,
        email: ma,
        country: co,
        street: st,
        city: ci,
        zip: zi
      }
    });
  }

  const handleCompanySubmit = (name: string, date: string) => {
    setVals(previousState => {
      return { ...previousState,
        step: 3,
        companyname: name,
        creationdate: date
      }
    });
  }

  const handleValueSubmit = (as: number, li: number, pr: number, re: number ) => {
    setVals((previousState) => {
      return {
        ...previousState,
        assets: as,
        liabilities: li,
        profit: pr,
        revenue: re
      }
    })
  }

  //const [site, setSite] = useState();

  return (
    <>
      <div className="flex">
        <div className="flex-1 py-20">
        </div>

        <div className="flex-2 py-20">
          {
            vals.step === 1 ?  <LocationForm submit = {handleLocationSubmit}/> :
                vals.step === 2 ? <CompanyForm submit = {handleCompanySubmit}/> :
                    <ValueForm />
          }
          {"step: " + vals.step + " "}
          {"" + vals.firstname + " " + vals.lastname + " " + vals.email + " " + vals.country + " " + vals.city + " " + vals.zip + " " + vals.street}
          {" " + vals.creationdate + " " + vals.companyname}
        </div>

        <div className="flex-1 py-20">
        </div>

      </div>
    </>
  );
}

