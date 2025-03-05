import Banner from "./banner";
import Footer from "./footer";
import HouseList from "./HouseList";
import { createContext } from "react";

export const ReactContext = createContext();

const App = () => {

    // Object created to pass through ReactContext
    const homeObj = {
        homeCondition: "Excellent", 
        bidStatus: "Open for Bid"
    };

    return (

        <div>

            {/* props example -  */}
            <Banner headerText="Providing houses all over the world" />

            {/* Passing 'homeObj' using ReactContext only to this child component */}
            <ReactContext.Provider value={ homeObj }>
                {/* Table Component to display data */}
                <HouseList />
            </ReactContext.Provider>

            {/* children allows JSX/HTML code syntax written in between the tags.
            like below code -  */}
            <Footer>
                <div>
                    <i>Globalmatics. All rights reserved.</i>
                </div>
            </Footer>
        </div>

    );
};

export default App;