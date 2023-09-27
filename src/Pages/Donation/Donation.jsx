import React, { useEffect, useState } from 'react';




import CardRowView from '../../components/APiData/cardRowView';

const Donation = () => {

    // eslint-disable-next-line no-unused-vars
    const [donatedCard, setDonatedCard] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const donateCards = JSON.parse(localStorage.getItem('denotedCard'));
        if (donateCards) {
            setDonatedCard(donateCards)

            const total = donateCards.reduce((preValue, currentItem) => preValue + currentItem.amount, 0)
            console.log(total);

            setTotalPrice(total)
        }

        else {

            setNoFound("No data found")
        }
    }, [])



    return (
        <div>

            {
                noFound ? <p className='text-4xl  font-semibold h-[80vh] flex justify-center items-center'>{noFound}</p> :
                    <div className='w-[1300px] mx-auto'>

                        {/* {
                    donatedCard.length>0 && <button onClick={handleRemove()} className='px-5  py-4 bg-red-700 text-white text-2xl font-semibold rounded-lg mt-10 mb-10'>Delete all favourites</button>
                } */}
                        <div>
                            <h1 className='text-3xl font-semibold'>Total : {totalPrice}</h1>
                        </div>

                        <div className='ml-[300px] lg:ml-0 grid grid-cols-1 md:grid-cols-1
                        lg:grid-cols-2 gap-8 mb-10  mx-auto'>

                            {
                                // eslint-disable-next-line no-undef
                                isShow ? donatedCard.map(data => <CardRowView key={data.id} data={data}></CardRowView>) : donatedCard.slice(0, 4).map(data => <CardRowView key={data.id} data={data}></CardRowView>)



                            }
                        </div>
                        <button onClick={() => setIsShow(!isShow)} className='px-5  py-4 bg-red-700 text-white text-2xl font-semibold rounded-lg mt-10 mb-10 block mx-auto'>{isShow ? "See Less" : "See All"}</button>
                    </div>

            }
        </div>
    );
};

export default Donation;