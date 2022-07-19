function saturdayFun(action){
   if (action === undefined) {
        return "This Saturday, I want to roller-skate!";
    } else return `This Saturday, I want to ${action}!`
}
function mondayWork(action2 = "go to the office") {
    return `This Monday, I will ${action2}.`
}
function wrapAdjective(flare = "*"){
    return function(comp = "special"){
        return `You are ${flare}${comp}${flare}!`
    }
}
