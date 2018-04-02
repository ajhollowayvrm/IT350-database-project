from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
import pprint
import json

app = Flask(__name__)
CORS(app)
client = MongoClient('localhost', 27017)
db = client.test
blog = db.Blog


@app.route('/get_blog',methods=['GET'])
def get_all():
    items = blog.find()
    response = []
    for item in items:
        response.append(item)
    return json.dumps(response)


@app.route('/add_comment',methods=['POST'])
def add_comment():
    _id = int(request.form['id'])
    comment = request.form['comment']
    db.Blog.update(
        { "_id":_id},
        { "$push": { "comments":comment } }
    )
    return "200"

if __name__=='__main__':  
    app.run(host='0.0.0.0', port=5000)
