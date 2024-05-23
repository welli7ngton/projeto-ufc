import userService from "../services/userServices.js"
const userServices = new userService()


export async function getUsers(_, res) {
  try {
    const users = await userServices.getAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({err: error})
  }
}


export async function viewProfile(req, res) {
    try {
        const userId = req.params.id; 
        const user = await userServices.viewProfile(parseInt(userId));
        res.status(200).json({user: user,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({err: error,
        })
    }
}


export function createUser(req, res) {
    userServices.createUser(req.body.username, req.body.email, req.body.password, req.body.bio)
    res.json({
        msg: 'Novo usuário cadastrado'
    })
}



export function deleteUser(req, res) {
    const userId = req.body.id;
    if (!userId) {
        res.status(400).json({ msg: 'ID de usuário não fornecido' });
        return;
    }

    userServices.deleteUser(userId).then(msg => {
        res.json({
            msg: msg
        });
    }).catch(error => {
        res.status(500).json({
            msg: 'Erro ao deletar o usuário',
            error: error
        });
    });
}


export async function updateProfile(req, res) {
    try {
        const user = await userServices.updateProfile(
            req.params.id,
            req.body.username,
            req.body.email,
            req.body.bio
        )
        res.status(200).json({user: user })
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}