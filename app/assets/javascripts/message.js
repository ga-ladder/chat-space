$(function() {
  function buildHTML(message){
    var image_html =``;
    if(message.image){
      image_html = `<img class="lower-message__image" src="${message.image}">`;
    }
    var html = `
      <div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">${message.name}</div>
          <div class="upper-message__date">${message.created_at}</div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">${message.text}</p>
          ${image_html}
        </div>
      </div>`
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $('#new_message').attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__submit ').attr('disabled',false);
      $('#new_message')[0].reset();
      $('html, body').animate({scrollTop: $('.messages').height()});
    })
    .fail(function(){
      alert('error');
      $('.form__submit').attr('disabled',false);
    })
  });
});
