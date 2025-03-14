import { Form } from "react-hook-form";
import Banner from "./banner";
import Footer from "./footer";
import AgeValidationComponent from "./scenarios/AgeValidationComponent";
import DropdownComponent from "./scenarios/DropdownComponent";
import FormValidationComponent from "./scenarios/FormValidationComponent";
import MixedFormComponent from "./scenarios/MixedFormComponent";
import MultipleCheckboxesComponent from "./scenarios/MultipleCheckboxesComponent";
import NormalValidationComponent from "./scenarios/NormalValidationComponent";
import RadioGroupComponent from "./scenarios/RadioGroupComponent";
import CallbackForm from "./callback_examples/CallbackForm";

const App = () => {

    return (

        <div>

            {/* props example -  */}
            <Banner headerText="Providing houses all over the world" />

            {/* <InputTextAreaComponent /> */}

            {/* <FormValidationComponent /> */}

            {/* <AgeValidationComponent /> */}

            {/* <MultipleCheckboxesComponent /> */}

            {/* <NormalValidationComponent /> */}

            {/* <RadioGroupComponent /> */}

            {/* <DropdownComponent /> */}

            {/* <MixedFormComponent /> */}

            <CallbackForm />

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