// let parent = document.querySelector('.flex');
// for (var i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i]);
//   }
let parent = document.querySelector('.center-area');

let leftDiv = document.querySelector('.left-block');
let leftArrow = document.querySelector('.left-block img');

let rightDiv = document.querySelector('.right-block');
let rightArrow = document.querySelector('.right-block img');

let leftPosition = true;
leftDiv.addEventListener('click', (event) => {
    if(leftPosition) {
        parent.insertAdjacentElement('afterEnd', leftDiv);
        leftArrow.src = "./img/left-arrow.svg";
        leftPosition = false;
    } else if (!leftPosition) {
        parent.insertAdjacentElement('beforebegin', leftDiv);
        leftArrow.src = "./img/right-arrow.svg";
        leftPosition = true;
    }
});

let rightPosition = true;
rightDiv.addEventListener('click', (event) => {
    if(rightPosition) {
        parent.insertAdjacentElement('beforebegin', rightDiv);
        rightArrow.src = "./img/right-arrow.svg";
        rightPosition = false;
    } else if (!rightPosition) {
        parent.insertAdjacentElement('afterEnd', rightDiv);
        rightArrow.src = "./img/left-arrow.svg";
        rightPosition = true;
    }
})
