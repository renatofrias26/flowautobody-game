import "./App.css";
import React, {Component} from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import { BrowserRouter} from "react-router-dom";


class App extends Component {7

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Section1
          title="About"
          dark={true}
          id="section1"
          />
         <Section2
          title="Step 1"
          dark={false}
          id="section2"
          />
         <Section3
          title="Step 2"
          dark={false}
          id="section3"
          />
          <Section4
          title="Step 3"
          dark={false}
          id="section4"
          />
         <Section5
          title="Step 3"
          dark={false}
          id="section5"
          />
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
