let obj1={'key1':'val1'};
let obj2={key2:'val2'};
let obj3={['key3']:'val3'};

var key4='val4';
let obj4={key4};
let obj5={key4:key4};

let obj6={key1:1111,key2:2222};
obj6.key2=2;
obj6.key3=3333;
obj6['key4']=4444;
obj6[key4]=5555;

// 객체 복사
let obj7={...obj6};

let obj77={...obj6, key1:1};
let obj8=JSON.parse(JSON.stringify(obj6));
let obj9=Object.assign({},obj6);

let obj10={func1(){console.log('func1')}};
let obj11={func1:function(){console.log('func1')}};
obj10.func1();

console.log(obj1.key1, obj1['key1']);
console.log(obj1,obj2,obj3);

console.log(obj4,obj5);

console.log(obj6);

console.log(obj7);
console.log(obj77);
console.log(obj8);