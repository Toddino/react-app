import { TNews } from "../types/news";
import { client, urls } from "./net";

export async function fetchNewsAPI() {
    const url = new URL(urls.news())
    const resp = await client.get<Array<TNews>>(url)
    return new Promise<{ data: Array<TNews> }>((resolve) =>
        resolve({ data: resp })
    );
}