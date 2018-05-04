# README

# DB設計
( users table, groups table, messages table )

## users table
| Column         | Type           |Options         |
| :------------- | :------------- | :------------- |
| name           | string         | index: true, null: false, unique: true |
|mail            | string         | null: false    |
|password        | string         |null:false minimum 8words|
### Association
- has_many :groups, through: groups_users
- has_many :messages
- has_many :members

## groups table
| column  | Type    | Options   |
| :------ | :------ | :-------- |
| id      | integer ||
|room-name| string  |null: false|
### Association
- has_many :users, through: groups_users
- has_many :messages
- has_many :members

## messages table (中間テーブル)
| column   | Type    | Options    |
| :------- | :------ |:---------- |
| message  | text    | null:false |
|image     | string  ||
| user_id  | integer | null:false, foreign_key: true |
| group_id | integer | null:false, foreign_key: true |
### Association
- belongs_to user
- belongs_to room
***
***
