import React from "react";
import GlobelContext from "./NoteContext";

const NoteState = (props)=>{
    const initial = {
        name:"Mudassar",
        Age:56,
        company:"Netixsol",
    }

    const pnumber = {
        office:3009152,
        home:3565295152,
        email:"Muhammadmudasar438@gmail.com",
    }
    const belogs = {
        first:"wajid",
        last:"Habib",

    }
    const developers = ["Wajid","Ali","Habib","Mudasar"]
    const mud = ["Mud","Nomi","Habib","Mudasar"]

    return(
        <GlobelContext.Provider value = {{pnumber,initial, belogs,developers,mud}}>

            {props.children}
        </GlobelContext.Provider>
    )

}

export default NoteState;
