
const CardRowView = ({data}) => {
    const {bg, category_bg_clr,category_clr,  category, title, img } = data || {}
    return (
        <div>
            <div className="mb-10 relative flex max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img className="w-full"
                            src={img}
                        />
                    </div>
                    <div className="p-6 " style={{backgroundColor:`${bg} `}}>
                        <h4 className="inline-block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased px-3 py-2 " style={{backgroundColor: `${ category_bg_clr}` , color: `${category_clr}`}}>
                            {category}
                        </h4>
                        <p className="font-semibold
                         text-xl">$<span>290</span></p>
                        <p style={{color: `${category_clr}`}}className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {title}
                        </p>

                        <button style={{backgroundColor: `${category_bg_clr}`, color: `${category_clr}`}} className="px-3 py-2 text-lg font-bold mt-4">View Details</button>
                    </div>


                </div>
        </div>
    );
};

export default CardRowView;