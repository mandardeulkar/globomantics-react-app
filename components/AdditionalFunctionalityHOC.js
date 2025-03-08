



import React from "react";

const AdditionalFunctionalityHOC = (SimpleComponent) => {
    return (props) => {

        console.log("Props received by HOC:", props); // Print props

        return(
            <div>
                <h3>This heading is coming from HOCs</h3>
                <SimpleComponent {...props} />
            </div>
        );
    };
};

export default AdditionalFunctionalityHOC;
