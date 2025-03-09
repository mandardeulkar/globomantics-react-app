
import React from "react";

const MultiplePropsHOC = (SimpleComponent) => {
    return(props) => {

        console.log("Props received by HOC:", props); // Print props

        const ownerprop = {
            ownername : "Mandar",
            ownercity : "Akola",
            ownerstate : "Maharashtra"
        };

        const teamprop = {
            teamlocation : "Hyderabad"
        };

        return(
            <div>
                <h3>Team & Owner Information</h3>
                <SimpleComponent {...props} {...ownerprop} {...teamprop} />
            </div>
        )
    };
};

export default MultiplePropsHOC;