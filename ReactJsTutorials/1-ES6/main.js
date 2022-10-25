//funtion normal
function logger(log){
    console.log(log);
}
logger('Message');
//Arrow function
//void
const logger = (log) => {
    console.log(log);
}
// return number
const sum = (a,b) => {
    return a + b;
}
//reutrn luôn
const sum1 = (a,b) => a+b;

// return object
const json = (a,b) => {
    return {a:a, b:b};
}
//return luon
const json1 = (a,b) => ({a:a, b:b});

// 1 tham số truyền vào
// i là biến
const age = i => console.log(i);

// arrow function ko áp dụng co contructor function
//eg1:
const peple = function(name,age){
    this.name = name;
    this.age = age;
}
const  p = new peple(10,4);
//underfine ko phải contructor
const peple2 = (name,age) =>{
    this.name = name;
    this.age = age;
}
// II. Enhanced object literals
/**
 * 1. Định nghĩa key: value cho object
 * 2. Định nghĩa method cho object
 * 3. Định nghĩa key cho object dưới dạng 
 */
//1.Định nghĩa key: value cho object
// Cách thông thường
var name = "Java";
var price = 1000;
var cource = {
    name: name,
    price: price
};
// cách Enhanced object literals
var name = "Java";
var price = 1000;
var cource = {
    name,
    price
};
console.log(cource)

//2. Định nghĩa method cho object
var name = "Java";
var price = 1000;
var cource = {
    name,
    price,
    getName(){
        return name;
    }
};
// 3. Định nghĩa key cho object dưới dạng 
var fildName = "hieu"
var fielPrice = "price"

const count = {
    name: 'Javascript',
    [fildName] :'hello', //key: hieu:hello
    [fielPrice] :'price',
}

// 4. Destructuring, Rest Phân ra
// 4.1. Array
// Cách bình thường
var array = ['Javascript','PHP','Ruby']
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a,b,c);
// Cách Destructuring
var array = ['Javascript','PHP','Ruby']
var [a,b,c] = array;// lấy a b c tương ứng index 1 2 3
var [a, , c] = array;
console.log(a,c);
//4.2. Rest lấy phần tử còn lại
var array = ['Javascript','PHP','Ruby']

var [a,b,...rest] = array; 
console.log(a,b);//
console.log(rest);//toán tử còn lại Ruby
// 4.2 Objects
var course = {
    name:"hieu",
    price: 1000,
    image: '1.png',
    children:{
        name: 'ReacJS'
    }
}
var {name, price} = course; // xác định đúng tên name, price
console.log(name, price);
// 4.2. Rest
var {name, ...args} = course;
console.log(args) //lấy price, image
// lấy name của chilren nhung bị cùng name
var {name: parrentName, children:{name}} = course;
console.log(parrentName) //lâ
// lấy field không tồn tại nếu tồn tài sẽ lấy  
var {debugger = 'Jhon', children:{name}} = course;
// ...parms = > mảng
function logger(...params) {
    console.log(params);
}
logger(1,2,3,4);
// lấy a,b 
function logger(a,b,...params) {
    console.log(params);
}
logger(1,2,3,4);
// ...parms = > object
function logger({name,price,...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest)
}
logger({
    name:"hieu",
    price: 1000,
    image: '1.png',
    children:{
        name: 'ReacJS'
    }
})

// 5. Spread => toán tử giải

// nối 2 mảng thành 1 mảng
// ...array1 => (bỏ ngoặc vuông) 'Javascript','PHP','Ruby'
var array1 = ['Javascript','PHP','Ruby']
var array2 = ['Java','Angular']
var array3 = [...array1, ...array2] 
// nối 2 object object
// ...object = > (bỏ ngoặc nhọn) name: 'Java'
// nếu key trùng tên thì sẽ lấy key đầu tiên
var object1 = {
    name :'Java'
}
var object2 = {
    price=10
}
var object3 ={...object1,
     ...object2}
// truyền tham số cho hàm
var array = ['Javascript','PHP','Ruby']
const logger = (a,b,c) =>{
    console.log(a,b,c)
}
logger(...array)// chuyển đổi số spread
// 6. Modules = > bóc tách ra các chức năng
// import // import các moduler
// export ==> đế chỗ khác có thể sử dụng
import logger, {TYPE_LOG,HELLO} from "./logger.js";

logger('hello',TYPE_LOG)
