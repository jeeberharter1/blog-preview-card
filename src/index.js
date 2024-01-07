const container = document.getElementById('blog');

// when title is hovered, create press effect on blog container
function handleHoverOn() {
    container.classList.add('blog__pressed');
    container.style.boxShadow = '5px 5px 0px 0px rgba(0,0,0,1)';
}

// when hover ends, remove press effect on blog container
function handleHoverOff() {
    container.classList.remove('blog__pressed');
    container.style.boxShadow = '10px 10px 0px 0px rgba(0,0,0,1)';
}