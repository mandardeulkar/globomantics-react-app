import Banner from "./banner";
import CompanyName from "./CompanyName";
import Footer from "./footer";
import HouseList from "./HouseList";
import { createContext, useReducer } from "react";
import AdditionalFunctionalityHOC from "./AdditionalFunctionalityHOC";

export const ReactContext = createContext();

const EnhancedComponent = AdditionalFunctionalityHOC(CompanyName);

const App = () => {

    //initial object
    const initialHomeState = {
        homeCondition: "***", 
        bidStatus: "***"
    };

    //Defining the Reducer Function
    const homeReducer = (state, action) => {
        switch(action.type){
            case "UPDATE_STATE":
                return {
                    ...state,
                    homeCondition: action.payload.homeCondition ?? state.homeCondition,
                    bidStatus: action.payload.bidStatus ?? state.bidStatus
                };
            default:
                return state;
        }
    };

    //useReducer hook for Managing State
    const [homeState, dispatch] = useReducer(homeReducer, initialHomeState);

    return (

        <div>

            {/* props example -  */}
            <Banner headerText="Providing houses all over the world" />

            <EnhancedComponent company="ABC" foundationYear="2022" /> 

            {/* Passing 'homeState' & 'dispatch' to ReactContext only to this child component */}
            <ReactContext.Provider value={ {homeState, dispatch} }>
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