$(function(){

  $('#new-message-button').click(function(){
    add_new_message();
  });

  
});

function add_new_message(){
    // get message from #new-message-body
    const message = $('#new-message-body').val();

    // create a new li element in #conversation
    // within it, add a span, and
    // assign class message-body to the span
    // add to that span the text from message
    // insert the new_li into document, within #conversation
    const content = `<li><span class="message-body">${message}</span></li>`;
    $('#conversation').append(content);
}
