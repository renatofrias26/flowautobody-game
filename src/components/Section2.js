import React from "react";
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css';

export default function Section({ title, subtitle, dark, id }) {

return (
    <div className={"section" + (dark ? " section-dark" : "")} id={id}>
      <div className="section-content ">
      <h1>First Task</h1>
       <div className="two-columns padding-top">
            <div className="half-column">
                 <h4>Instructions:</h4>
                <p>Hi, welcome to Flow Autobody's coding challenge.</p>
                   <p>Here's how to apply:</p>
                   <p>HTTP Post to <b>/apply</b></p>
                   <p>Use Basic Auth with username 'flow applicant' and password 'lets code'</p>
                   <p>Add two fields: preferredName and emailAddress</p>
                   <p>See you at the next step</p>
          </div>
          <div className="half-column code" id="">
            <Highlight className='javascript'>
                {`
const url = 'https://game.flowautobody.com.au/apply'
const data = {
              preferredName:'Renato',
              emailAddress:'renatofrias@outlook.com',
             }
  axios.post(url, data, {
              auth: {
                     username: "flow applicant",
                     password: "lets code",
                    },
              })
        .then(function (response) { console.log(response);})
        .catch(function (error) { console.log(error);});
                `}
            </Highlight>
            </div>
      </div>
      </div>
      </div>
  );
}
