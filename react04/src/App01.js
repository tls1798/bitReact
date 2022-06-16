import React from "react";

export default class App01 extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
    }

    clickFunc(){
        console.log('method',this)
    }

    render(){
        return (
            <>
                <h1>class 형 이벤트</h1>
                <button onClick={()=>{console.log('화살표함수',this.props)}}>click1</button>
                <button onClick={(function(){console.log('function',this.props)}).bind(this)}>click2</button>
                <button onClick={this.clickFunc.bind(this)}>click3</button>
            </>
        )
    };
}
