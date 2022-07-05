# evolution-quest

## db作成
`python3` or `python`
Python対話モードとなったら
```python
>>> from app import db
>>> db.create_all()
```

※Migrationを導入した場合は不要

## CloudFomationによるVPC作成コマンド
パブリック・プライベートサブネットが2AZにまたがる可用性のある一般的なVPC構成

VPCレイヤーの構造を記載したCloudFomationのYMLファイル
vpc.yml

変数を格納しているコンフィグファイル
dev.cfg

### upしていません
dev.cfgファイルが必要となるので寺に問い合わせてください。

上記2つのファイルが同じディレクトリにあることを確認後下記コマンドを実施（aws cli必須）

```bash
aws cloudformation deploy --template-file vpc.yml --stack-name hack5-app --parameter-overrides $(cat dev.cfg) --capabilities CAPABILITY_NAMED_IAM --no-execute-changeset
```

## Gitブランチライフサイクルチートコード

```bash
# リモートdevelopブランチから最新の環境をpullする
git pull origin develop

# 新たにブランチを切る#numberはissue番号
git checkout -b feature/#number

# インデックス（add）・ステージング（commit）した後
git push origin feature/#number

# 完了したfeatureブランチは削除する
git branch -D feature/#number

# 以降繰り返し
```

## 【開発・検証時のみ】json.server起動
`/front/React`に移動し、

```bash
#Mac, Linux
npm run json-server
#Windows
npm run windows-json-server
```
※Windowsで実行する場合、当該フォルダに`cross-env`が必要となります
```bash
npm install --save cross-env
```