import React from "react";
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css';

export default function Section({ title, subtitle, dark, id }) {

return (
    <div className={"section" + (dark ? " section-dark" : "")} id={id}>
      <div className="section-content">
      <h1>Second Task</h1>
       <div className="two-columns padding-top">
            <div className="half-column">
                 <h4>Instructions:</h4>
                 <p>Thanks Renato for applying!</p>
                 <p>Please make note of your applicant ID, you will need it for the rest of the steps. You can retrieve it at any time by repeating this step.</p>
                 <p>The next step is problem solving a simple game using front end technologies. We'd like to see what you do with a loosely defined task. </p>
                 <p>Post applicantID to</p>
                 <p><b>/game</b> to receive gameID</p>
          </div>
          <div className="half-column code" id="">
            <Highlight className='javascript'>
                {`
const url = 'https://game.flowautobody.com.au/game'
const data = {
              applicantId: '305036872197866051'  
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
