import { useNavigate } from "react-router-dom";
import LocationForm from "../components/application/locationForm";
import ValueForm from "../components/application/valueForm";
import CompanyForm from "../components/application/companyForm";
import {useEffect, useState} from "react";
import CheckSuccess from "../components/application/checkSuccess";


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
    year1: [-1,-1,-1,-1,-1],
    year2: [-1,-1,-1,-1,-1],
    year3: [-1,-1,-1,-1,-1],
    year4: [-1,-1,-1,-1,-1],
    year5: [-1,-1,-1,-1,-1]
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

  const handleValueSubmit = (year1: number[], year2: number[], year3: number[], year4: number[], year5: number[]) => {
    setVals(previousState => {
      return { ...previousState,
        step: 4,
        year1: year1,
        year2: year2,
        year3: year3,
        year4: year4,
        year5: year5
      }
    });
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
                    vals.step === 3 ? <ValueForm submit = {handleValueSubmit} /> :
                        <CheckSuccess value={vals} />
          }

        </div>

        <div className="flex-1 py-20">
        </div>

      </div>
    </>
  );
}

