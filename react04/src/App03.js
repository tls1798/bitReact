// export default ()=><h1>arrow function</h1>
const Li=(props)=><li key={props.num}>{props.msg}</li>

const App03=(props)=>{
    console.log(props)
    const arr=['item1','item2','item3'];
    const showList=()=>{
        // return arr.map(function(ele,idx){
        //     return <Li msg={ele} key={idx}/>
        //     // return <li key={idx}>{ele}</li>
        // })
        const returnArr = [];
        arr.forEach(function(ele,idx){
            returnArr.push(<li>{ele}</li>)
        })
        return returnArr;
    }
    return (
        <>
            <h1>arrow function</h1>
            <ul>
                {showList()}
            </ul>
        </>
    );
};
export default App03;