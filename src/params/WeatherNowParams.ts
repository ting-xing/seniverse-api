import {IndexOfLifeParams} from "./IndexOfLifeParams";

export interface WeatherNowParams extends IndexOfLifeParams{

    /**
     * 单位
     * 默认值为c
     * @see https://seniverse.yuque.com/hyper_data/api_v3/bwi8100zvwl0koau#VAjl6
     * @description 当参数为 c 时，温度 c、风速 km/h、能见度 km、气压 mb
     * @description 当参数为 f 时，温度 f、风速 mph、能见度 mile、气压 inch
     */
    unit?: string | "c" | "f";
}