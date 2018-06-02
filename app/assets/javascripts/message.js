$(function() {
  function buildHTML(contents){
    var message = $(`<div class="message">`)
    var UpperMes = $(`<div class="upper-message">`)
    var name = $(`<div class="upper-message__user-name">`).append(contents.name)
    var date = $(`<div class="upper-message__date">`).append(contents.created_at)
    UpperMes.append(name).append(date)
    var LowerMes = $(`<div class="lower-message">`)
    var note =$(`<p class="lower-message__content">`)
    var img = $(`<img class="lower-message__image">`)
    LowerMes = (
        (contents.image)
      ? (LowerMes.append(note).append(img.attr("src",contents.image)))
      : (LowerMes.append(note.append(contents.text)))
      );
    message.append(UpperMes).append(LowerMes)
    return message;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $('#new_message').attr('action')
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
      $('.messages').append(html)
      $('.form__submit ').attr('disabled',false)
      $('#new_message')[0].reset();
      $('.messages').animate({scrollTop: 10**7});
    })
    .fail(function(){
      alert('error');
      $('.form__submit').attr('disabled',false);
    })
  });
});
