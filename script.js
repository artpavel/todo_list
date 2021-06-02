'use strict';
/*
* Необхідно реалізувати наступний функціонал як на відео taskList, а саме:

— при кліку кнопку Додати додававляти нове завдання в список завдань

— якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про попередження:
* “Пусте поле не можна добавити”

— в списку завдань при кліку на чекбокс завдання має видалятися зі списку

— якщо залишилося 1не завдання то його не можна видалити

— якщо захочемо видалити то має вивести повідомлення у модальному вікні про попередження:
* “Останній таск зі списку Ви не можете видалити”
* */

let tasks = document.querySelector('.tasks-list'),
    newTask = document.querySelector('.task'),
    add = document.querySelector('.add'),
    count = document.querySelectorAll('.count')


add.addEventListener('click', function () {
    let value = newTask.value;
    if (value) {
        addElem(value);
    } else {
        document.querySelector('.popR').style.display = 'block';
    }
    newTask.value = '';
})
close('.icon', '.popR');

tasks.addEventListener('click', function (event) {

    if (event.target.type === 'checkbox' && event.target.checked) {
        if (tasks.childElementCount > 3) {
            tasks.removeChild((event.target.parentElement));
        }else{
            document.querySelector('.popL').style.display = 'block';
            event.target.checked = false;
         }
    }
})
document.querySelector('.icon1').addEventListener('click', function () {
    document.querySelector('.popL').style.opacity = 0;
    document.querySelector('.popL').style.display = 'none';

})

function addElem(val) {
    let newElem = `
     <div class="tasks count">
          <input type="checkbox"> <span>${val}</span>
     </div>`;
    document.querySelector('.go').insertAdjacentHTML('afterend', newElem);
}

function close(sev, sev1) {
    document.querySelector(sev).addEventListener('click', function (event) {
        document.querySelector(sev1).style.display = 'none';
    })
}