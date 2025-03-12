import Banner from "./banner";
import Footer from "./footer";
import AgeValidationComponent from "./scenarios/AgeValidationComponent";
import FormValidationComponent from "./scenarios/FormValidationComponent";
import MultipleCheckboxesComponent from "./scenarios/MultipleCheckboxesComponent";

const App = () => {

    return (

        <div>

            {/* props example -  */}
            <Banner headerText="Providing houses all over the world" />

            {/* <InputTextAreaComponent /> */}

            {/* <FormValidationComponent /> */}

            {/* <AgeValidationComponent /> */}

            <MultipleCheckboxesComponent />

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