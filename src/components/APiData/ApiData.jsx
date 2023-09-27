/* eslint-disable react/prop-types */
import Card from "./Card";

const ApiData = ({apiData}) => {

    console.log(apiData);

    return (
        <div className="mt-40">
            
            <div className="w-[1300px] mx-auto gap-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    apiData?.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default ApiData;