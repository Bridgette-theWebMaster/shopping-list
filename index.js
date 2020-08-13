//allow additions to grocery list
$('#js-shopping-list-form').on('submit', function(event){  
    event.preventDefault();
    
    const userTextElement = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li>' + 
        '<span class="shopping-item">' + userTextElement + '</span>' +
        '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
            '</button>' +
            '<button class= "shopping-item-delete"' +
                '<span class= "button-label">delete</span>' +
        '</div>' + 
        '</li>');
    this.reset();    
});

//activate check button
function checkUncheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  }
$(checkUncheck());

  //activate delete button
function deleteItem() {
    $('.shopping-list').on("click", ".shopping-item-delete", function(event) {
        $(this).closest('li').remove();
    });
}
$(deleteItem());
