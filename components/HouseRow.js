import { useContext } from "react";
import { ReactContext } from "./app";

const HouseRow = ({ house }) => {

    const { homeState, setHomeState } = useContext(ReactContext);

    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{house.price}</td>
            <td>{homeState.homeCondition}</td>
            <td>{homeState.bidStatus}</td>
            <td>
                {/* Button to update state */}
                <button className="btn btn-primary" onClick={() => setHomeState({ homeCondition: "Good", bidStatus: "Closed" })}>
                    Update Status
                </button>
            </td>
        </tr>
    );
};

export default HouseRow;