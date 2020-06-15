async function API(url){
    const baseUrl = 'https://jsonplaceholder.typicode.com/users/';
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;

}
API('user').then(console.log);
