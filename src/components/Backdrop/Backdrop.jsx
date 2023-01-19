import React from "react";
import styles from "./Backdrop.module.css"

function Backdrop({onCancel}){
return(<div className={styles.container} onClick={onCancel}></div>)
}

export default Backdrop;
