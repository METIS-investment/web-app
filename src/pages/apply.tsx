import Example from "../components/form";

function Apply({login}: {login: boolean}) {
  if (!login) {
    return (<>kiss my ass</>);
  }
  return (
    <>
      <div className="flex">
        <div className="flex-1 py-20">
        </div>

        <div className="flex-2 py-20">
          <Example />
        </div>

        <div className="flex-1 py-20">
        </div>
      </div>
    </>
  );
}

export default Apply;
