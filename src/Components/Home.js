import React from 'react'
import {Link} from "react-router-dom";

function Home() {
    return(
        <div className={"card"}>
            <p>React App</p>
            <input className={"textInput"} type={"text"} placeholder={"Имя"}/>
            <input className={"textInput"} type={"text"} placeholder={"Фамилия"}/>
            <Link to={"/profile"}>
                <button className={"submitButton"} type={"button"}>Войти</button>
            </Link>
        </div>
    )
}

export default Home;