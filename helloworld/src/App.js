import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick />
      <Counter />
      <Message />
      <Greet name="Krishna" surname="Bharambe" >
        <p>Children text</p>
      </Greet>
      <Welcome name="Krishna" surname="Bharambe">
        <p>Children text</p>
      </Welcome> */}
    </div>
  );
}

export default App;
