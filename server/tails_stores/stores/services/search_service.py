import json
import os


def read_json_file():
    file = open(os.path.join(os.getcwd(), "stores.json"), "r")
    return json.loads(file.read())


def search_stores(page=1, query=None):
    """
    Query store list by filtering only values that have the query parameter as a substring of the
    store name or postcode, then sort the resulting array by the postcode and store name. Return
    only final results, 3 at a time depending on the current page passed into the function.
    :param page: the current search page
    :param query: the query parameter to search
    :return: array with queried result
    """

    data = read_json_file()
    limit = 3
    offset = (page * limit) - limit

    if query is None:
        return data[offset:offset + limit]

    search_result = [store for store in data if query in store["name"].lower() or
                     query in store["postcode"].lower()]
    sorted_result = sorted(search_result, key=lambda store: (store["postcode"], store["name"]))
    return sorted_result[offset:offset + limit]
