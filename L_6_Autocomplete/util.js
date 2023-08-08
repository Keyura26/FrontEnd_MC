//debouncing is a very important question and it will be asked
function debounce(fn, delay = 500) {
    // intial 
    let timerId;
    return function (...args) {
        //grumpy 
        if (timerId) {
            console.log("I am reseting you now wait again from the start")
            clearTimeout(timerId)
        }
        // they want to call the fn after a delay
        timerId = setTimeout(function () {
            fn(...args);
        }, delay)
    }
}
// -> 0 -> 3
// 


// function myFN() {
//     console.log("Please call me");
// }

// const dbFN = debounce(myFN, 3000);
// dbFN();
// setTimeout(function () {
//     dbFN();
//     setTimeout(function(){
//         setTimeout(function(){
//             dbFN();   ///The gist is when we poke it inbetween it will reset itself
//         }, 1000);
//     }, 1000);
// }, 1000);