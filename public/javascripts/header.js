   
   /* fuctions button */

const Open = document.querySelector('#open');
const Close = document.querySelector('#close');
const nav = document.querySelector('#nav');
const ul = document.querySelector('ul')

Open.addEventListener('click', () => {
    nav.classList.toggle('visible')
    Close.classList.toggle('ver')

})


Close.addEventListener('click', () =>{
    nav.classList.remove('visible')
    Close.classList.remove('ver')
})