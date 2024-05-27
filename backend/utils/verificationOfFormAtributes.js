export function verificationOfFormAtributes(list) {
    for(let i = 0; i < list.length; i++){
        if(list[i] === "") return false
    }
    return true
}