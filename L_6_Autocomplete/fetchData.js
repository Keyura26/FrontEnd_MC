/**   make HTTP request fromm browser -> 
it is an promise based API*/
/***
 * Fetch API request ->
 * *  GET request  ->response object 
 * * response = header (metadata)+body(actual data)
 *      * extarct actual -> call response.json() and 
 *       this fn is also promise based 
 * * This  route -> should be public , or you should auth
 * */

//With fetch we are making an request and HTTP packet containns HTTP header and its body
//With 404 browser automatically identifies that resource is not found
// fetch(`https://restcountries.com/v3.1/name/`)
//     .then(
//         function (response) {
//             // response -> data(body)+ metadata(header)
//             console.log("response", response)
//             return response.json();
//         }
//     ).then((data) => {
//         console.log("data", data);
//     }).catch(err => {
//         console.log("in catch");
//         console.log("hello", err);
//     })

   
    //*********************************************/
    
    async function getCountries(keyword) {
        try {
            // http response
            const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
            const response = await rawResponse.json();
            // console.log("data",data);
            console.log(rawResponse.status);
            if (rawResponse.status == 404) {
                console.log("Page not found");
                return [];
            } else {
                console.log("Data found");;
            }
            return response;
        } catch (err) {
            console.log("err", err);
        }
    
    }

    getCountries("india").then(function (res){
            console.log(res);
    })

    export default getCountries;