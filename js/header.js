const burger = document.querySelector('.burger');
const modalWindow = document.querySelector('.modalWindow');
const headerModalWindow = document.querySelector('.headerModalWindow');
burger.addEventListener('click' , function(){
    burger.classList.toggle('burger_active');
    if(!burger.classList.contains('burger_active')){
        modalWindow.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            headerModalWindow.style.display = 'none';
        }, 600);
    }
    else{
        headerModalWindow.style.display = 'block';
        modalWindow.style.transform = 'translateX(0)';
    }
})
headerModalWindow.addEventListener('click' , function(){
    burger.classList.toggle('burger_active');
    modalWindow.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        headerModalWindow.style.display = 'none';
    }, 600);
})