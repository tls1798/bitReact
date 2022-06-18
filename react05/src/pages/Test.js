import { useState } from "react";

export default function Example(){
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <h1>클릭 횟수 - {count}</h1>
            <button onClick={() => (setCount(count+1), console.log(count))}>클릭</button>
        </div>
    )
}