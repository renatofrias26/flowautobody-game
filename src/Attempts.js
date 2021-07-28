  // axios({

  //   url:'http://game.flowautobody.com.au/hello',
  //   proxy:{
  //           protocol: 'http',
  //           auth: {
  //                   username: 'flow applicant',
  //                   password: 'lets code'
  //                 },
  //               },
   
  // })

// const sessionUrl = 'http://game.flowautobody.com.au/hello';

//  axios.post(sessionUrl, {}, {
//     auth: {
//       username: 'flow applicant',
//       password: 'lets code'
//     }
//   })

// Declare Username + Password - I've tested using space and %20 - no success

// const username = 'flow applicant'
// const password = 'lets code'


// // Transform into base64 >> HTTP authentication format
// const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

// // Declare url + data to POST
// const url = 'http://game.flowautobody.com.au/hello'
// const data = {
//   preferredName:'Renato',
//   emailAddress:'renatofrias@outlook.com',
//   headers: {
//     "Content-Type": "application/json",
//     'Authorization': `Basic ${token}`
//   },
// }

// axios.post(url, data, {

//   // I have tried both ways posting the header and using auth.

//   // I've tested using space and %20 - no success
//   withCredentials : true,
//   crossDomain: true,
//   auth: {
//     username: 'flow applicant',
//     password: 'lets code'
//    }
// })

    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

// fetch('http://game.flowautobody.com.au/hello', {
//   method: 'post',
//   header: {
//     'Authorization': 'Basic ' +btoa('flow applicant:lets code'),
//     'Content-Type': 'application/json'
//   },
//   mode: 'cors',
//   cache: 'default'
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error))

// }

  // Simple POST request with a JSON body using fetch
  // const requestOptions = {
  //     method: 'POST',
  //     headers: { 
  //       'Authorization': 'Basic ' +btoa('flow applicant:lets code'),
  //       'Content-Type': 'application/json'
  //      },
  //     body: JSON.stringify({ preferredName: 'Renato', emailAddress: 'renatofrias@outlook.com' }),
  // };
  // await fetch('https://game.flowautobody.com.au/apply', requestOptions)
  //     .then(response => response.json())
  //     .catch(function (error) {console.log(error)})


//  await console.log(fetch('https://game.flowautobody.com.au/apply', {
//    method: 'get',
//    headers: { 
//     'Authorization': 'Basic ' +btoa('flow applicant:lets code'),
//     'Content-Type': 'application/json'
//    }
//  }))


// Declare Username + Password - I've tested using space and %20 - no success

// const username = 'flow applicant'
// const password = 'lets code'





// solutions



// async componentDidMount() {

// }

    // STEP 1 - DONE TO GENERATE APPLICANT ID

    // Declare url + data to POST
    // const url = 'https://game.flowautobody.com.au/apply'
    // const data = {
    //   preferredName:'Renato',
    //   emailAddress:'renatofrias@outlook.com',
    // }

    // STEP 2 - POST APPLICANTID TO /GAME TEO RECEIVE GAMEID

    // const url = 'https://game.flowautobody.com.au/game'
    // const data = {
    //   applicantId: '305036872197866051'
    // }

    // axios.post(url, data, {
    //   auth: {
    //    username: 'flow applicant',
    //    password: 'lets code'
    //   }
    // })

    // STEP 3 PUT to the url /game with data fields applicantId, gameId and guess to submit a guess.

    // Logic behind it - start half way, increase and decrese in 100000 to start with. Check previous state divide by 2 when necessary.

    // var n = 500000;
    // var increment = 100000;
    // var lastState = "";

    // function runAPI() {
    //   const url = `https://game.flowautobody.com.au/game`;
    //   const data = {
    //     applicantId: "305036872197866051",
    //     gameId: "305080472391647811",
    //     guess: n,
    //   };
    //   axios
    //     .put(url, data, {
    //       auth: {
    //         username: "flow applicant",
    //         password: "lets code",
    //       },
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //       console.log(response.data.result);
    //       if (response.data.result === "higher") {
    //         if (lastState === "higher") {
    //           n = Math.round(n + increment);
    //         }
    //         lastState = "higher";
    //         runAPI();
    //       } else if (response.data.result === "lower") {
    //         if (lastState === "lower") {
    //           n = Math.round(n - increment);
    //         } else if (lastState === "higher") {
    //           increment = Math.round(increment / 2);
    //           n = Math.round(n - increment);
    //         }
    //         runAPI();
    //       } else {
    //         console.log("Congratulations the numer is:" + response.data.guess);
    //       }
    //       console.log(increment);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    // runAPI();

    // STEP 4 - POST to /submit-application with data fields: applicantId, gameId, packUrl and packInstructions

    // const url = `https://game.flowautobody.com.au/submit-application`;
    // const data = {
    //   applicantId: "305036872197866051",
    //   gameId: "305080472391647811",
    //   packUrl: "https://www.dropbox.com/sh/uyfinq3n7vr49sx/AAAruxcgqKJptbkcUZSG4xMpa?dl=0",
    //   packInstructions: "There are no instructions, but feel free to give me a call on 0474 033 253 if you want to have a chat.",
    // };
    // axios
    //   // .post(url, data, {
    //     auth: {
    //       username: "flow applicant",
    //       password: "lets code",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    import React, { Component, useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";


function Section5() {
    
const [api, setAPI] = useState(null)

const runAPI = async() => {

        let guessNumber = 500000     
        let increment = 100000
        let lastState = ""  
        let tries = ''

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
                  console.log(response.data.result);
                  console.log(guessNumber);
                  tries++;
                  setAPI(response.data);
                  console.log(tries);
                  if (response.data.result === "higher") {
                        guessNumber = Math.round(guessNumber + increment);
                        lastState = "higher";
                        repeat();
                  } else if (response.data.result === "lower") {
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
            repeat();
        

        return (
            <Section5>
            <div className={"section section-dark"} id={"section5"}>
              <div className="section-content">
              <h1>Third Task</h1>
              <button onClick={runAPI}>Run API</button>
              <h4>Tries: {}</h4>
              <h4>Result: {}</h4>
              </div>
              </div>
              </Section5>
          );
 }

}
default export {Section5};



import React, { Component, useState, useEffect} from "react";
import axios from "axios";


class api extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attempts: 0,
            result: null
        }
    }


runAPI = (state, attempts, result) => {

        let guessNumber = 500000     
        let increment = 100000
        let lastState = ""  
        let tries = ''

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
                  console.log(response.data.result);
                  console.log(guessNumber);
                  tries++;
                  state.setState({attempts: this});
                  result = response.data.result;
                  console.log(tries);
                  if (response.data.result === "higher") {
                        guessNumber = Math.round(guessNumber + increment);
                        lastState = "higher";
                        repeat();
                  } else if (response.data.result === "lower") {
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
            repeat();
        }

    render(){
        const {attempts, result} = this.state;
        return (
            <div className={"section section-dark"} id={"section5"}>
              <div className="section-content">
              <h1>Third Task</h1>
              <button onClick={this.runAPI}>Run API</button>
              <h4>Tries: {attempts}</h4>
              <h4>Result: {result}</h4>
              </div>
              </div>
          );
    }

}

export default api;

