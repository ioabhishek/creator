'use client'
import React, { useState } from "react"; 

const Countselector = ({counter,setCounter}) => { 
   

    const handleClick1 = () => { 
        setCounter(counter + 1 > 5 ? counter : counter + 1);
    };

    const handleClick2 = () => { 
        setCounter(counter - 1 > 1 ? counter - 1 : 1);
    };

    return ( 
        <div style={{ 
           display: 'flex',
           flexDirection: 'row',
        //    width:'30%',
           
             
        //    justifyContent:'center',
        //    alignItems:'center',
        }}> 
           
            
            <div className="buttons" style={{display:"flex",flexDirection:"row",gap:"10px"}}> 
                <button 
                    style={{ 
                        fontSize: '90%', 
                        position: 'relative', 
                        // top: '10vh', 
                        borderRadius: '8%',
                        boxshadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
                        border: 'solid 2px #e6e6e6',
                        borderradius: "20px",
                        marginLeft: '5px', 
                         height:'30px',               
                       
                    }} 
                    onClick={handleClick1} 
                    disabled={counter >= 5}
                >
                     Increase options
                </button> 
                <div style={{ 
                fontSize: '120%', 
                position: 'relative', 
                display:'inline-block',
                // top: '10vh', 
            }}> 
                {counter} 
            </div> 
            <div>
                <button 
                    style={{ 
                        fontSize: '90%', 
                        position: 'relative', 
                        // top: '10vh', 
                        borderRadius: '8%',
                        height:'30px',  
                        marginLeft: '5px', 
                        boxshadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
                        border: 'solid 2px #e6e6e6',
                        borderradius: "20px",
                                  
                    }} 
                    onClick={handleClick2} 
                    disabled={counter <= 1}
                    >
                               Decrease options

                </button> 
                    </div>
            </div> 
        </div> 
    ); 
};

export default Countselector;
