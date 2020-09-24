import React,{ Component } from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
import SkateCard from "./SkateCard";

class Home extends Component {
    render(){
        return(
            <div className="app-container">
                <Navbar/>
                <div className="grid">
                    <Sidebar/>
                    <SkateCard/>
                </div>
            </div>
        )
    }
}

export default Home;
