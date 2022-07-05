from cmath import log
from flask import Blueprint, request, jsonify
from model import Result, app

import datetime

JST = datetime.timezone(datetime.timedelta(hours=+9))

app.config['JSON_AS_ASCII'] = False

record_module = Blueprint("record_module", __name__,url_prefix="/record")


#直近の5日分出力
@record_module.route("/<user_id>",methods=["GET"])
def get_my_result(user_id):
        users = Result.query.filter_by(user_id=user_id).all()
        my_data = [
            {
                "user_name":i.users.user_name,
                "user_id":i.user_id,
                "accuracy":i.accuracy_value,
                "wpm":i.wpm,
                "played_at_date":i.played_at_date
            }
            for i in users
        ]
        print(my_data)
        if len(my_data) > 5:
            sortedData = sorted(my_data, key=lambda x: x['played_at_date'],reverse=True)[0:5]
        else:
            sortedData = my_data
        return jsonify(sortedData)