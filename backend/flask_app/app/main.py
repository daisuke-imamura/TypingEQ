from flask import Blueprint

main_module = Blueprint("main", __name__)

@main_module.route("/")
def index():
    return "<h1>Hello,World</h1>"