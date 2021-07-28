import React, { Component, useState, useEffect} from "react";
import axios from "axios";


function App() {

 const [Data,setData]=useState({
        Response: 'Click Run to start',
        Guess: 0,
        Tries: 0
    })

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



        return (
            <div className={"section section-dark"} id={"section5"}>
              <div className="section-content">
              <h1>Game on</h1>
              <button onClick={repeat}>Run</button>
              <div className="columns">
                  <div><h2>Guess:</h2> <h4>{Data.Guess}</h4></div>
                  <div><h2>Response:</h2> <h4>{Data.Response}</h4></div>
                  <div><h2>Attempts:</h2> <h4>{Data.Tries}</h4></div>
              </div>
              </div>
              </div>
          );
     }

export default App;

