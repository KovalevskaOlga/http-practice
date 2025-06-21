import { fetchUsers } from "./apiService/apiService";
import makeUsserMarkUP from "../template/users.hbs";

const container = document.getElementById("getAll")
const refs = {
    getBtn: container.querySelector(".btn"),
    userTable: container.querySelector(".table")
}

const getUsers = () => {
    fetchUsers().then(data => renderUsers(data))
}

const renderUsers = users => refs.userTable.innerHTML = makeUsserMarkUP(users)

refs.getBtn.addEventListener("click", getUsers)