from atexit import register
import os
from flask import Blueprint, request , jsonify, abort
from model import Person, db, app
from flask_bcrypt import generate_password_hash, check_password_hash 
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from flask_cors import cross_origin


app.config["JWT_SECRET_KEY"] = os.getenv("SECRET_KEY")
jwt = JWTManager(app)
app.config["JSON_AS_ASCII"] = False

user_module = Blueprint("user_module", __name__, url_prefix="/user")

# # すべてのリクエストに対してヘッダーをつけていく
# @app.after_request
# def after_request(response):
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     response.headers.add("Access-Control-Allow-Headers", "*")
#     response.headers.add("Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS")
#     return response

# User全てをJSONで取得
@user_module.route("")
def get_user():
    persons = Person.query.all()
    data = [
        {
            "user_id": i.user_id,
            "user_name": i.user_name,
            # "password": i.password,
        }
        for i in persons
    ]
    return jsonify(data) 
#sign-upの機能
@user_module.route("/register",methods=["POST"])
@cross_origin(supports_credentials=True)
def post_user():
    payload = request.json
    access_token = create_access_token(identity=payload.get("user_name"))
    
    insert_data = Person(
        user_name = payload.get("user_name"),
        password = generate_password_hash(payload.get("password")),
        )
    db.session.add(insert_data)
    db.session.commit()
        
    return jsonify(
            # access_token = access_token,
            user_name = insert_data.user_name,
            user_id = insert_data.user_id,
            password = payload.get("password")
            )

@user_module.route('/login',methods=["GET","POST"])
@cross_origin(supports_credentials=True)
def login_user():
    payload = request.json
    
    insert_data = Person(
        user_id = payload.get("user_id"),
        user_name = payload.get("user_name"),
        password = payload.get("password"))

    user = Person.query.filter_by(user_name=insert_data.user_name).first()
    if check_password_hash(user.password, insert_data.password):
        access_token = create_access_token(identity=user.user_name)
        
        return jsonify(
            access_token = access_token,
            user_id = user.user_id,
            user_name = user.user_name
            )
    else:
        abort(400, "nameかpass違うよ")
        # return jsonify(message = "nameかpass違うよ"), 400

# @user_module.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200
    
# 以下JWTの仕組み
# @user_module.route("/token", methods=["POST"])
# def token():
#     user_name = request.json.get("user_name")
#     password = request.json.get("password")
#     if user_name != "test" or password != "test":
#         return jsonify({"msg": "ユーザー名かパスワードが違います"}), 401

#     access_token = create_access_token(identity=user_name)
#     return jsonify(access_token=access_token)

# @user_module.route("/protected", methods=["GET"])
# @jwt_required()
# def protected():
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200