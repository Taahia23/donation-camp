import { Link } from "react-router-dom";

const Card = ({ data }) => {

    const {bg, id, category, title, img, category_clr,category_bg_clr  } = data || {}



    return (
        <div className="mb-10">
            <Link to={`/apiData/${id}`}>
                <div className="relative flex max-w-[24rem] flex-col rounded-xl ml-5 lg:ml-0 bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-lg bg-transparent bg-clip-border  lg:w-full text-gray-700 shadow-none">
                        <img className="w-[390px]"
                            src={img}
                        />
                    </div>
                    <div className="p-6 " style={{backgroundColor:`${bg} `}}>
                        <h4 className="inline-block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased px-3 py-2 " style={{backgroundColor: `${ category_bg_clr}` , color: `${category_clr}`}}>
                            {category}
                        </h4>
                        <p style={{color: `${category_clr}`}}className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                            {title}
                        </p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Card;