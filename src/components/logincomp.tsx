import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from '../pages/firebase';

const handleSignIn = (setLogin: any) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    
      .then((userCredential) => {
        //console.log(userCredential);
        // Signed up 
        const user = userCredential.user;
        setLogin(true);
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLogin(false);
    });
};


export default function Example({login, setLogin}: {login: boolean, setLogin: any}) {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center pt-20 px-8 py-30 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              </div>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            </div>
              <div>
                <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 onClick={() => {handleSignIn(setLogin)}}>Sign In with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  