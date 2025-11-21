
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');

fetch(`fetch('https://dummyjson.com/products/category/smartphones')
${id}`)
    then(function (data) {
            console.log(data);
    
    })
