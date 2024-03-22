import _axios from 'axios'
import {WeatherNowParams} from "./params/WeatherNowParams";
import {DailyWeatherForecastParams} from "./params/DailyWeatherForecastParams";
import {IndexOfLifeParams} from "./params/IndexOfLifeParams";
import {WeatherFactsResponse} from "./response/WeatherFactsResponse";
import {DailyWeatherForecastResponse} from "./response/DailyWeatherForecastResponse";
import {IndexOfLifeResponse} from "./response/IndexOfLifeResponse";

export class SeniverseApi {

    protected axios = _axios.create();

    /**
     *
     * @param privateKey 私钥
     */
    constructor(protected privateKey: string) {
    }


    protected getDefaultParams() {
        return {
            key: this.privateKey
        }
    }

    /**
     * 天气实况
     * 获取指定城市的天气实况。付费用户可获取全部数据，免费用户只返回天气现象文字、代码和气温 3 项数据。
     * @see https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t
     */
    public getWeatherFacts(params?: Omit<WeatherNowParams, 'key'>) {
        return this.axios.get<WeatherFactsResponse>("https://api.seniverse.com/v3/weather/now.json", {
            params: <WeatherNowParams>{
                ...params,
                location: 'ip',
                ...this.getDefaultParams(),
            }
        })
    }

    /**
     * 逐日天气预报
     * 获取指定城市未来最多 15 天每天的白天和夜间预报，以及昨日的历史天气。付费用户可获取全部数据，免费用户只返回 3 天天气预报。降水预报目前只支持国内城市。
     * @see https://seniverse.yuque.com/hyper_data/api_v3/sl6gvt?
     */
    public getDailyWeatherForecast(params?: Omit<DailyWeatherForecastParams, 'key'>) {
        return this.axios.get<DailyWeatherForecastResponse>("https://api.seniverse.com/v3/weather/daily.json", {
            params: <DailyWeatherForecastParams>{
                ...params,
                location: 'ip',
                ...this.getDefaultParams(),
            }
        })
    }

    /**
     * 生活指数
     * 获取指定城市的基本、交通、生活、运动、健康 5 大类共 27 项生活指数，预测至未来5天，仅支持中国城市。
     * 付费用户可获取全部数据; 免费用户只返回 6 项基本类生活指数，且只有 brief，没有 details。<br/>
     * ● 基本类：穿衣、紫外线强度、洗车、旅游、感冒、运动<br/>
     * ● 交通类：交通、路况<br/>
     * ● 生活类：晾晒、雨伞、空调开启、啤酒、逛街、夜生活、约会<br/>
     * ● 运动类：晨练、钓鱼、划船、放风筝<br/>
     * ● 健康类：过敏、美发、化妆、风寒、防晒、空气污染扩散条件、舒适度、心情
     * @see https://seniverse.yuque.com/hyper_data/api_v3/qa0mpo?
     */
    public getIndexOfLife(params?: Omit<IndexOfLifeParams, 'key'>) {
        return this.axios.get<IndexOfLifeResponse>("https://api.seniverse.com/v3/life/suggestion.json", {
            params: {
                ...params,
                location: 'ip',
                ...this.getDefaultParams(),
            }
        })
    }
}