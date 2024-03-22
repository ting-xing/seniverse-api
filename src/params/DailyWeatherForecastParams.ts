import {WeatherNowParams} from "./WeatherNowParams";

export interface DailyWeatherForecastParams extends WeatherNowParams {
    /**
     * 起始时间
     * @see https://seniverse.yuque.com/hyper_data/api_v3/bwi8100zvwl0koau#LuNYr
     * @description 默认值为0
     */
    start: number | string | 0 | 1 | -1 | -2,
    /**
     * 天数
     * @see https://seniverse.yuque.com/hyper_data/api_v3/sl6gvt?
     * @description 权限允许的最多天数(免费用户只返回 3 天天气预报,最多15天)
     */
    days?: number | string
}