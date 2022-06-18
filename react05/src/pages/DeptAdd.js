import {useNavigate} from "react-router-dom";

export default function Add(props){
    const navigator = useNavigate();
    const insertSubmit=(e)=>{
        e.preventDefault();

        const param={};
        param.deptno=Number(e.target.deptno.value);
        param.dname=e.target.dname.value;
        param.loc=e.target.loc.value;

        fetch('http://localhost:8080/api/dept/',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
                // 'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : JSON.stringify(param)
            // body : 'deptno='+param.deptno+'&dname='+param.dname+'&loc='+param.loc
        })
            .then(res=>(res.json()))
            .then(result=>{
                console.log(result)
                console.log(props)
                // ~ v5
                // this.props.history.push('/dept');
                // props.history.push('/dept');
                // v6 ~
                navigator('/dept');
            })
    }
    
    return(
        <>
            <h1>Add page</h1>
            <form onSubmit={insertSubmit}>
                <div className="form-group">
                    <label>deptno : 
                        <input type="text" className="form-control" name="deptno" placeholder="deptno"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>dname :
                        <input type="text" className="form-control" name="dname" placeholder="dname"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>loc :
                        <input type="text" className="form-control" name="loc" placeholder="loc"/>
                    </label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </>
    )
}