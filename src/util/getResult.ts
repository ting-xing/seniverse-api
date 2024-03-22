import {AxiosResponse} from "axios";

/**
 * 从 axios 响应中提取 result
 * @param response
 */
export function getResult<T extends { results: Array<any> }>(response: AxiosResponse<T>): NonNullable<T['results']>[number] {
    if (response.data.results.length > 0) {
        return response.data.results[0]
    } else {
        throw new Error();
    }
}