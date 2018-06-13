//Asynch: Now and later

//part 1&2
let sun = (5);
function message() {
    console.log("I have", sun, "pairs of sunglasses.");
}
message();

//Part 3
function multiply() {
    console.log(sun * 2); 
}
multiply();
// Part4
setTimeout(() => {
    console.log(sun * 2); 
}, 2000);

//Callbacks




