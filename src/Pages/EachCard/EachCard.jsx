import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EachDOnationCard from "./EachDOnationCard";

const EachCard = () => {
    
    // const [card, setCard] = useState({})
    const[data, setData] =useState({})

    const { id } = useParams();


    const eachCard = useLoaderData();

    useEffect(() => {
        const findCard = eachCard?.find(data => data.id === id)
        setData(findCard)



    }, [id, eachCard])

 

    console.log(data);

   

    return (
        <div className="w-[1300px] mx-auto">
           <EachDOnationCard data={data}></EachDOnationCard>
        </div>
    );
};

export default EachCard;