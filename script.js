document.addEventListener('DOMContentLoaded', function (){
    const boton = document.getElementById('boton')
    const nom = document.getElementById('nom')
    const cognom = document.getElementById('cognom')
    const telefon = document.getElementById('telefon')
    const message = document.getElementById('message')
    const email = document.getElementById('email')
    boton.onclick = function () {
        if (nom.value === '' || cognom.value === '' || message.value === '' || email.value === '') {
            alert('Arguments Missing')
    }
        else {
            alert('Message Sent')
        }   
    
}
})