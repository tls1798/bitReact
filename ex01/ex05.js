var arr1=['item1','item2','item3'];

// for(i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// for(let idx in arr1){
//     console.log(arr1[idx]);
// )

// for(let item of arr1){
//     console.log(item);
// }
//  반복만 수행
// let result1 = arr1.forEach(function(ele,idx){
//     // console.log(ele,idx);
// });
//  return이 배열, 배열 복사 + 가공
// let result2 = arr1.map(function(ele,idx){
//     // console.log(ele,idx);
//     return ele+idx;
// });
// console.log(result1,result2);

// 리엑트에서 삭제
// let result3 = arr1.filter(function(ele,idx){
//     // console.log(ele,idx);
//     if(idx!=1)return ele;
// });
// console.log(result3);

// return이 true 일 때 까지 반복, 해당 ele 반환
// let result4 = arr1.find(function(ele,idx){
//     // console.log(ele,idx);
//     return ele=='item2';
// });
// console.log(result4);

// every() -> and
// let result5 = arr1.every(function(ele,idx,arr){
//     console.log(ele,idx,arr)
//     return false;
// });
// console.log(result5);

// some() -> or
// let result6 = arr1.some(function(ele,idx,arr){
//     console.log(ele,idx,arr)
//     return true;
// });
// console.log(result6)
// let arr2=[1,3,5,7,9];
// 주로 숫자 합계에 사용, 문자열 ',' 넣고 추가하는것도 가능함
// let result7 = arr2.reduce(function(prev,ele,idx,arr){
//     console.log(prev,ele,idx,arr);
//     return prev+ele;
// });
// console.log(result7);

let arr3=[1,3,5,7];
let arr4=[2,4,6,8];
let arr5=arr3.concat(arr4);
let arr6=[].concat(arr3);
console.log(arr5,arr6);
