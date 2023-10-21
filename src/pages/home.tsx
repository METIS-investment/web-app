import FirstBlock from "../components/firstHomeBlock";
import SecondBlock from "../components/secondHomeBlock";

function Home() {
    return (
        <>
            <FirstBlock />
            <div className="text-center pt-10">
                Here is what company owners say about us:
            </div>
            <SecondBlock />
        </>
    );
}

export default Home;