// import React,{useState} from "react";

export default function About(props) {

  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white',
    border:'1.5px solid',
    borderColor:props.mode==='dark'?'white':'black'
  }

  return (
    <>
    <div className=" container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3 className="my-3">About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Text summarization</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text summarization is the process of condensing a text 
            into a shorter version while preserving crucial information
             and meaning. Text analysis solutions locate the most important
              phrases and sentences in a given document and provide users with 
              a summary that accurately represents the contents of the original document. 
              Organizations benefit from this use case when summarizing research papers, 
              medical reports, HR surveys, customer reviews, etc. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Text categorization</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            type="button"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
            Text categorization, also called text classification, 
            is the process of assigning categories to a given piece 
            of text data. A text classifying solution associates 
            certain keywords within texts with predefined topics, 
            users’ intentions, or sentiments, and categorizes each 
            text accordingly. Organizations from different industries 
            can use text categorization to structure, arrange, and classify 
            articles, research papers, patient reports, spam emails, and so on.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Text extraction</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle} 
          >
            <div className="accordion-body" style={myStyle}>
            Text extraction involves scanning a given text and 
            pulling out required information. Dedicated text extraction 
            software identifies relevant keywords according to assigned 
            tasks. These could include product characteristics, brand names, 
            or cities and places.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
