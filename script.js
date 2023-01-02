var nota1=9
var nota2=4
var media=(nota1+nota2)/2
var conceito=""
if(media>9){
    conceito="otimo"
}else if(media>3){
    conceito="bom"
}else{
    conceito="ruim"
}

console.log(media)
console.log(conceito)

switch(conceito){
    case "otimo":
        console.log('esta bem')
        break;
        case "bom":
            console.log('esta')
            break;
            case "ruim":
                console.log('estta mal')
                break;
}