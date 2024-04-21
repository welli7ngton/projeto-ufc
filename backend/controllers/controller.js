import userService from "../services/services.js"

export function getUsers(req, res) {
    const userServices = new userService();
    // console.log(userServices.getAll());
    res.render("verUsuarios",{
        pageTitle: 'User list',
        users: userServices.getAll()
    })
}