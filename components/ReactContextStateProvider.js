
import { createContext } from "react";

export const ReactContext = createContext();

const ReactContextStateProvider = ({ children }) => {

    // Object created to pass through ReactContext
    const homeObj = {
        homeCondition: "Excellent",
        bidStatus: "Open for Bid"
    };

    return (
        <ReactContext.Provider value={homeObj}>
            {children}
        </ReactContext.Provider>
    );
};

export default ReactContextStateProvider;