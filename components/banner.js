//import styles from "./banner.module.css"
import { logo } from "./banner.module.css"
const Banner = () => {
    return(
        <header className="row mt-5">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" 
                className= {logo} />
            </div>
            <div className="col-7">
                Providing houses all over the world
            </div>
        </header>
    );
};

export default Banner;