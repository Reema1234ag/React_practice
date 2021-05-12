import './App.css';
import React,{ Component } from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import {Classcomponent,Classcomponent1, Classcomponent2, Classcomponent3} from './components/Classcomponent';
import  {Greet,Greet1} from './youtube classes/NewAboutProps';
import { VT } from './youtube classes/VT-10';
import Counter from './youtube classes/Counter(VT-11)';
import {Destructing1,Destructing2} from './youtube classes/DestructingFunc(v12)';
import DestructingClass from './youtube classes/DestructingClass';
import FunctionClick from './youtube classes/FunctionClick';
import { BindingHandlers, ClassClick } from './youtube classes/BindingHandlers';
const i=true;
const logo='data:image/jpeg;base64,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'
const element=(
  <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>React</li>
    <li>Node</li>
  </ol>
);
const cssstyle={
  color:"red",
  backgroundColor:"yellow",
  display:"inlineBlock",
  padding:"10px",
  borderRadius:"5px",

}
function App() {
  return (
    <>
      <h1>Hello world</h1>
      <p>This is <span style={cssstyle}><b>Reema Agrawal</b></span></p>
      <p>I AM {i==1?'Intrested':'Not Intrested'}</p>
      <img src={logo}/>
      
      <p>The topics you will learn in web development:
      {element}
      </p>
      <hr></hr>
      <h1>This is implementation of props in functionl and class component</h1>
      <FunctionalComponent  num={"1st"}h1={"XYZ COMPANY"} 
      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
      <FunctionalComponent num={"2nd"} h1={"ABC COMPANY"} 
      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
      
      <Classcomponent num={"1st"} h1={"PQR COMPANY"}
      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/ >
      <Classcomponent1/>
      <hr></hr>

      <h1>This is implementation of getting data through state in class component and updating</h1>
      <Classcomponent2/>
      <h3>This is implementation of getting data through props and updating using setstate function in class component</h3>
      <Classcomponent3 roll={"4"} name={"Gargi"}/>
      <hr></hr>

      <h2> Some other ways(youtube)</h2>
      <Greet/>
      <Greet1 name="Reema1"><p>this is props childern</p></Greet1>
      <Greet1 name ="Reema2"><button>props childern</button></Greet1>
      <VT/>
      <h1>Counter</h1>
      <Counter/>
      <hr></hr>
      <h1>Destructing props and state</h1>
      <h3>In functional Component</h3>
      <Destructing1 name="Reema" course="B.tech" year="3rd"/>
      <Destructing2 name="Shivani" course="Bsc" year="2nd"/>
      <h3>In class component</h3>
      <DestructingClass name="Reema" clg="Gla university"/>
      <hr></hr>
      <h1>Event Handling in functional and class component</h1>
      <FunctionClick><h3>In functional component</h3></FunctionClick>
      <h2>Event binding in class component</h2>
      <ClassClick/>
      <BindingHandlers/>

    </>
  );
}

export default App;