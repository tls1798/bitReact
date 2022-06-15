// let func1=function(){console.log('func1');};
// func1();
// let func2=()=>console.log('func2');
// func2();

let func1=function(){return 'func1';};
let result1 = func1();
let func2=()=>'func2';
let result2 = func2();
let func3=(a,b)=>{console.log(b+'run'+a); return 'func3';};
let result3 = func3(1,2);
console.log(result1,result2,result3);