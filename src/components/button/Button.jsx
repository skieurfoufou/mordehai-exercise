import React,{useState} from "react"
import styles from "./Button.module.css"

function Button({text,handleOnClick}){


return(
<div className={styles.button_container}>
    <button className={styles.button} onClick={handleOnClick}>{text} 
    <div className={styles.icon}>
        <img src="https://www.shutterstock.com/image-vector/plus-sign-isolated-on-white-260nw-1487863082.jpg" alt="plus" height="40px"/>
    </div>
    </button>
</div>
)
}

export default Button;