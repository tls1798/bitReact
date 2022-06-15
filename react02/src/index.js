import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Ex01';

class Car2 extends React.Component {
  constructor(props){
    super();
    this.name=props.name;
  }
  render() {
    return <h2>{this.name} 모듈</h2>;
  }
}
function Car3(props){
  return (
    <>
      <Car2 name={props.name}/>
      <h2>Car3!</h2>
    </>
    )
}

class Bar2 extends React.Component {
  constructor(props){
    super();
    this.name=props.name;
  }
  render() {
    return <h2>{this.name} 모듈</h2>;
  }
}


class Bar3 extends React.Component{
  constructor(props){
    super(props);
    this.msg2='클릭안됨'
    this.state = {msg:Number(props.num)}
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render(){
    return(
      <div>
        <button onClick={()=>{this.setState({msg :this.state.msg+1});console.log(this.state.msg)}}>클릭</button>
        <p>{this.state.msg}</p>
        {/* <p>{this.msg2}</p> */}
      </div>
    )
  }

}

// const myElement = React.createElement('h1',{onClick:()=>alert('click')},'I do not use JSX!');
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Bar3 num='0'/>
    {/* <Car3 name='red'/> */}
  </>
)
// root.render(myElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );  
// ReactDOM.render(myelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
