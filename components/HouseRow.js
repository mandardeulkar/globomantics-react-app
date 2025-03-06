import { useContext, useMemo } from "react";
import { ReactContext } from "./app";

const HouseRow = ({ house }) => {

    const { homeState, setHomeState } = useContext(ReactContext);

    // Memoizing the expensive price calculation
    const memoizeHousePrice = useMemo(()=>{
        console.log("Recalculating House Price...");
        return house.price*1.5;
    },[house.price]); // Recomputes only when `house.price` changes

    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {/* <td>{house.price*1.5}</td> { /* Suppose this is CPU-intense calculation */}
            <td>{memoizeHousePrice}</td> {/* Uses Memoised Value */}
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