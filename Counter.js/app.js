const count = document.querySelector('.count');
const sub = document.querySelector('.sub');
const add = document.querySelector('.add');
const Reset = document.querySelector('.Reset');



let counter = 0;

sub.addEventListener('click', () => {

    if (counter > 0) {
         counter--;
    count.innerHTML = counter;

    }

   
});


add.addEventListener('click', ()=> {
    counter++;
    count.innerHTML = counter;

});


Reset.addEventListener('click', ()=> {
    counter = 0;
    count.innerHTML = counter;

});

