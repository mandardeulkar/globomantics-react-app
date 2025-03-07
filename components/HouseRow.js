import { useContext, useMemo, useState } from "react";
import { ReactContext } from "./app";
import MoreDetailsComponent from "./MoreDetailsComponent";

const HouseRow = ({ house }) => {

    const { homeState, dispatch } = useContext(ReactContext);

    // Memoizing the expensive price calculation
    const memoizeHousePrice = useMemo(() => {
        console.log("Recalculating House Price...");
        return house.price * 1.5;
    }, [house.price]); // Recomputes only when `house.price` changes

    const [showDetails, setHouseDetails] = useState(false);

    return (

        <>

            {
                showDetails ? (<MoreDetailsComponent house={house} onBack={()=>setHouseDetails(false)} />) : (
                    <tr>
                        <td>{house.address}</td>
                        <td>{house.country}</td>
                        {/* <td>{house.price*1.5}</td> { /* Suppose this is CPU-intense calculation */}
                        <td>{memoizeHousePrice}</td> {/* Uses Memoised Value */}
                        <td>{homeState.homeCondition}</td>
                        <td>{homeState.bidStatus}</td>
                        <td>
                            {/* Button to update state */}
                            <button className="btn btn-primary" onClick={() => dispatch({
                                type: "UPDATE_STATE",
                                payload: { homeCondition: "Good" }
                            })}>
                                Update Status
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-secondary" onClick={()=>setHouseDetails(true)}>Details</button>
                        </td>
                    </tr>
                )
            }
        </>
    );
};

export default HouseRow;