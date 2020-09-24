import React,{ Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="nav-bg-light">
                <div className="headerline-1">
                    <span className="heading-1-bg-orange">SKATE</span>
                    <i className="fas fa-shopping-cart"></i>
                    <div>WishList</div>
                </div>
                <div className="headerline-2">
                    <div className="heading-2-bg-black">WAREHOUSE</div>
                    <div><i className="fas fa-search"></i>Search</div>
                    <div>SUPPORT</div>
                    <div>GIFT CARD</div>
                    <div>LOGIN</div>
                </div>
            </nav>
        )
    }
};

export default Navbar;