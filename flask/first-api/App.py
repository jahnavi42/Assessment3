import json
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required, JWTManager

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = 'jahnavi'
api = Api(app)
CORS(app)

jwt = JWTManager(app)


users = []
orders=[]


class Item():
    def __init__(self, username,itemname, itemdesc) -> None:
        self.username=username
        self.itemname=itemname
        self.itemdesc=itemdesc

    def convertToDict(self):
        return {'id': self.username, 'name': self.itemname, 'price': self.itemdesc}

class Order():
    def __init__(self, username: str) -> None:
        self.username = username
        self.items=[]

    def addItem(self, item: Item):
        foundItems = next(filter(lambda x: x.id == item.id,orders), None)
        if foundItems is not None:
            return {'message': 'Item already exists'}
        else:
            self.items.append(item)
    def convertToDict(self):
        res = {'name': self.username,
               'items': [item.convertToDict() for item in self.items]}
        return {'message': res}


class StoreDataApi(Resource):
    def post(self):
        username = request.json.get("username", None)
        exists = next(filter(lambda x: x.username == username, orders), None)
        if exists is not None:
            token = create_access_token(identity={'username': username,"data":[order.convertToDict() for order in orders]})
            return {"data": token}, 200
        else:
            return {"message": "user not place any order"}, 400

    def put(self):
        username = request.json.get("username", None)
        itemname = request.json.get("itemname", None)
        itemdesc = request.json.get("itemdesc", None)
        res = next(filter(lambda x: x.username == username, orders), None)
        if res is None:
            return {"msg": "User is not authenicated"}
        else:
            itemObj = Item(username, itemname, itemdesc)
            res.items.append(itemObj)
            return {'message': 'Order place'}
        return {'message': 'Done'}

    def delete(self):
        username = request.json.get("username", None)
        itemname = request.json.get("itemname", None)
        res1 = next(filter(lambda x: x.username == username, orders), None)
        if res1 is not None:
            res2 = next(filter(lambda x: x.itemname == itemname, res1.items), None)
            if res2 is not None:
                res1.items.remove(res2)

class UserAuth(Resource):
    def post(self):
        username = request.json.get("username", None)
        password = request.json.get("password", None)
        exists = next(filter(lambda x: x['username'] == username, users), None)
        if exists is not None:
            if exists['username'] == username and exists['password'] == password:
                token = create_access_token(
                    identity={'username': username,"password":password})
                return {"data": token}, 200
            else:
                return {"message": "Invalid Password"}, 400
        else:
            return {"message": "user not found"}, 400

    def put(self):
        name = request.json.get("name", None)
        username = request.json.get("username", None)
        password = request.json.get("password", None)
        address = request.json.get("address", None)
        contact = request.json.get("contact", None)
        exists = next(filter(lambda x: x['username'] == username, users), None)
        if exists is not None:
            return {"message": "Similar user already exists"}, 400
        users.append(
            {"name": name, "username": username, "password": password, "address": address, "contact": contact })
        orders.append(Order(username))
        return {'message': "done"}

api.add_resource(UserAuth, '/user')
api.add_resource(StoreDataApi, '/storeItem')
app.run(debug=True, port=5000)
