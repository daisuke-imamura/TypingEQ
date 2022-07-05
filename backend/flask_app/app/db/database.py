from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def init_db(app):
    db.init_app(app)
    






# from audioop import cross
# import os
# from unittest import result
# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy

# from flask_migrate import Migrate

# #SQLite用
# base_dir = os.path.dirname(__file__)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(
#     base_dir, "data.sqlite"
# )


# #MySQL用
# # app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql+pymysql://{user}:{password}@{host}:{port}/{database}?charset=utf8'.format(
# #     **{
# #       'user': os.getenv('MYSQL_USER'),
# #       'password': os.getenv('MYSQL_PASSWORD'),
# #       'host': os.getenv('MYSQL_HOST'),
# #       'port': os.getenv("MYSQL_PORT"),
# #       'database': os.getenv('MYSQL_DATABASE'),
# #     })


# db = SQLAlchemy(app)
# Migrate(app, db)


# # data.sqliteというデータベースを使うという宣言です
# engine = create_engine('sqlite:///data.sqlite')  
# # データベースのテーブルの親です
# Base = declarative_base()  

# # 実際にデータベースを構築します
# Base.metadata.create_all(engine)  
# # Pythonとデータベースの経路です
# SessionMaker = sessionmaker(bind=engine)  
# # 経路を実際に作成しました
# session = SessionMaker()  
