let fruits=["apple","mango","banana", "grapes"]
//console.log(fruits)
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);
for(let fruit of fruits){
    console.log(fruit)
}

//Q1)For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
    let marks=[85,97,44,37,76,60]
    let sum =0
    let avg=0
    for( let mark of marks){
        sum = sum+mark
        avg= sum/marks.length
        
    }
    console.log(avg)

//Q2) For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250,645,300,900,50]
let newprices=[]
for(let price of prices){
    newprice=price - 0.1*price
    //console.log(newprice)
    newprices.push(newprice)
}
console.log(newprices);

