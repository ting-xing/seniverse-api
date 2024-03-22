export interface IndexOfLifeParams {
    /**
     * api 密钥
     */
    key: string;
    /**
     * 地点
     * @see https://seniverse.yuque.com/hyper_data/api_v3/bwi8100zvwl0koau#ElVVu
     * @description “ip”两个字母 自动识别请求 IP 地址
     */
    location: string | "ip";
    /**
     * 默认值为zh-Hans
     * @see https://seniverse.yuque.com/hyper_data/api_v3/bwi8100zvwl0koau#lBq9g
     */
    language?: string | "zh-Hans" | "en" | "zh-Hant";
}