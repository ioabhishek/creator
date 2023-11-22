'use client'
import React from "react";
import { useState } from "react";
import SVGComponent from "./SVGComponent";
import styles from "./content.module.css";
function Content() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploadtype, setUploadtype] = useState("text");
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const remover = () => {
    setSelectedFile(null);
    setIsFilePicked(false);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={styles.heading}>Post Content</h1>
      <div
        className="btn-group mt-4"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          onChange={() => setUploadtype("text")}
          defaultChecked="on"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Text
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          onChange={() => setUploadtype("image")}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Image
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          onChange={() => setUploadtype("video")}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Video
        </label>
      </div>

      <div>
        {uploadtype === "text" && (
          <>
            <form class="form-floating mb-3 mt-3">
              <h2 style={{ marginLeft: "30px" }}> Heading</h2>
              <input
                type="text"
                class="form-control "
                placeholder="heading"
                style={{ width: "70vw", marginLeft: "30px", padding: "10px" }}
              />
            </form>
            <h2 style={{ marginLeft: "30px" }}> Body</h2>
            <textarea
              className="form-control mb-3 mt-3"
              id="exampleFormControlTextarea1"
              style={{ width: "70vw", marginLeft: "30px" }}
              rows="6"
            ></textarea>
          </>
        )}
        {!(uploadtype === "text") && (
          <div>
             <div className={styles.uploaddiv}>  {isFilePicked && (
              <div>
                {selectedFile.type.startsWith("video/") ? (
                  <div>
                    <h2>Preview:</h2>
                    <video
                      controls
                      width="400"
                      height="300"
                      className="mb-3"
                      style={{ maxWidth: "100%" }}
                    >
                      <source
                        src={URL.createObjectURL(selectedFile)}
                        type={selectedFile.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div>
                    <h2>Preview:</h2>

                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "300px" }}
                    />
                  </div>
                )}
              </div>
            )}</div>
          

            <input type="file" name="file" onChange={changeHandler} />
            <button type="button" class="btn btn-danger" onClick={remover}>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
