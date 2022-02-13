import IStore from "../../interface/IStore";
import SearchService from "../SearchService";

describe("Test search service", () => {
  test("search function with query", async () => {
    const query = "br";
    const results = await SearchService.searchStores(1, query);

    expect((results as IStore[]).length).toBe(3);
    expect((results as IStore[])[0].name).toBe("Orpington");
    expect((results as IStore[])[0].postcode).toBe("BR5 3RP");
  });

  test("search function with query and page", async () => {
    const query = "br";
    const page = 2;
    const results = await SearchService.searchStores(page, query);

    expect((results as IStore[]).length).toBe(2);
    expect((results as IStore[])[0].name).toBe("Tunbridge_Wells");
    expect((results as IStore[])[0].postcode).toBe("TN2 3FB");
  });
});
