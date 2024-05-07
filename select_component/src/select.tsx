import { useState } from "react"
import styles from "./select.module.css"

type SelectOption = {
    label: string,
    value: any
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void

}


export function Select({ value, onChange, options }: SelectProps) {
    const [isOpen,setIsOpen] = useState(false)
    function clearOptions(){
        onChange(undefined)
    }
    function selectOption(){

    }
    return (
        <div 
        onBlur={()=>{setIsOpen(false)}}
        onClick={()=> setIsOpen(prev => !prev)} 
        tabIndex={0} className={styles.container}>
            <span className={styles.value}>{value?.label}</span>
            <button 
            onClick={e=>{
                e.stopPropagation()
                clearOptions()
            }}
            className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${ isOpen? styles.show: ""}`}>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}