import userService from "../services/services.js"


const userServices = new userService()

export function getUsers() {
    return userServices.getAll()
}

export function createUser(userName, email, password) {
    return userServices.createUser(userName, email, password)
}

export function deleteUser(id) {
    console.log('estou dentro da controller')
    // primeiramente eu adiciono todos os usuarios cadastrados em uma variavel.
    const users = userServices.getAll();

    // agora verifico se existe algum usuário com o id que foi digitado dentro do formulário.
    const index = users.findIndex(u => u.id == id);

    // caso o index seja diferente de '-1'(quer dizer que existe um id exatamente igual ao que o usuário digitou no formulario)
    // logo, é possível deletar.
    if (index !== -1){
        console.log('entrei no if e vou executar a função da service')
        // aqui eu retorno uma lista com a função deleteUser da services sendo executada e apagando o user do 'banco de dados'
        // e uma string com a mensagem que vai ser exibida para o usuário.
        return [userServices.deleteUser(id), "Usuário deletado."]
    } else {
        // caso o index seja === -1(significa que não existe nenhum usuário com esse id)
        // eu retorno a função getAll da service sendo executada, que retorna todos os usuários cadastrados e uma mensagem
        // que aparecerá para o usuário na view verUsuarios.
        // eu faço isso porque a view tem que receber obrigatoriamente usuários para renderizar.
        return [userServices.getAll(), 'Nenhum usuário foi deletado.']
    }
}

export function viewProfile(req, res, id){
    const __user = userService(id)
    if (user !== undefined){
        res.render("viewProfile", {
            pageTitle: 'Profile',
            user: __user
        })
    }
}