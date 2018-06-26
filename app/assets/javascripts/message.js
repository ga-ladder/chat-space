$(function() {
  function buildHTML(message){
    var image_html =``;
    if(message.image){
      image_html = `<img class="lower-message__image" src="${message.image}">`;
    }
    var html = `
      <div class="message" id="${message.id}">
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

  function scroll(){
    $('html, body').animate({scrollTop: $('.messages').height()});
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
      scroll()
    })
    .fail(function(){
      alert('error');
      $('.form__submit').attr('disabled',false);
    })
  });

  function update(){
    var lastMessageId = Number($('.message:last').attr('id'));
    $.ajax({
      url: location.href,
      type: "GET",
      data: { id: lastMessageId },
      dataType: 'json'
    })
    .done(function(data){
      data.messages.forEach(function(message) {
        var html = buildHTML(message);
        $('.messages').append(html);
        scroll()
      });
    })
    .fail(function(data){
      alert('メッセージの更新ができませんでした')
    })
  }
  $(window).bind("load",function(){
    if(document.URL.match(/messages/) && document.URL.match(/groups/)) {
        setInterval(update,5000);
    }
  })
});
