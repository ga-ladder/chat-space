# README

# DB設計
( users table, groups table, messages table )

## users table
| Column         | Type           |Options         |
| :------------- | :------------- | :------------- |
| name           | string         | index: true, null: false, unique: true |
| email          | string         | devise         |
| password       | string         | devise         |
### Association
- has_many :groups, through: groups_users
- has_many :messages

## groups table
| column  | Type    | Options   |
| :------ | :------ | :-------- |
| id      | integer ||
| name    | string  |null: false|
### Association
- has_many :users, through: groups_users
- has_many :messages

## groups_users table (中間テーブル)
| user_id  | integer | null:false, foreign_key: true |
| group_id | integer | null:false, foreign_key: true |

- belongs_to user
- belongs_to group

## messages table
| column   | Type    | Options    |
| :------- | :------ |:---------- |
| message  | text    | null:false |
| image    | string  ||

### Association
- belongs_to user
- belongs_to group
***
***
