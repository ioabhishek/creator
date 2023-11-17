"use client";
import React, { useState } from "react";

function Feedback1() {
  const [display, setDisplay] = useState(false);
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [userFeedback, setUserFeedback] = useState("");

  function render() {
    setDisplay(!display);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Access the values from state variables
    console.log("Email:", email);
    console.log("Feedback Type:", feedbackType);
    console.log("User Feedback:", userFeedback);

    // Add your logic to submit the data or perform further actions
  }
  return (
    <div>
      <button type="button" class="btn btn-info" onClick={render}>
        Info
      </button>
      <br></br>
     
      {display && (
        <div
        style={{
          height: "fit-content",
          width: "600px",
          height:"fit-content",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
          border: "solid 1px #e6e6e6",
          borderRadius: "20px",
          marginLeft: "20px",
          zIndex: "1000",  
          position: "relative",
        }}
        
        >
          <form style={{ padding: "20px", margin: "auto" }} onSubmit={handleSubmit}>
            <div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label"
                style={{ fontWeight: "bold" }}
              >
                <h3>Email address</h3>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            {/* <h3>Feedback Type</h3> */}
            <div style={{display:"flex",flexDirection:"row",gap:"10px",fontSize:"1.1rem",fontWeight:"400"}}>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={() => setFeedbackType("Issue")}
                />
              <label class="form-check-label" for="flexRadioDefault1">
                Issue
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => setFeedbackType("Idea")}
                />
              <label class="form-check-label" for="flexRadioDefault2">
                Idea
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                onChange={() => setFeedbackType("Other")}
                />
              <label class="form-check-label" for="flexRadioDefault3">
                Other
              </label>
            </div>
                </div>
            <div class="mb-3" style={{marginTop:"20px"}}>
              {/* <label for="exampleInputPassword1" class="form-label">
                <h3>Your Feedback</h3>
              </label> */}
              <textarea
               value={userFeedback}
               onChange={(e) => setUserFeedback(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Feedback"
              ></textarea>
            </div>

            
            <button type="submit" class="btn btn-primary" >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Feedback1;
