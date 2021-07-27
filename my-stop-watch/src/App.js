import './App.css';
import { observer } from 'mobx-react-lite';
import StopWatch from './store/StopWatch';
import { observable } from 'mobx';
import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function App() {
 function startCount() {
  
  if(!StopWatch.isStarted){
   return StopWatch.activeTask;
  }
 }
 function stopCount(){
   return StopWatch.stopCount;
 }
 function resetWatch() {
   return StopWatch.resetWatch;
 }

 function wait(){
   return StopWatch.wait;
 }
  return (
    <div className={'container'}>
    <div className='screen'>
      {StopWatch.tenHours}{StopWatch.hours}:{StopWatch.tenMin}{StopWatch.minutes}:{StopWatch.tenSec}{StopWatch.seconds}
    </div>
    <div className="btn-container">
    <Button className='my-btn' onClick={startCount} variant='primary'>start</Button>
    <Button className='my-btn' onClick={stopCount} variant="danger">stop</Button>
    <Button variant="secondary" className='my-btn' onDoubleClick={wait}>wait</Button>
    <Button variant="warning"  className='my-btn' onClick={resetWatch}>reset</Button>
    </div>
    </div>
  );
}

export default observer(App);
