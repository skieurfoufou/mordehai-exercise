import styles from "./Popup.module.css" ;

function Popup({title,handleOnClose,setFolderName}){
    const handleInput=(e)=>
    {
        e.preventDefault();
        setFolderName(e.target.value);
        handleOnClose();
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div>{title}</div>
                <div className={styles.buttonClose} >
                   <img src="https://static.thenounproject.com/png/6448-200.png" 
                   alt="close" height="40px" onClick={handleOnClose}/>
                </div>
            </div>
            <div className={styles.input_container}>
                <input type="text" ></input>
            </div>
            <div className={styles.submit_container}>
            <button onClick={handleInput} 
            className={styles.button_submit}>בטוח</button>
            </div>
        </div>
    )
}

export default Popup;