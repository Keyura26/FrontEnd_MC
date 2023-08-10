function debounce(fn, delay = 500) {
    let timeoutID = null;
    return function (...args) {
        if (timeoutID) {
            // reseting the timer 
            console.log("reseting the timers");
            clearTimeout(timeoutID)
        }

        timeoutID = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}




function printHello() {
    console.log("hello");
}
const debouncedPrintHello = debounce(printHello, 2000);
debouncedPrintHello(); //1st


setTimeout(() => {
    debouncedPrintHello(); //2nd
    setTimeout(() => {
        debouncedPrintHello(); //3rd //In this case the first function call will be made after 4 sec
    }, 1000);
}, 1000)

// when 1st call is made timeoutID will be running and when 2nd call is made after 1 sec it cancels the 
 // timeoutid and function call starts running from beginning so the first function call is delayed

 // by 3 sec and when 3rd call is made it cancels the second function call timer id and fn call is made 

 // again which finally executes after 4 sec

 
 //Debounce and throttling are most important concepts

 