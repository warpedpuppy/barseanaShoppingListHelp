function shoppingList() {
  $("#js-shopping-list-form").submit(e => { 
    e.preventDefault();

    // capture value that is in input field

    // insert that value into the <li> element that you can find in the html page that is currently creating the list items

    // append that string to the <ul> item

    //clear the input field
  })


  // check handler
  $("body").on('click', '.shopping-item-toggle', e => {
     e.preventDefault()
    //toggleclass, addclass, removeclass-- do not use dot for class
    $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  });

  
  // delete handler
  $("body").on('click', '.shopping-item-delete', e => {
     e.preventDefault()
    // do the same thing as with the check button but delete the closest <li> element
  })

    
}



$(shoppingList);