document.addEventListener('DOMContentLoaded' , function(event){
    const slide = document.querySelectorAll('.swiper__slide');
    const pagination = document.querySelector('.swiper__pagination');
    let counter = 0;
    let x1 = 0;
    let x2 = 0;
    slide[counter].classList.add('active');
    for(let i = 0; i < slide.length; i++){
        pagination.append(document.createElement('span'));
    }
    pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';

    //атопрокрутка слайдера при старте
    let slide_swipe = setInterval(() => {
        slide[counter].classList.remove('active');
        pagination.querySelectorAll('span')[counter].style.backgroundColor = '#fff';
        counter++;
        if(counter > slide.length - 1){
            counter = 0;
        }
        slide[counter].classList.add('active');
        pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';
    } , 10000);

    //свайп
    for(let i = 0; i < slide.length; ++i){
        slide[i].addEventListener('touchstart' , function(event){
            x1 = event.touches[0].clientX;
            x2 = event.touches[0].clientX;
            slide[i].addEventListener('touchmove' , function(event){
                x2 = event.touches[0].clientX;
            })
        });
        slide[i].addEventListener('touchend' , function(event){
            if(x2 - x1 > 50){
                slide[counter].classList.remove('active');
                pagination.querySelectorAll('span')[counter].style.backgroundColor = '#fff';
                counter--;
                if(counter < 0){
                    counter = slide.length - 1;
                }
                slide[counter].classList.add('active');
                pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';
                /////////////////////////
                clearInterval(slide_swipe);
                slide_swipe = setInterval(() => {
                    slide[counter].classList.remove('active');
                    pagination.querySelectorAll('span')[counter].style.backgroundColor = '#fff';
                    counter++;
                    if(counter > slide.length - 1){
                        counter = 0;
                    }
                    slide[counter].classList.add('active');
                    pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';
                } , 10000)
            }
            else if(x2 - x1 < -50){
                slide[counter].classList.remove('active');
                pagination.querySelectorAll('span')[counter].style.backgroundColor = '#fff';
                counter++;
                if(counter > slide.length - 1){
                    counter = 0;
                }
                slide[counter].classList.add('active');
                pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';
                ////////////////////////////////
                clearInterval(slide_swipe);
                slide_swipe = setInterval(() => {
                    slide[counter].classList.remove('active');
                    pagination.querySelectorAll('span')[counter].style.backgroundColor = '#fff';
                    counter++;
                    if(counter > slide.length - 1){
                        counter = 0;
                    }
                    slide[counter].classList.add('active');
                    pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';
                } , 10000)
            }
        });
    }

    //pagination переключатели
    for(let i = 0; i < pagination.querySelectorAll('span').length ; ++i){
        pagination.querySelectorAll('span')[i].addEventListener('click' , function(){
            for(let i of pagination.querySelectorAll('span')){
                i.style.backgroundColor = '#fff';
            }
            pagination.querySelectorAll('span')[i].style.backgroundColor = 'red';
            slide[counter].classList.remove('active');
            counter = i;
            slide[counter].classList.add('active');
            clearInterval(slide_swipe);
            slide_swipe = setInterval(() => {
                slide[counter].classList.remove('active');
                pagination.querySelectorAll('span')[counter].style.backgroundColor = '#fff';
                counter++;
                if(counter > slide.length - 1){
                    counter = 0;
                }
                slide[counter].classList.add('active');
                pagination.querySelectorAll('span')[counter].style.backgroundColor = 'red';
            } , 10000)
        })
    }
    
} , false)
