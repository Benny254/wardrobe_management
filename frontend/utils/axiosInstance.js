axios.post("http://localhost:8000/api/auth/register", {
    username: "Bee",
    email: "bee12@gmail.com",
    password: "securepassword"
})
.then(response => console.log(response.data))
.catch(error => console.error(error.response.data));
