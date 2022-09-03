function toggle() {
    var newsletter = document.querySelector('.newsletter');
    newsletter.classList.toggle('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
