import React from "react";

import SecondsCounter from "./SecondsCounter";


//create your first component

function Home(props) {
    return (
        
        <SecondsCounter 
        seconds = {props.seconds}
        onPause = {props.onPause}
        onResume = {props.onResume}
        onReset = {props.onReset}

         />

       
    )
}


export default Home;