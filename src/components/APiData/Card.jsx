import { Link } from "react-router-dom";

const Card = ({ data }) => {

    const { id, category, title, img } = data || {}



    return (
        <div className="mb-10">
            <Link to={`/apiData/${id}`}>
                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            src={img}
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {category}
                        </h4>
                        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                            {title}
                        </p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Card;