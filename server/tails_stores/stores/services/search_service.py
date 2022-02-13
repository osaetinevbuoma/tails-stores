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
    offset = (int(page) * limit) - limit

    if query is None:
        if int(page) == 1:
            return data[0:limit]
        else:
            return data[limit:]

    search_result = [store for store in data if query.lower() in store["name"].lower() or
                     query.lower() in store["postcode"].lower()]
    sorted_result = sorted(search_result, key=lambda store: (store["postcode"], store["name"]))

    if int(page) == 1:
        return sorted_result[0:limit]
    else:
        return sorted_result[offset:]
