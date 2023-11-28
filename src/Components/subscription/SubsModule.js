import React from "react";
import { useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
function SubsModule() {
  const [counter, setCounter] = useState(0);
  const [currfreq, setcurrfreq] = useState("Lifetime");
  const [frequqnecy, setFrequqnecy] = useState([]);
  const [placefreq, setplaceFreq] = useState("");
  const [price, setPrice] = useState("");
  const [fprice, setfPrice] = useState([]);
  const [placeprice, setplacePrice] = useState("");
  const [edit, setedit] = useState(true);
  const [title, setTitle] = useState("");
  const [ftitle, setftitle] = useState([]);
  const [placetitle, setplaceTitle] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  function populate(i) {
    setplacePrice(fprice[i]);
    setplaceTitle(ftitle[i]);
    setIndex(i);
  }
  function remover(i) {
    setfPrice((pervprice) => {
      const updatedArray = [...pervprice];
      updatedArray.splice(i, 1);
      return updatedArray;
    });
    setftitle((prevtitle) => {
      const updatedArray = [...prevtitle];
      updatedArray.splice(i, 1);
      return updatedArray;
    });
    setFrequqnecy((prevName) => {
      const updatedArray = [...prevName];
      updatedArray.splice(i, 1);
      return updatedArray;
    });
    setCounter(counter - 1);
  }
  function handlechange() {
    setfPrice((pervprice) => {
      var temp = [...pervprice];
      temp[index] = placeprice;
      return temp;
    });
    setftitle((prevtitle) => {
      var temp = [...prevtitle];
      temp[index] = placetitle;
      return temp;
    });
  }
  function handleclick() {
    setfPrice((pervprice) => {
      const updatedArray = [...pervprice];
      updatedArray.push(price);
      return updatedArray;
    });
    setftitle((prevtitle) => {
      const updatedArray = [...prevtitle];
      updatedArray.push(title);
      return updatedArray;
    });
    setFrequqnecy((prevName) => {
      const updatedArray = [...prevName];
      updatedArray.push(currfreq);
      return updatedArray;
    });
    setCounter(counter + 1);
  }
  function render() {
    return Array.from({ length: counter }, (_, i) => (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{ftitle[i]}</td>
        <td>{frequqnecy[i]}</td>
        <td>{fprice[i]}</td>

        <button
          type="button"
          class="btn btn-primary"
          onClick={() => populate(i)}
          style={{ marginLeft: "30px", marginTop: "5px", width: "60px" }}
        >
          Edit
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => remover(i)}
          style={{ marginLeft: "30px", marginTop: "5px", width: "80px" }}
        >
          Remove
        </button>
      </tr>
    ));
  }
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
      <table
        class="table"
        style={{ margin: "20px", width: "600px", height: "fit-content" }}
      >
        <thead>
          <tr>
            <th scope="col">Serial No.</th>
            <th scope="col">Title</th>
            <th scope="col">frequqnecy</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody
          class="table-group-divider"
          style={{ margin: "20px", padding: "80px" }}
        >
          {render()}
        </tbody>
      </table>
      {edit && (
        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
            border: "solid 2px #e6e6e6",
            borderRadius: "20px",
            marginTop: "20px",
            margin: "20px",
            padding: "30px",
          }}
        >
          <div>
            <div
              class="form-check form-switch"
              style={{ marginLeft: "30px", marginTop: "20px" }}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={() => setVisible(!visible)}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                recurring payment
              </label>
            </div>
            {visible && (
              <>
                <legend style={{ marginLeft: "30px", marginTop: "20px" }}>
                  Select the frequqnecy
                </legend>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  style={{ width: "50vw", marginLeft: "30px" }}
                  onChange={(e) => {
                    setcurrfreq(e.target.value);
                    setplaceFreq(e.target.value);
                  }}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quaterly">Quaterly</option>
                  <option value="Half Yearly">Half Yearly</option>
                  <option value="Anually">Anually</option>
                </select>
              </>
            )}
            <legend style={{ marginLeft: "30px", marginTop: "20px" }}>
              Price
            </legend>
            <input
              class="form-control"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
              value={placeprice}
              onChange={(e) => {
                setPrice(e.target.value);
                setplacePrice(e.target.value);
              }}
              style={{ marginLeft: "30px", marginTop: "20px", width: "50vw" }}
            ></input>
            <br></br>
            <legend style={{ marginLeft: "30px", marginTop: "20px" }}>
              Enter Title
            </legend>
            <input
              class="form-control"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
              value={placetitle}
              onChange={(e) => {
                setTitle(e.target.value);
                setplaceTitle(e.target.value);
              }}
              style={{ marginLeft: "30px", marginTop: "20px", width: "50vw" }}
            ></input>
            <legend style={{ marginLeft: "30px", marginTop: "20px" }}>
              Enter Description
            </legend>
            <Editor
              apiKey="6g7197pa4rotvw508peu16pgw3my4ulumyp34tznm26rqytw"
              onEditorChange={(editor) => {
                setText(editor);
                setValue(editor);
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "100px",
                marginTop: "20px",
              }}
            >
              {
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={handleclick}
                >
                  Submit
                </button>
              }
              <button
                type="button"
                class="btn btn-primary"
                onClick={handlechange}
              >
                changes
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div style={{display:"flex",flexDirection:"column",marginTop:"10px",marginBottom:"10px"}}> */}

      {/* </div> */}
    </div>
  );
}
export default SubsModule;
