/*appending elements*/
const input=document.getElementById('display')

function append(e){
    input.value += e
}

function cleared(){
    input.value = ''
}

function equals(){
    try{
        input.value = eval(input.value)
    }
    catch{
        input.value = 'Error'
    }
}