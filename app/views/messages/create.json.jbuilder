  json.name @message.user.name
  json.text @message.text
  json.created_at (@message.created_at).to_s
  json.image @message.image.url
