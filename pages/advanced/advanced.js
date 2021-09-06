import React, {useState,useEffect} from 'react';
import styles from './advanced.module.css';
import {FaCheck } from "react-icons/fa";
import {BsInfoCircleFill,BsFillCaretDownFill, BsFillCaretUpFill,BsCaretRightFill} from "react-icons/bs";
import {GiSevenPointedStar} from "react-icons/gi";

const Advanced = () => {

    const [gasPrice,setgasPrice] = useState('Fast (23 GWEI)');
    const [fast,setFast] = useState('23 fast');
    const [instant,setInstant] = useState('29 instant');
    const [gasType,setgasType] = useState(1);
    const [Slipagevalue,setSlipageValue] = useState('');
    const [gasValue, setgasValue] = useState('');
    const [togglegas,setTogglegas] = useState(false);
    const [partialFill,setPartialFill] = useState(false);
    const [optimized,setOptimized] = useState(false);

    const handleGasPrice = (id,fast) => {
        setgasType(id)
        setgasPrice(fast);
    }

    

    // SLIPAGE CONTROLLER 
    const [slippage,setSlippage] = useState(1)
    const [toggleSlipage,settoggleSlipage] = useState(false)
    const [price1,setPrice1] = useState(0.1)
    const [price2,setPrice2] = useState(0.3)
    const [price3,setPrice3] = useState(1)
    const [price4,setPrice4] = useState(3)
    const [slipageType,setSlipageType] = useState(0.1)

    const handleSlipage = (id) => {
        setSlippage(id)
        setSlipageType(id)
    }
    // SLIPAGE CONTROLLER ENDS 

    return (
        <div className={styles.advancedcontainer}>
            <div className={styles.flex}>

                {/* SETTINGS ITEM START */}
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Partial Fill</p>
                        </div>

                        <div className={styles.settings2} onClick={() => setPartialFill(!partialFill)}>
                            {partialFill===true? <FaCheck /> : ''}
                        </div>
                    </div>
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Optimized Router</p>
                        </div>

                        <div className={styles.settings2} onClick={() => setOptimized(!optimized)}>
                            {optimized===true? <FaCheck /> : ''}
                        </div>
                    </div> 
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Gas Price</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>{gasPrice}</p>
                            {togglegas ? <BsFillCaretUpFill onClick={() => setTogglegas(!togglegas)} /> :<BsFillCaretDownFill onClick={() => setTogglegas(!togglegas)}/> }
                        </div>
                    </div>
                    

                    { togglegas ? (
                        <div className={styles.formWrap}>
                            <form>
                                <div className={styles.buttonContainer}>
                                    <button type="button" onClick={() => handleGasPrice(1,'Fast (23 GWEI)')} className={`${
                                        gasType === 1
                                        ? styles.buttonActive
                                        : styles.button
                                    }`}>
                                        {fast}
                                        {gasType === 1? <GiSevenPointedStar /> : ''}
                                    </button>
                                

                                    <button type="button" onClick={() => handleGasPrice(2,'Instant (29 GWEI)')} className={`${
                                        gasType === 2 
                                        ? styles.buttonActive
                                        : styles.button
                                    }`}>
                                        {instant}
                                        {gasType === 2? <GiSevenPointedStar /> : ''}
                                    </button>
                                </div>
                                
                                <div className={styles.formInput}>
                                    <input type="number" min="0" placeholder="Custom" value={gasValue} onChange={(e) => {
                                        setgasValue(e.target.value);
                                        setgasPrice(gasValue)
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
                                    <input type="number" min="0" placeholder="Custom" value={Slipagevalue} onChange={(e) => {
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
                            <p>Liquidity Sources</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>65</p>
                            <BsCaretRightFill />
                        </div>
                    </div>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.settings1}>
                            <BsInfoCircleFill />
                            <p>Custom Token</p>
                        </div>

                        <div className={styles.flex2}>
                            <p>0</p>
                            <BsCaretRightFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Advanced


