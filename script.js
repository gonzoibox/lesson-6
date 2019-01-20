const outer = document.querySelector('.outer');
const el = document.querySelector('input[name=checkbox]');

outer.addEventListener('mouseover', (event) => {
    if(el.checked) {
        console.log('checked');
        outer.classList.add('color');
    } else {
        console.log('unchecked');
    }
})

outer.addEventListener('mouseout', (event) => {
    if(el.checked) {
        console.log('checked');
        outer.classList.remove('color');
    } else {
        console.log('unchecked');
    }
})
