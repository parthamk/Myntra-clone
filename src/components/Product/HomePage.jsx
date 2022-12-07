import React from "react";
import Sort from "../Sort/Sort";
import Cards from "./Cards";
import '../../App.css'

const HomePage = () => {
    return(
        <>
            <Sort />
            <div className="outer-wrapper">
                <Cards />
            </div>
        </>
    )
}

export default HomePage;