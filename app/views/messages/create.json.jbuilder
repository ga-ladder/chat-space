  json.name @message.user.name
  json.text @message.text
  json.created_at (@message.created_at).strftime('%Y/%m/%d %H:%M')
  json.image @message.image.url
