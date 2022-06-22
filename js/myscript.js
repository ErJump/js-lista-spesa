const shoppingList = ['cioccolato', 'gelato', 'pane', 'latte', 'biscotti', 'formaggio'];

let i = 0;

while (i < shoppingList.length){
    const shoppingElement = document.createElement('li');
    shoppingElement.innerHTML = shoppingList[i];
    document.getElementById('shopping-list').append(shoppingElement);
    i++;
    shoppingElement.addEventListener('click',function(){
        shoppingElement.setAttribute('style', 'text-decoration:line-through;');
    })
}