$(function(){
  function buildAddedHTML(){
    //"チャットメンバー"の下にaddedUserを追加
    var ChatMember = $('チャットメンバーのclass');
    var added_user = `added_name`
    var html = `
    <div class="chat-group-users">
      <div class="chat-group-user-22 chat-group-user clearfix">
        <input name="chat-group[user_ids][]", type="hidden", value="22">
        <p>${added_user}</p>
      </div>
    </div>
    `
    ChatMember.append(html);

  }
//追加をclick => addedUser << users.pop(a_user)
  $(document).on('click','', function() {
    //input =
    var a_user = 'user';
    console.log();
    $.ajax ({
      type: 'GET',
      url: '/groups/new',
      data: a_user,
      dataType: 'json'
        })
    .done(function(a_user) {
      Users = []
      addedUser = []
      b_user = Users.pop(a_user);
      addedUser << b_user
      buildAddedHTML(addedUser);
    })
    .fail(function(){
      alert('error')
    })
  })
  //削除をclick => users << addedUser.pop(b_user)
  $(document).on('click','', function() {
  })
});
