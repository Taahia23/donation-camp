
const EachDOnationCard = ({data}) => {
    const { category, img, description, amount } = data || {}

    const handleDonateBtn = () => {
        const addedDenotedCard = [];

        const donateCards  = JSON.parse(localStorage.getItem('denotedCard'));

        if(!donateCards) {
            addedDenotedCard.push(data);
            localStorage.setItem('denotedCard', JSON.stringify(addedDenotedCard))
        }
        else{
            addedDenotedCard.push(...donateCards, data)
            localStorage.setItem('denotedCard', JSON.stringify(addedDenotedCard))
        }

        // localStorage.setItem('test', "Taahia")
    }
    

    return (
        <div className="">
             <div className=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 ">
                    <img className="w-full h-screen"
                        src={img}
                        alt="ui/ux review check"
                    />
                    <div className="bg-stone-800 w-full absolute mt-[-100px] bg-blend-multiply bg-opacity-50">
                        <div className="bg-red-600 my-5 ml-10 w-64 rounded-md ">
                            {/* <h1 className="text-2xl font-semibold text-white px-6 py-4 ">Donate $<span>{amount}</span></h1> */}

                            <button onClick={() => handleDonateBtn()} className="text-2xl font-semibold text-white px-6 py-4 ">
                            Donate $<span>{amount}</span>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       {category}
                    </h4>
                    <p className="mt-6 block font-thin text-lg font-light leading-relaxed text-gray-700 antialiased">
                       {description}
                    </p>
                </div>
              
            </div>
           
        </div>
    );
};

export default EachDOnationCard;