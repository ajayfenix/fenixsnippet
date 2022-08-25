$.each( $(".CartItem-properties"), function( index, value ) {
  if( $(value).find('.CartItem-propertyTitle').text().trim() == "_fenixData"){
    $(value).hide();    
  }
});
