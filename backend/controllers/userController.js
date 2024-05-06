import userService from "../services/userServices.js"
const userServices = new userService()


export function getUsers(_, res) {
    res.json({
        users: userServices.getAll()
    }).status(200)
}


export function viewProfile(req, res) {
    const userId = req.params.id; 
    const user = userServices.viewProfile(parseInt(userId));
    if (user) {
        res.json({
            username: user.userName, 
            email: user.email,
            bio: user.bio
        }).status(200)  
    } else {
        res.json({
            msg: 'Usuário não encontrado'
        }).status(404)    
    }
}


// export function createUserForm(_, res) {
//         res.render('createUser', {
//         pageTitle: 'Create User'
//     })
// }


export function createUser(req, res) {
    userServices.createUser(req.body.username, req.body.email, req.body.password, req.body.bio)
    res.json({
        msg: 'Novo usuário cadastrado'
    })
}


// export function deleteUserForm(_, res) {
//     res.render("deleteUser", {
//         pageTitle: 'Delete User'
//     })
// }


export function deleteUser(req, res) {
    userServices.deleteUser(req.body.id);
    res.json({
        msg: "Usuário deletado "+`(${req.body.id})`
    })
}


// export function updateProfileForm(req, res) {
//     const userId = req.params.id;
//     const _user = userServices.viewProfile(parseInt(userId));
//     if(_user){
//         res.render("updateUser", {
//             pageTitle: 'Atualizar Informações',
//             user: _user
//         });
//     }else {
//         res.redirect("/users/notFound")
//     }
// }


export function updateProfile(req, res) {
    res.json({
        msg: userServices.updateProfile(
            req.params.id,
            req.body.username,
            req.body.email,
            req.body.bio
        )
    }).status(200)
}


// export function userNotFound(_, res) {
//     res.json({
//         msg: 'Não encontrado'
//     })
// }
