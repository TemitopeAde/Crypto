import React from 'react';
import {BsFillCaretDownFill} from "react-icons/bs";
import {FaCalendarAlt, FaCheck } from "react-icons/fa";

import styles from './liquid.module.css';
import data from './data';

const Liquid = () => {

    const [ishover,setIsHover] = React.useState(false);
    const [info, setinfo] = React.useState(data);
    const [showItem, setShowItem] = React.useState(false);
    


    if (showItem) {
        return (
            <div className={styles.container}>
                {
                    info.map((item) => {
                        const {id,title,children} = item 
                        return (
                            <div className={styles.flexbox} key={id}>
                                <div className={`${styles.flexBetween} ${styles.topItem}`}>
                                    <p className={styles.select}>{title}</p>
    
                                    <div className={`${styles.flexBetween} ${styles.flex2}`}>
                                        <p>Expand</p>
                                        <BsFillCaretDownFill  onClick={() => setShowItem(!showItem)} />
                                        <div className={styles.caret}>
                                            <FaCheck />
                                        </div>
                                    </div>
                                </div>
    
                                {
                                    children.map((child,index) => {
                                        const {title,id} = child
                                        return (
                                            <div className={styles.collasedItem} key={id}>
                                                <div 
                                                    className={`${styles.collapsedFlex} ${styles.flexBetween} ${ishover? styles.hover : styles.collapsedFlex}`}
                                                    // onMouseEnter ={() => handleMouseEnter(id)}
                                                    // onMouseLeave ={() => handleMouseLeave(id)}
                                                >
                                                    <div className={styles.collapsed1}>
                                                        <FaCalendarAlt />
                                                        <p>{title}</p>
                                                    </div>
    
                                                    <div className={styles.collapsed2}>
                                                        <FaCheck />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    return (
        <div className={styles.container}>
            {info.map((item,index) => {
                const {id,title,children} = item;
                return (
                    <div className={styles.flexbox} key={id}>
                        <div className={`${styles.flexBetween} ${styles.topItem}`}>
                            <p className={styles.select}>{title}</p>

                            <div className={`${styles.flexBetween} ${styles.flex2}`}>
                                <p>Expand</p>
                                <BsFillCaretDownFill  onClick={() => setShowItem(!showItem)} />
                                <div className={styles.caret}>
                                    <FaCheck />
                                </div>
                            </div>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default Liquid