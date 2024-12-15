from flask import Flask, jsonify
from flask_cors import CORS
from gitflix import fetchRepoInfo

app = Flask(__name__)
CORS(app)



@app.route("/api/getinfo", methods=['POST'])
def getNews():
    repo_info = fetchRepoInfo()
    return jsonify(repo_info)


if __name__ == '__main__':
    # host="0.0.0.0", 
    app.run(debug=True)
