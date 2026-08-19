function openRegisterModal(obj) {
    let id = obj.getAttribute('rel')
    let e = document.getElementById(id);
    e.classList.remove('modal-hidden')
    e.classList.add('modal-show')
}

function closeModal(obj) {
    let id = obj.getAttribute('rel')
    let e = document.getElementById(id);
    e.classList.remove('modal-show')
    e.classList.add('modal-hidden')
}


let inputs = document.querySelectorAll('.modal-content input');
for (let inp of inputs)
    inp.addEventListener('blur', function(){
if ( !this.value || this.value === '') {
        this.classList.add('error')
    }
    else {
        this.classList.remove('error')
    }});

