from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
import pprint
import json
import subprocess
import string

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

@app.route('/mysql_status', methods=['GET'])
def getMySqlStatus():
    msqlr = subprocess.Popen("sudo service mysql status".split(), stdout=subprocess.PIPE).stdout
    grep = subprocess.Popen(["grep", "active (running)"], stdin=msqlr, stdout=subprocess.PIPE).stdout
    if(grep.read() != ''):
        if grep.read().find("active (running)"):
            return "OK - MySQL is running."
        else:
            return "Not OK - MySQL is not running."
    else:
        return "Not OK - MySQL is not running."

@app.route('/mongo_status', methods=['GET'])
def getMongoDBStatus():
    msqlr = subprocess.Popen("sudo service mongod status".split(), stdout=subprocess.PIPE).stdout
    grep = subprocess.Popen(["grep", "active (running)"], stdin=msqlr, stdout=subprocess.PIPE).stdout
    if(grep.read() != ''):
        if grep.read().find("active (running)"):
            return "OK - MongoDB is running."
        else:
            return "Not OK - MongoDB is not running."
    else:
        return "Not OK - MongoDB is not running."

@app.route('/es_status', methods=['GET'])
def getESStatus():
    msqlr = subprocess.Popen("sudo service elasticsearch status".split(), stdout=subprocess.PIPE).stdout
    grep = subprocess.Popen(["grep", "active (running)"], stdin=msqlr, stdout=subprocess.PIPE).stdout
    if(grep.read() != ''):
        if grep.read().find("active (running)"):
            return "OK - ElasticSearch is running."
        else:
            return "Not OK - ElasticSearch is not running."
    else:
        return "Not OK - ElasticSearch is not running."

if __name__=='__main__':  
    app.run(host='0.0.0.0', port=5000)
