import { debounce } from "lodash";
import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useState
} from "react";
import Layout from "./components/Layout";
import StoreBox from "./components/search/StoreBox";
import SuggestionBlock from "./components/search/SuggestionBlock";
import IStore from "./interface/IStore";
import SearchService from "./services/SearchService";

function App() {
  const [stores, setStores] = useState<IStore[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuggestionMode, setIsSuggestionMode] = useState<boolean>(false);

  useEffect(() => {
    if (query !== "" && query.length >= 2) debounceFetchStores(page, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    setQuery(query);
  };

  const debounceFetchStores = useMemo(
    () => debounce(async (page, query) => {
      try {
        const results = await SearchService.searchStores(page, query);
        const data: IStore[] = [...stores, ...(results as IStore[])] as IStore[];
        // const data = stores;
        // (results as IStore[]).forEach(store => {
        //   if (!stores.includes(store)) data.push(store);
        // });
        setStores(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }, 100),
    [stores]
  );

  const handleSuggestionClick = (name: string): void => {
    setStores([]);
    setQuery(name);
  }

  const loadMoreStores = (): void => {
    setIsLoading(true);
    setIsSuggestionMode(false);
    setPage(page + 1);
  };

  const reset = (): void => {
    setStores([]);
    setQuery("");
    setPage(1);
    setIsLoading(false);
    setIsSuggestionMode(false);
  };

  return (
    <Layout>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="panel">
            <div className="panel-block">
              <p className="block control has-icons-left has-icons-right">
                <input
                  type="text"
                  className="input"
                  placeholder="Search Store Name or Postcode"
                  value={query}
                  onChange={handleSearch}
                />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>

                {query.length >= 2 && (
                  <span className="icon is-right">
                    <button className="delete" onClick={reset}></button>
                  </span>
                )}
              </p>
            </div>

            {stores.map((store: IStore, index: number) => (
              <SuggestionBlock
                key={index}
                store={store}
                handleSuggestionClick={handleSuggestionClick}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="columns is-multiline">
        {stores.map((store: IStore, index: number) => (
          <StoreBox key={index} store={store} />
        ))}
      </div>

      {stores.length > 0 && (
        <div className="columns is-centered">
          <div className="column is-half">
            <button
              className={`button is-primary is-fullwidth ${isLoading && "is-loading"}`}
              onClick={loadMoreStores}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
