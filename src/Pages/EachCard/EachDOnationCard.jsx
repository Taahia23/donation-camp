import swal from "sweetalert";

const EachDOnationCard = ({ data }) => {
    const { id, category, img, description, amount } = data || {}

    const handleDonateBtn = () => {
        const addedDenotedCard = [];

        const donateCards = JSON.parse(localStorage.getItem('denotedCard'));

        if (!donateCards) {
            addedDenotedCard.push(data);
            localStorage.setItem('denotedCard', JSON.stringify(addedDenotedCard))
            swal("Good job!", "Donation Done", "success");
        }
        else {

            const isExist = donateCards.find(data => data.id === id)
            if (!isExist) {
                addedDenotedCard.push(...donateCards, data)
                localStorage.setItem('denotedCard', JSON.stringify(addedDenotedCard));
                swal("Good job!", "Donation Done!", "success");
            }

            else {
                swal("Already Added");
            }




        }

        // localStorage.setItem('test', "Taahia")
    }


    return (
        // <div classNameName="">
        //      <div classNameName=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-10">
        //         <div classNameName="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 ">
        //             <img classNameName="w-full h-screen"
        //                 src={img}
        //                 alt="ui/ux review check"
        //             />
        //             <div classNameName="bg-stone-800 w-full absolute mt-[-100px] bg-blend-multiply bg-opacity-50">
        //                 <div classNameName="bg-red-600 my-5 ml-10 w-64 rounded-md ">
        //                     {/* <h1 classNameName="text-2xl font-semibold text-white px-6 py-4 ">Donate $<span>{amount}</span></h1> */}

        //                     <button onClick={() => handleDonateBtn()} classNameName="text-2xl font-semibold text-white px-6 py-4 ">
        //                     Donate $<span>{amount}</span>
        //                     </button>
        //                 </div>

        //             </div>
        //         </div>
        //         <div classNameName="p-6">
        //             <h4 classNameName="block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        //                {category}
        //             </h4>
        //             <p classNameName="mt-6 block font-thin text-lg font-light leading-relaxed text-gray-700 antialiased">
        //                {description}
        //             </p>
        //         </div>

        //     </div>

        // </div>





















        <div className="relative flex w-full  lg:flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 ">
                    <img className="w-full h-screen"
                        src={img}
                        alt="ui/ux review check"
                    />
                    <div className="bg-stone-800 w-full absolute mt-[-100px] bg-blend-multiply bg-opacity-50">
                        <div className="bg-red-600 my-5 ml-10 w-64 rounded-md ">
                            {/* <h1 classNameName="text-2xl font-semibold text-white px-6 py-4 ">Donate $<span>{amount}</span></h1> */}

                            <button onClick={() => handleDonateBtn()} className="text-2xl font-semibold text-white px-6 py-4 ">
                            Donate $<span>{amount}</span>
                            </button>
                        </div>

                    </div>
                </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                       {category}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        $95.00
                    </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {description}
                </p>
            </div>
           
        </div>
    );
};

export default EachDOnationCard;