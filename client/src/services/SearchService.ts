import axios, { AxiosError } from "axios";
import IStore from "../interface/IStore";

const ENDPOINT = process.env.REACT_APP_SERVER_API_ENDPOINT as string;

class SearchService {
  static async searchStores(page: number = 1, query: string): Promise<IStore[] | AxiosError> {
    try {
      const response = await axios.get(`${ENDPOINT}/fetch-stores?page=${page}&query=${query}`);
      const stores: IStore[] = response.data.stores;
      
      return stores;
    } catch (error) {
      return error as AxiosError
    }
  }
}

export default SearchService;
