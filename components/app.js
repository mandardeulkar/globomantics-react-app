import Banner from "./banner";
import Footer from "./footer";

const App = () => {

    return (

        <div>

            {/* props example -  */}
            <Banner headerText="Providing houses all over the world" />


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