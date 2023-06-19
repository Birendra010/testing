


module.exports.absolute =function(number){
    if(number >=0) return number;
    return -number
}



module.exports.greeting = function(name){
return `Greetings ${name}!`
}


module.exports.fizzbuzz =function(input){
    if(input % 15 ===0){
        return 'FizzBuzz'
    }
    if(input % 3 ===0){
        return 'Fizz'
    }
    if(input % 5 ===0){
        return 'Buzz'
    }
    else{
        return input
    }

}

module.exports.object = function(){
    return {id:1 ,price:10}
}


module.exports.registerUser=function(username){
    if(!username) throw new Error('username required')
    return {id:new Date().getTime(),username:username}
}