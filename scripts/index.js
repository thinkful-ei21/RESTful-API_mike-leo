/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

console.log(api.BASE_URL);

api.createItem('grapes', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});
