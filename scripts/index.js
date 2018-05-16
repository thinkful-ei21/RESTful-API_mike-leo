/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});


// console.log(store.items);

/* api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });


});   */