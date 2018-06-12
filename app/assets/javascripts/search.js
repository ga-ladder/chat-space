$(function() {
  var search_list = $("#user-search-result");
  function appendUser(user) {
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
    </div>`
    search_list.append(html);
  }
  function appendNoUser(message) {
    var html = `
    <div class="chat-group-users">
      <div class="chat-group-user-22 chat-group-user.clearfix">
        <div class ="list-view">${message}</div>
      </div>
    </div>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/groups/new',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      if (input == "") {
      }
      else if (users.length !== 0) {
         users.forEach(function(user){
           appendUser(user);
         });
       }
       else {
         appendNoUser("一致するユーザーはいません。");
      }
    })
    .fail(function() {
      alert('検索に失敗しました。');
    })
  });

  var added = $('#chat-group-user-8');
  function AddedUser(user_id, user_name){
    var html = `
      <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
        <input name='group[user_ids][]' type='hidden' value='${user_id}'>
        <p class='chat-group-user__name'>${user_name}</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
      </div>`
    added.append(html);
  }
//追加をclick => addedUser << users.pop(a_user)
  $(document).on('click','.chat-group-user__btn--add', function(e) {
    $(this).parent().remove();
    user_id = $(this).data('user-id');
    user_name = $(this).data('user-name');
    AddedUser(user_id,user_name);
  })
  $(document).on('click','.js-remove-btn', function() {
    console.log(this)
    $(this).parent().remove();
  })
});
