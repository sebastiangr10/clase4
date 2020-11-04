let juan;
let alberto;
let ana;
let mama;
juan=Number(prompt("ingrese la edad de juan"));
function edadAlberto(juan){
    alberto=parseInt((juan*2)/3)
    return alberto
}
function edadAna(juan){
    ana=parseInt((juan*4)/3)
    return ana
}
function edadMama(juan){
    mama=parseInt((juan+alberto+ana))
    return mama
}
alert("la edad de juan es " + juan)
alert("la edad de alberto es" + edadAlberto(juan))

alert("la edad de ana es " + edadAna(juan))
alert("la edad de mama es " + edadMama(juan))