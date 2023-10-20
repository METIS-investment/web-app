interface Props {
    motivation: string,
    imgsrc: string,
    name: string,
    description: string
}


const StoryCard = (props: Props) => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-0 sm:py-0 lg:px-8">
            <div className="mx-auto max-w-sm w-64">

                <figure className="mt-0">
                    <figcaption className="mt-0">
                        <img
                            className="mx-auto h-28 w-28 rounded-full"
                            src={props.imgsrc}
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-right text-gray-900">{props.name}</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600 text-left">{props.description}</div>
                        </div>
                    </figcaption>
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “{props.motivation}”
                        </p>
                    </blockquote>
                </figure>
            </div>
        </section>
    )
}

export default StoryCard;