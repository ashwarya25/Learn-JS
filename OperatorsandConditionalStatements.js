console.log("OPERATORS!")
//Arithmetic Operators
num1= 5;
num2=10;
addnum = num1 + num2;
subnum = num1-num2;
mulnum = num1 * num2;
quotientnum = num2/num1;
remaindernum = num2%num1; //modulus
console.log( "sum : " + addnum +"\n" + "diff : " + subnum + "\n" + "product : " + mulnum + "\n" + "quotient : " + quotientnum + "\n" + "remainder : " + remaindernum);

//Assignment Operators
a = 100;
console.log(a);
a += 1; // a= a+1
console.log(a)
b=200;
b *= 3;
console.log(b);
c=2;
c **= 3;
console.log(c)

//Comparison Operators 
d= 90;
e= "90";
f=100;
console.log( d == e) //only check values
console.log( d === e)//checks values and datatype
console.log( d != e)
console.log( d !== e)
console.log(d > f);
console.log(f > d);

//Logical Operators (turthy- non zero, falsy - zero)
g=30;
h=70;
console.log( g && h);  //returns last value if both are truthy (70)
console.log( g || h); //returns first truthy value (30)
console.log(!g) // converts g to boolean and negates it (30 → true → false)

console.log("CONDITIONAL STATEMENTS!")

//if-else statement
age =25;
if(age>18){
    console.log("you're an adult")
} else{
    console.log("You're a child!")
}

//switch statement
let x = 2;
switch(x){
    case 1: console.log("Hello");
        break;
    case 2: console.log("Goodbye");
        break;
    
}
//Ternary Opeartors
age>18 ? console.log("adult") : console.log("not adult")

//Q1) Get user to input a number using prompt(“Enter a number: Check if the number is a multiple of 5 or not.

    let userinput = prompt("Enter a number:")
    if(userinput== 0 || userinput<0)
        {
            console.log("invalid input")
        } 
    else
    if(userinput % 5 == 0)
    {
        console.log("The number is a multiple of 5");
    } 
    else 
    {
        console.log("The number is not a multiple of 5")
    }

//Q2) Write a code which can give grades to students according to their scores:80-100, A 70-89, B 60-69, C 50-59, D 0-49, F

let studentScore = 100;
if(studentScore<=0){
    console.log("Invalid Input")
}
else
if( studentScore>0 && studentScore<=49){
    console.log( "Grade F")
}
else
if( studentScore>49 && studentScore<=59){
    console.log( "Grade D")
}
else
if( studentScore>59 && studentScore<=69){
    console.log( "Grade C")
}
else
if( studentScore>69 && studentScore<=79){
    console.log( "Grade B")
}
else
if( studentScore>89 && studentScore<=100){
    console.log( "Grade A")
}