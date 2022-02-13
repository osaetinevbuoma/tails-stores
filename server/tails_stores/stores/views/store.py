from flask import Blueprint, request
from flask_cors import cross_origin

from ..services.search_service import search_stores

app = Blueprint('store', __name__)


@app.route("/fetch-stores")
@cross_origin()
def fetch_stores():
    page = request.args.get("page", 1)
    query = request.args.get("query", None)
    return {"stores": search_stores(page=page, query=query)}
