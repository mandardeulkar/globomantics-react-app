import Banner from "./banner";
import Footer from "./footer";
import HouseList from "./HouseList";
import ReactContextStateProvider from "./ReactContextStateProvider.js";

const App = () => {

    return (

        <div>

            <ReactContextStateProvider>

                {/* props example -  */}
                <Banner headerText="Providing houses all over the world" />

                {/* Table Component to display data */}
                <HouseList />

                {/* children allows JSX/HTML code syntax written in between the tags.
                like below code -  */}
                <Footer>
                    <div>
                        <i>Globalmatics. All rights reserved.</i>
                    </div>
                </Footer>

            </ReactContextStateProvider>

        </div>

    );
};

export default App;