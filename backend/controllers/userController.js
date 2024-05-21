import userService from "../services/userServices.js"
const userServices = new userService()


export async function getUsers(_, res) {
  try {
    const users = await userServices.getAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users, ', error);
    res.status(500).json({err: error})
  }
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


export function createUser(req, res) {
    userServices.createUser(req.body.username, req.body.email, req.body.password, req.body.bio)
    res.json({
        msg: 'Novo usuário cadastrado'
    })
}

export function deleteUser(req, res) {
    const msg = userServices.deleteUser(req.body.id);
    res.json({
        msg: msg
    })
}


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