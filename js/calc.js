const calcResult = document.querySelector('.calc__result');
let calcPrice = calcResult.querySelector('p');
const calc = () =>{
    let calcWidth = document.querySelector('.calc__width').value;
    let calcHeight = document.querySelector('.calc__height').value;
    let calcMaterial = document.querySelector('.calc__material').value;
    if(calcWidth == '' || calcHeight == '' || calcMaterial == ''){
        calcPrice.innerText = ``
        calcResult.querySelector('span').innerText = `Пожалуйста заполните поля ввода правильно`
        calcResult.style.color = 'red'
    }
    else{
        calcPrice.innerText = `${(+calcWidth + +calcHeight) * 200} руб`
        calcResult.querySelector('span').innerText = `Минимальная сумма вашего заказа составит от`
        calcResult.style.color = 'black'
    }
}