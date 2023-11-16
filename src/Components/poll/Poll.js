"use client";
import React from "react";
import { useState } from "react";
import styles from "./poll.module.css";
import Countselector from "./Countselector";
function Poll() {
  const [polltop, setPolltop] = useState([]);
  const [maxpoll, setmaxpoll] = useState(3);
  const [name, setname] = useState([]);
  const [counter, setCounter] = useState(1);
  const narray = [];
  function printweer() {
    console.log(name);
  }
  function render() {
    if(counter<name.length){
        setname((prevName) => {
            const updatedArray = [...prevName];
            updatedArray.splice(counter, name.length-counter) 
            return updatedArray;
          });
    }
    return Array.from({ length: counter }, (_, i) => (
      <div key={i}>
        <h3 className={styles.subheading}>Option {i + 1}</h3>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => {
            setname((prevName) => {
                const updatedArray = [...prevName];
                if(counter<name.length){
                    updatedArray.splice(i, 1) 
                }
             
              updatedArray[i] = e.target.value;
              return updatedArray;
            });
          }}
        />
      </div>
    ));
  }
  return (
    <div>
        
      <h1 className={styles.heading}>Create a Poll</h1>
      <div className={styles.selector}>
      <h2 className={styles.subheading}>Question</h2>
      <Countselector counter={counter} setCounter={setCounter} />
      <input type="checkbox" className={styles.checkbox} id="check"></input>
      <label className={styles.label} htmlFor="check">Allow multiple options</label>
      </div>
      <div>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setPolltop(e.target.value)}
        ></input>
       
        <div>
          {render()}
        
          
          {/* <button onClick={printweer}>clik</button> */}
        </div>
      </div>
    </div>
  );
}

export default Poll;
