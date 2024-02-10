import '../scss/style.scss';

const {clientHeight} = document.querySelector('.header');

document.body.style.marginTop = `-${clientHeight+1}px`;