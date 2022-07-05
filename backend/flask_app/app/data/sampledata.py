from datetime import datetime

# ユーザーデータサンプル
sampleusers = [
    { "user_name" : "山田長政", "password" : "test1"},
    { "user_name" : "浅井長政", "password" : "test2"},
    { "user_name" : "滝廉太郎", "password" : "test3"},
]

# リザルトサンプル
sampleresults = [
    { "user_id" : 1, "accuracy_value" : 98.2, "wpm" : 100.9, "playd_at_date" : datetime(2022,6,10,12,34,56,1230)},
    { "user_id" : 2, "accuracy_value" : 97.4, "wpm" : 117.2, "playd_at_date" : datetime(2022,6,11,12,34,56,1230)},
    { "user_id" : 3, "accuracy_value" : 96.3, "wpm" : 105.3, "playd_at_date" : datetime(2022,6,12,12,34,56,1230)},
]