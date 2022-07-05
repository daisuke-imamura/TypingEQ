from flask import Blueprint, request, jsonify
from model import Result, db, app, Person
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base
from flask_cors import cross_origin
import datetime

# JST指定
JST = datetime.timezone(datetime.timedelta(hours=+9))

app.config['JSON_AS_ASCII'] = False

result_module = Blueprint("result_module", __name__,url_prefix="/result")

#ランキング1~10まで出力

@result_module.route("/1", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_join_result():
    results = db.session.query(Result, Result.accuracy_value, Result.wpm, Result.user_id, Result.played_at_date, Person.user_name, Person.user_id).join(Person,Result.user_id == Person.user_id) 
    data = [
        {
        "user_name" : i.user_name,
        "accuracy" : i.accuracy_value,
        "played_at_date": i.played_at_date,
        "wpm": i.wpm
        }
        for i in results
    ]
    return jsonify(sorted(data, key=lambda x: x['accuracy'],reverse=True)[0:10])


#ランキング11~20まで出力
@result_module.route("/2", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_join_result2():
    results = db.session.query(Result, Result.accuracy_value, Result.user_id, Person.user_name, Person.user_id).join(Person,Result.user_id == Person.user_id) 
    data = [
        {
        "user_name" : i.user_name,
        "accuracy_value" : i.accuracy_value,
        }
        for i in results
    ]
    return jsonify(sorted(data, key=lambda x: x['accuracy_value'],reverse=True)[10:20])


#ゲームの結果を登録
@result_module.route("",methods=["POST"])
# @cross_origin(supports_credentials=True)
def post_result():
    payload = request.json
    insert_data = Result(
        # result_id = payload.get("result_id"),
        user_id = payload.get("user_id"),
        accuracy_value = payload.get("accuracy_value"),
        wpm =payload.get("wpm"),
        played_at_date=payload.get("played_at_date"),
    )
    db.session.add(insert_data)
    db.session.commit()
    return payload