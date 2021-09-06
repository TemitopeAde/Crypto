import styles from './AdvancedSettings.module.css';

import React, {useState,useEffect} from 'react';
import {FaCheck } from "react-icons/fa";
import {BsInfoCircleFill,BsFillCaretDownFill, BsFillCaretUpFill,BsCaretRightFill} from "react-icons/bs";


const AdvancedSettings = () => {
    

    // SLIPAGE CONTROLLER 
    const [slippage,setSlippage] = useState(1)
    const [toggleSlipage,settoggleSlipage] = useState(false)
    const [price1,setPrice1] = useState(0.1)
    const [price2,setPrice2] = useState(0.3)
    const [price3,setPrice3] = useState(1)
    const [price4,setPrice4] = useState(3)
    const [slipageType,setSlipageType] = useState(0.1)
    const [Slipagevalue,setSlipageValue] = useState('')


    const handleSlipage = (id) => {
        setSlippage(id)
        setSlipageType(id)
    }
    // SLIPAGE CONTROLLER ENDS 



    // TX DEADLINE CONTROLLER 
    const [deadline,setDeadline] = useState(1)
    const [toggleDeadline,setToggleDeadline] = useState(false)
    const [min1,setMin1] = useState(10)
    const [min2,setMin2] = useState(15)
    const [min3,setMin3] = useState(20)
    const [min4,setMin4] = useState(25)
    const [deadlineType,setDeadlineType] = useState(20)
    const [deadlineValue,setDeadlineValue] = useState('')

    const handleDeadline = (id) => {
        setDeadline(id)
        setDeadlineType(id)
    }

    // TX DEADLINE CONTROLLER ENDS 



// TOGGLE CHECKBOX STARTS 

    const [idCheckOne, setIdCheckOne] = useState(false);
    const [idCheckTwo,setIdCheckTwo] = useState(false);
    const [idCheckThree,setIdCheckThree] = useState(false);
// TOGGLE CHECKBOX ENDS


    return (
        <div className={styles.advancedcontainer}>
            <div className={styles.flex}>

                {/* SETTINGS ITEM START */}
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Toggle Export Mode</p>
                        </div>

                        <div className={styles.settings2} onClick={() => setIdCheckOne(!idCheckOne)}>
                            {idCheckOne===true? <FaCheck /> : ''}
                        </div>
                    </div>
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Disable Mulitihops</p>
                        </div>

                        <div className={styles.settings2} onClick={() => setIdCheckTwo(!idCheckTwo)}>
                            {idCheckTwo===true? <FaCheck /> : ''}
                        </div>
                    </div> 
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Space Sounds</p>
                        </div>

                        <div className={styles.settings2} onClick={() => setIdCheckThree(!idCheckThree)}>
                            {idCheckThree===true? <FaCheck /> : ''}
                        </div>
                    </div> 
                </div>
                               

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Slippage Tolerance</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>{slippage}</p>
                            {toggleSlipage ? <BsFillCaretUpFill onClick={() => settoggleSlipage(!toggleSlipage)} /> :<BsFillCaretDownFill onClick={() => settoggleSlipage(!toggleSlipage)}/> }
                        </div>
                    </div>
                    

                    { toggleSlipage ? (
                        <div className={styles.formWrap}>
                            <form>
                                <div className={styles.buttonContainer}>
                          
                                    <button type="button" onClick={() => handleSlipage(0.1)} className={`${styles.slipButton} ${
                                        slipageType === 0.1
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {price1}
                                    </button>
                                    
                                    <button type="button" onClick={() => handleSlipage(0.3)} className={`${styles.slipButton} ${
                                        slipageType === 0.3 
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {price2}
                                    </button>
                                    <button type="button" onClick={() => handleSlipage(1)} className={`${styles.slipButton} ${
                                        slipageType === 1
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {price3}
                                        
                                    </button>
                                    <button type="button" onClick={() => handleSlipage(3)} className={`${styles.slipButton} ${
                                        slipageType === 3
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {price4}
                                    </button>
                                </div>
                                
                                <div className={styles.formInput}>
                                    <input type="number" placeholder="Custom" value={Slipagevalue} onChange={(e) => {
                                        setSlipageValue(e.target.value);
                                        setSlippage(Slipagevalue)
                                    }}/>
                                </div>
                            </form> 
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>TX Deadline (mins)</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>{deadline}</p>
                            {toggleDeadline ? <BsFillCaretUpFill onClick={() => setToggleDeadline(!toggleDeadline)} /> :<BsFillCaretDownFill onClick={() => setToggleDeadline(!toggleDeadline)}/> }
                        </div>
                    </div>
                    

                    { toggleDeadline ? (
                        <div className={styles.formWrap}>
                            <form>
                                <div className={styles.buttonContainer}>
                          
                                    <button type="button" onClick={() => handleDeadline(10)} className={`${styles.slipButton} ${
                                        deadlineType === 10
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {min1}
                                    </button>
                                    
                                    <button type="button" onClick={() => handleDeadline(15)} className={`${styles.slipButton} ${
                                        deadlineType === 15
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {min2}
                                    </button>
                                    <button type="button" onClick={() => handleDeadline(20)} className={`${styles.slipButton} ${
                                        deadlineType === 20
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {min3}
                                        
                                    </button>
                                    <button type="button" onClick={() => handleDeadline(25)} className={`${styles.slipButton} ${
                                        deadlineType === 25
                                        ? styles.buttonSlippageActive
                                        : styles.buttonSlipage
                                    }`}>
                                        {min4}
                                    </button>
                                </div>
                                
                                <div className={styles.formInput}>
                                    <input type="number" placeholder="Custom" value={deadlineValue} onChange={(e) => {
                                        setDeadlineValue(e.target.value);
                                        setDeadline(deadlineValue)
                                    }}/>
                                </div>
                            </form> 
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
};

export default AdvancedSettings


