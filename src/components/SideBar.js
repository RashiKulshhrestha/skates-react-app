import React, { Component } from "react";

class Sidebar extends Component {

    render(){
        return(
            <div>
                <main className="side-bar-main">
                    <ul className="mainmenu">
                    <li>SKATEBOARDS
                        <ul className="submenu">
                            <li>Decks</li>
                            <li>Complete Skateboards</li>
                            <li>Build Your Own</li>
                            <li>Trucks</li>
                        </ul>
                    </li>
                    <li>LONGBOARDS</li>
                    <li>ACCESSORIES</li>
                    <li>BRANDS
                    <ul className="submenu">
                            <li>Blind</li>
                            <li>Santa</li>
                            <li>Creature</li>
                            <li>Girl</li>
                        </ul>
                    </li>
                </ul>
                </main>
                <footer>
                    <ul className="mainmenu">
                        <li>FILTERS<i class="fas fa-angle-up"></i></li>
                    </ul>
                </footer>
            </div>
        )
    }
}
export default Sidebar;