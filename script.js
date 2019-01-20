let parent = document.querySelector('.flex');
for (var i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i]);
  }
  
let leftDiv = document.querySelector('.left-block');
let leftArrow = document.querySelector('.left-block img');

let rightDiv = document.querySelector('.right-block');
let rightArrow = document.querySelector('.right-block img');



//console.log(arrow.src);

leftDiv.addEventListener('click', (event) => {
    let elPosition = 0;
    if(!elPosition) {
        console.log('checked');
        //parent.appendChild(leftDiv);
        parent.insertAdjacentElement('afterEnd', leftDiv);
        leftArrow.src = "./img/left-arrow.svg";
        elPosition = 1;
    } else if (elPosition) {
        console.log('unchecked');
        parent.insertAdjacentElement('beforeEnd', leftDiv);
        leftArrow.src = "./img/left-arrow.svg";
        elPosition = 1;
    }
})

// rightDiv.addEventListener('click', (event) => {
//     if(true) {
//         console.log('checked');
//         parent.appendChild(rightDiv);
//         rightArrow.src = "./img/right-arrow.svg";
//     } else {
//         console.log('unchecked');
//     }
// })
