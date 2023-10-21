import StoryCard from "./storyCard";
const stories = [
    {id: 2, name: "Joe CEO", description: "CEO of X", motivation: "Ich bin sehr motiviert", imgsrc: "https://img.freepik.com/fotos-kostenlos/bauarbeiter-im-freien-tragen-schutzausruestung_23-2148784050.jpg?w=1380&t=st=1697835445~exp=1697836045~hmac=ce2dd4ca8a8926e37e1e71005b563aadf760f9a095c0d86ce00b3582fb60ccba"},
    {id: 3, name: "Tom Logo", description: "!CEO", motivation: "Ich war nicht motiviert bis ich bei METIS war", imgsrc: "https://img.freepik.com/fotos-kostenlos/landarbeiter-der-mit-mais-aufwirft_23-2148761810.jpg?w=1380&t=st=1697835394~exp=1697835994~hmac=ccfdea5264f5189afa4ce987609b80d493e1b35adef2d394116d7b2fe3f93ab6"},
    {id: 4, name: "Tom Logo", description: "Owner of Pottery Shop", motivation: "Ich konnte meine eigene Töpferei aufbauen!", imgsrc: "https://img.freepik.com/fotos-kostenlos/mittlerer-schuss-der-smiley-geschaeftsfrau_23-2148692818.jpg?t=st=1697836069~exp=1697836669~hmac=3b9e0aa2e9cc058efec5d7e958212b1aaff95eff2e4dcf96e33cb1d20e54ed97"}

]
const SecondBlock = () => {
    return (
        <div className="mx-auto pb-20">
            <div className="text-center pb-20 mt-6 text-2xl font-bold leading-8 text-gray-600">
                Here is what company owners say about us:
            </div>
            <div className="pb-20 flex justify-center px-32">
                <div>
                    <StoryCard
                        motivation={stories[0].motivation}
                        imgsrc={stories[0].imgsrc}
                        name={stories[0].name}
                        description={stories[0].description}
                    />
                </div>
                <div>
                    <StoryCard
                        motivation={stories[1].motivation}
                        imgsrc={stories[1].imgsrc}
                        name={stories[1].name}
                        description={stories[1].description}
                    />
                </div>
                <div>
                    <StoryCard
                        motivation={stories[2].motivation}
                        imgsrc={stories[2].imgsrc}
                        name={stories[2].name}
                        description={stories[2].description}
                    />
                </div>
            </div>
        </div>
    );
}


export default SecondBlock;