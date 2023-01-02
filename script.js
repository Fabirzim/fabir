let nome="fabir"

try{
    if(nome == ""){
        throw "errado"
    }
    console.log(nome)
}catch(err){
    console.log('errado',err)
}