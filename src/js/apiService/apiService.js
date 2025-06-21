export const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log(response);
        if(response.ok) {
            return response.json()
        } throw new Error('Network response was not ok');
    });
}