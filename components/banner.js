//import styles from "./banner.module.css"
import { logo } from "./banner.module.css"
const Banner = (props) => {
    return(
        <header className="row mt-5">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" 
                className= {logo} />
            </div>
            <div className="col-7">
                {props.headerText}
            </div>
        </header>
    );
};

export default Banner;