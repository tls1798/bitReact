import { useEffect, useState } from "react"

export default function App06(props){
    console.log('App06 loading')
    const [msg,setMsg]=useState(1);
    const [msg2,setMsg2]=useState('두번째');
    useEffect(function(){
        setTimeout(() => {
           console.log('d')
        },3000);
        console.log('useEffect')
    },[msg,msg2]);
    const btnHandler=()=>{
        console.log('이벤트 발생')
        setMsg(1);
    };
    const btnHandler2=()=>{
        console.log('이벤트 발생')
        setMsg2(new String('이벤트 발생'));
    };
    return (

        <div>
            <h1>{msg}-{msg2}</h1>
            <button onClick={btnHandler}>버튼1</button>
            <button onClick={btnHandler2}>버튼2</button>
        </div>
    )
}