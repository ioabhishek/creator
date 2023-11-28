import React from "react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
function Subs() {
  const [text, setText] = useState("");
  const [value, setValue] = useState();
  const [visible, setVisible] = useState(false);
  
  function print() {
    localStorage.setItem("jahdjahjsk", text);
  }
  // function convertToPdf() {
  //     // Create a new jsPDF instance
  //     const pdfDoc = new jsPDF();

  //     // Add content to the PDF
  //     pdfDoc.text(text, 10, 10);

  //     // Save the PDF
  //     pdfDoc.save('output.pdf');
  //   }

  return (
    <div>
        <div class="form-check form-switch" style={{ marginLeft: "30px", marginTop: "20px" }}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>setVisible(!visible)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">recurring payment</label>
</div>
     {visible&& 
     <>
     <legend style={{ marginLeft: "30px", marginTop: "20px" }}>
        Select the frequqnecy
      </legend>
      <select
        class="form-select"
        aria-label="Default select example"
        style={{ width: "50vw", marginLeft: "30px" }}
        >
        <option selected>Frequency</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Quaterly">Quaterly</option>
        <option value="Half Yearly">Half Yearly</option>
        <option value="Anually">Anually</option>
        
      </select>
          </>
      }
      <legend style={{ marginLeft: "30px", marginTop: "20px" }}>
        Price
      </legend>
      <input
        class="form-control"
        type="text"
        placeholder="Default input"
        aria-label="default input example"
        style={{ marginLeft: "30px", marginTop: "20px",width:"50vw" }}
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
        style={{ marginLeft: "30px", marginTop: "20px",width:"50vw" }}
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
      <button type="button" class="btn btn-primary" >Submit</button>
    </div>
  );
}

export default Subs;
