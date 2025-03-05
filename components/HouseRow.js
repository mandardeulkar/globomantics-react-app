import { useContext } from "react";
import { ReactContext } from "./ReactContextStateProvider.js";

const HouseRow = ({house}) => {

    const home = useContext(ReactContext);

    return(
            <tr>
                <td>{house.address}</td>
                <td>{house.country}</td>
                <td>{house.price}</td>
                <td>{home.homeCondition}</td>
                <td>{home.bidStatus}</td>
            </tr>
    );
};

export default HouseRow;