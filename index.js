console.log('hello world')
console.log('hey dude')

document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let square = document.querySelector('#box')
    let button= document.querySelector('#bt')
    
    button.addEventListener('click', () => {
       if (square.style.backgroundColor == 'white'){
           square.style.backgroundColor = 'blue'
       } else{
           square.style.backgroundColor = 'white'
       }
    })
   

})