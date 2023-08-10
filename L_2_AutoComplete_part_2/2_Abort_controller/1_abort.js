// inbuilt API , AbortController is an existing object that is present in browser
// 1 create a instance from AbortController
//In Javascript we just implement the logic features are given by browser
// const fetch = require('node-fetch');
const abortcontroller = new AbortController();
(async function () {
    // fetch -> url , options
    try {
        // 2 attach signal to a fetch request 
        const responsePromise = fetch("https://restcountries.com/v3.1/name/india",
            { signal: abortcontroller.signal });
        console.log("request is send");
        // 3 call abort 
        abortcontroller.abort();  //when we abort a request we get an error
        const response = await responsePromise;
        const ans = await response.json();
        console.log("ans", ans);

    } catch (err) {
        if (err.name == "AbortError") {
            // Request was aborted
            console.log('Fetch request was aborted.');
            return err.name;
        } else {
            console.error("Fetch error:", err);
        }
    }
})();



//  implement -> request timeout -> response -> 2sec -> abort it 