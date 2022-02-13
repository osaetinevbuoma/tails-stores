from server.tails_stores.stores.services.search_service import read_json_file, search_stores


def test_read_json_file():
    data = read_json_file()
    assert len(data) > 0
    assert data[0]["name"] == "St_Albans"
    assert data[0]["postcode"] == "AL1 2RJ"


def test_search_stores_without_query():
    result = search_stores()
    assert len(result) == 3
    assert result[0]["name"] == "St_Albans"
    assert result[0]["postcode"] == "AL1 2RJ"


def test_search_stores_with_query():
    result = search_stores(query="br")
    assert len(result) == 3
    assert result[0]["name"] == "Orpington"
    assert result[0]["postcode"] == "BR5 3RP"


def test_search_stores_with_query_and_pagination():
    result = search_stores(page=2, query="br")
    assert len(result) == 2
    assert result[0]["name"] == "Tunbridge_Wells"
    assert result[0]["postcode"] == "TN2 3FB"
