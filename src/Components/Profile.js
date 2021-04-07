import React from 'react'
import {Link} from "react-router-dom";

function Profile() {
    return (
        <div>
            <div className={"card"}>
                <p>React App</p>
                <input className={"textInput"} type={"text"} placeholder={"Имя"}/>
                <input className={"textInput"} type={"text"} placeholder={"Фамилия"}/>
                <Link to={"/"}>
                    <button className={"submitButton"} type={"button"}>Выйти</button>
                </Link>
            </div>
        </div>
    )
}

export default Profile