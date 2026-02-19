// console.log("hello world");
// let name="pranav"
// let age=22
// const pie=3.14
// console.log(`The name is ${name } and age is ${age} and pie is ${pie}`)
// let a=30,b=3
// console.log("a+b =",a+b)
// console.log(` the substration is ${a-b}\n the multiplication is ${a*b}\n the divison is ${a/b}`)

//Assingment Operator 

// let x=5
// x+=3
// console.log(`x after this assignement operator is ${x}`)
// x-=2
// console.log(`x after this assignement operator is ${x}`)
// x*=4
// console.log(`x after this assignement operator is ${x}`)

// let m=10 , n="17"
// console.log(m==n)
// console.log(m===n)
// console.log(m!=n)
// console.log(m!==n)
// console.log(m<=n)

// let a=4,b=7
// console.log(a>=0 && b<10)
// console.log(a>10 || b>5)
// console.log(!(a>10))44


// let day=8
// switch(day){
//     case 1: console.log("mon") ;break
//     case 2: console.log("tu") ;break
//     case 3: console.log("wed") ;break
//     case 4: console.log("thu") ;break
//     case 5: console.log("fri") ;break
//     case 6: console.log("sat") ;break
//     case 7: console.log("sun") ;break
//     default:console.log("enter valid value")
// }

// let num=9
// let year=2016

// if(year%4==0){
//     console.log("leap year")
// }else{
//     console.log("not a leap year ")
// }
// if(num%2==0){
//     console.log("even number")
// }else{
//     console.log("number is odd")
// }
// for(let i=1;i<=5;i++){
//     console.log(i)
// }
// let i=10
// while(i<=45){
//     console.log(i)
//     i++
// }

for(let i=0;i<=10;i++){
    console.log(i*5)
}

let name=prompt("type a msg")
if(name){
    alert("hello "+name+"!")
}
else{
    alert("name not entered")
}

let result = confirm("do you want to continue")
if (result){
    alert("you clicked ok")
}
else{
    alert("you clicked cancel")
}

function add(){
    let num1=4
    num2=6
    let num3=num1+num2
    alert(num3)
}