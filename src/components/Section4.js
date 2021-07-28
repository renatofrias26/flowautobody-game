import React, { Component} from "react";
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css';
import axios from "axios";


class api extends Component {

    render(){
        return (
            <div className={"section section-dark"} id={"section4"}>
              <div className="section-content">
              <h1>Third Task</h1>
               <div className="two-columns padding-top">
                    <div className="half-column">
                        <h4>SIMPLE GAME</h4>
                        <h4>-----------</h4>
                        <p>Description:</p>
                        <p>I'll pick an integer between 0 and 1,000,000. You submit guesses and I'll tell you whether you've won or not, and whether you should try a higher number or a lower number.</p>
                        <p>Other than that, the HTTP responses are not designed to be incredibly helpful.</p>
                        <p><b>Mechanics:</b></p>
                            <ul>
                                <li>All interaction needs the same Basic Auth you used on this step.</li>
                                <li>The game url is at /game</li>
                                <li>POST to the url with data field applicantId to start a new game. You'll get back a gameId.</li>
                                <li>PUT to the url /game with data fields applicantId, gameId and guess to submit a guess. You'll get back result field. </li>
                            </ul>
                            <p>When the result is correct and you've won, there will be instructions for the last step.</p>
                            <p>Have fun!</p>
                  </div>
                  <div className="half-column code" id="">
                    <Highlight className='javascript'>
                        {`
// From 0 to 1,000,000 - First guess will be half way

let guessNumber = 500000     
let increment = 100000
let lastState = ""  
let tries = 0

function repeat(){
      const url = 'https://game.flowautobody.com.au/game'
      const data = {
        applicantId: "305036872197866051",
        gameId: "305080472391647811",
        guess: guessNumber,
      };
      axios
        .put(url, data, {
          auth: {
            username: "flow applicant",
            password: "lets code",
          },
        })
        .then (response => {
          setData({Response: response.data.result,Guess: response.data.guess,Tries: Data.Tries ++})
          tries++;
          if (response.data.result === "higher") {
                guessNumber = Math.round(guessNumber + increment);
                lastState = "higher";
                repeat();
          } if (response.data.result === "lower") {
            if (lastState === "lower") {
                guessNumber = Math.round(guessNumber - increment);
            } else if (lastState === "higher") {
                increment = Math.round(increment / 2);
                guessNumber = Math.round(guessNumber - increment);   
            }
        repeat();    
        lastState = "lower";  
        } else {
            console.log("Congratulations the numer is:" + response.data.guess);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
                        `}
                    </Highlight>
                    </div>
              </div>
              </div>
              </div>
          );
    }

}

export default api;

