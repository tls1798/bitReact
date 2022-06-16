import { useState } from "react";

export default function App04(){
    // const [obj,setObj] = useState({msg:'입력',msg2:'하세요'});
    
    // const inputId=(e)=>{
    //     console.log(e.target.value);
    //     setObj({...obj,msg:e.target.value})
    // }
    
    // const inputPw=(e)=>{
    //     console.log(e.target.value);
    //     setObj({...obj,msg2:e.target.value})
    // }

    const [msg,setMsg] = useState('');    
    const [msg2, setMsg2] = useState('');
    const [chk, setChk] = useState(true);
    const inputId=(e)=>{
            console.log(e.target.value);
            setMsg(e.target.value);
    };
    const inputPw=(e)=>{
            console.log(e.target.value);
            setMsg2(e.target.value);
    };
    const inputHandler=(e)=>{
        console.log(e.target.name, e.target.value)
        setChk(!chk)
    }
    // const formSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(e.target.id.value, e.target.pw.value)
    // }
    const formSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
        <>
            <h1>{'회원가입'}</h1>
            <form onSubmit={formSubmit}>
                <label>id : 
                    <input onChange={inputHandler} name='id' value={msg}/>
                </label>
                <label>pw :  
                    <input onChange={inputHandler} name='pw' value={msg2}/>
                </label>
                <label>
                    <input type="checkbox" onChange={inputHandler} value={chk}/>
                </label>
                <div>
                    <input type='submit' value='전달'/>
                </div>
            </form>
        </>
    );
}