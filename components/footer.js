import React from "react";

const Footer = ({children}) => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
                {children}

                {/* {children} object is replacing below code */}
                {/* <div>
                    <i>Globalmatics. All rights reserved.</i>
                </div> */}

        </footer>
    );
};

export default Footer;


