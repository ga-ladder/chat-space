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
- has_many :messages
- has_many :groups_users
- has_many :groups, through: groups_users

## groups table
| column  | Type    | Options   |
| :------ | :------ | :-------- |
| name    | string  |null: false|

### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: groups_users


## groups_users table (中間テーブル)
| user_id  | references | null:false, foreign_key: true |
| group_id | references | null:false, foreign_key: true |

### Association
- belongs_to user
- belongs_to group

## messages table
| column   | Type    | Options    |
| :------- | :------ |:---------- |
| text     | text    ||
| image    | string  ||
| user_id  | references | null:false, foreign_key: true |
| group_id | references | null:false, foreign_key: true |

### Association
- belongs_to user
- belongs_to group


***
***
