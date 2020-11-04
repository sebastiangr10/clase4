let sueldo
let semana
let ahorro


sueldo =Number(prompt("ingrese sueldo mensual"))
semana= (sueldo/4)
function ahorroanual(sueldo){
    ahorro=sueldo*12*0.15
    return ahorro
}
ahorro=ahorroanual
alert(" el ahorro anual es" + ahorroanual(sueldo) + "$")
