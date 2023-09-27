import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import ApiData from "../../components/APiData/ApiData";

const Home = () => {

    const apiData = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
            <ApiData apiData ={apiData}></ApiData>


           
        </div>
    );
};

export default Home;