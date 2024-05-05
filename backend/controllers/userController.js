import userService from "../services/userServices.js"
const userServices = new userService()

export function getUsers(_, res) {
    res.render('verUsuarios', {
        pageTitle: 'User list',
        users: userServices.getAll()
    });
}

export function viewProfile(req, res) {
    const userId = req.params.id; 
    const user = userServices.viewProfile(parseInt(userId));
    if (user) {
        res.render("viewProfile", {
            pageTitle: "Profile",
            user: user
        });
    } else {
        res.redirect("/users/notFound")    
    }
}


export function createUserForm(req, res) {
         res.render('createUser', {
        pageTitle: 'Create User'
    })
}
export function createUser(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const bio = req.body.bio;
    userServices.createUser(username, email, password, bio);
    res.redirect("/users/getUsers");
}


export function deleteUserForm(req, res) {
    res.render("deleteUser", {
        pageTitle: 'Delete User'
    })
}

export function deleteUser(req, res) {
    const userId = req.body.id;
    userServices.deleteUser(userId);
    res.redirect("/users/getUsers");
}


export function updateProfileForm(req, res) {
    const userId = req.params.id;
    const _user = userServices.viewProfile(parseInt(userId));
    if(_user){
        res.render("updateUser", {
            pageTitle: 'Atualizar Informações',
            user: _user
        });
    }else {
        res.redirect("/users/notFound")
    }
}


export function updateProfile(req, res) {
    const newUserName = req.body.username;
    const newEmail = req.body.email;
    const id = req.params.id;
    const bio = req.body.bio
    const mensagem = userServices.updateProfile(id, newUserName, newEmail, bio)
    res.render(`viewProfile`, {
        pageTitle: 'PageTitle',
        msg: mensagem, 
        user: userServices.viewProfile(parseInt(id))
    })
}

export function userNotFound(req, res) {
    res.render('notFound')
}