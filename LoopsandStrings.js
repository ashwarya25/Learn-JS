console.log("LOOPS!")

//for loop
for( i=1;i<=5;i++){
    console.log(i)
}

//infinte loop
/*for( j=0;j>=0;j++){
    console.log(j)
}*/

//while loop
k=0
while(k<3){
    console.log("Hello" + k)
    k += 1;
}

//do-while loop
l =0;
do {
    console.log("test" +l)
    l +=2;
}
while(l <5)

//for-in loop
let arr =['apple', 'grapes', 'banana']
for( let f in arr){
    console.log(arr[f])
}
//for-off loop
for( let f of arr){
    console.log(f)
}

//Q1) Print all even numbers from 0 to 100
    for(even=0;even<=100;even+=2)
        {
        console.log(even)
        }

//Q2) Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
originalnumber = 7;
/*
Code 1
    for( m=0;m<5;m+=1){
        guessnumber= prompt("Guess the Number between 1 to 10 :")
        if(guessnumber == originalnumber){
            console.log("That's correct! :)")
        }
        else{ console.log("Try again!")}
    }
Code 2
    do {
        guessnumber= prompt("Guess the Number between 1 to 10 :")
    }
    while(guessnumber !=originalnumber)
*/

//STRINGS
console.log("Strings!!")
let str = "I heart JS";
console.log(str.length)
console.log(str[0])
console.log(str[1])
console.log(str[5])
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.trim()) // removes whitespaces from the end
console.log(str.slice(1,5))
console.log(str.replace("JS", "python"))
console.log(str.concat(" and python"))
console.log(str.charAt(0))

//Template Literal in JS
let myname ="Ash"
console.log(`Hello!, ${myname}`)
let message = `this is 
a string
on
multiple lines`
console.log(message)

//Q1) Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
let fullName = prompt("Enter your Name: ")
console.log(fullName)
let lenFullName = fullName.length
username = "@" + fullName + lenFullName
console.log(username)
alert(`Your username is ${username} `)