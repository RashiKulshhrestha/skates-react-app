import React, { Component } from "react";
import img_1 from "./ALWWCMP_1.png";
import img_2 from "./rs.php.png";

class SkateCard extends Component{
    render(){
        return(
            <div className="skate-card-container">
                <div className="skate-card" >
                    <img src= {img_1} alt="ALWWCMP_img" height="250px" width="200px"/>
                    <div className = "card-content">
                        <div className="skate-h-1"> Almost Wonder Woman Color Mild Complete</div>
                        <div className="skate-h-1">7.0 X 29</div>
                        <div className="skate-h-2">$74.99</div>
                    </div>
                </div>
                <div className="skate-card" >
                    <img src= {img_2} alt="ALWWCMP_img" height="250px" width="200px"/>
                    <div className = "card-content">
                        <div className="skate-h-1"> Blind Matte OG Yellow/Green Complete</div>
                        <div className="skate-h-2">$84.99</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SkateCard;