let images = document.querySelectorAll('.thumbs img');
for (let im of images) 
    im.addEventListener('click', function() {
        let main = document.getElementById('.main-img');
        main.src = this.src
    });
