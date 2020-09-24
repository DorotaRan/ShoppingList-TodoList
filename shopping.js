let ul;
let newItemForm;
let shoppingList = [
    "masło",
    "chleb",
    "owoce"
]

document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById('shoppingList');
    inputError = document.getElementById('inputError');
    newItemForm = document.getElementById('newItemForm');
    
    newItemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target.elements[0];

        if (input.value.length > 2 && !input.value.startsWith (" ")){
            addListItem (input.value);
            input.value ="";
            input.classList.remove('input-danger');
            inputError.innerText = "";
        } else {
            inputError.innerText = "Nieprawidłowa nazwa produktu";
            input.classList.add('input-danger');

        }

    });

    for (let shoppingItem of shoppingList){
       addListItem(shoppingItem);
    };
});

function addListItem(shoppingItem) {
    let li = document.createElement('li');
    li.innerText = shoppingItem
    li.id = 'shoppingItem';
    ul.appendChild(li);
    console.log(li);
};




















































// let ul;
// let newItemForm;
// let formData
// let shoppingList = [
//     "Mleko",
//     "Jajka",
//     "Masło",
//     "Chleb",
// ]

// document.addEventListener('DOMContentLoaded', () => {
//     ul = document.getElementById('shoppingList');
//     newItemForm = document.getElementById('newItemForm');
//     console.log(newItemForm);

//     newItemForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         let input = event.target.elements[0]
//         addListItem(input.value);
//         input.value = "";
//     });
    
//     for (let shoppingItem of shoppingList) {
//         addListItem(shoppingItem);
//     }
// });

// function addListItem (shoppingItem) {
//     let li = document.createElement('li');
//     li.innerText = shoppingItem;
//     ul.appendChild(li);
// };





