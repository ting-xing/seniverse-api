# 心知天气接口

使用 typescript 基于 axios 封装[心知](https://www.seniverse.com/)天气接口,适用于心知免费版。

本项目使用**私钥**的方式调用接口，[两种请求方式区别](https://seniverse.yuque.com/hyper_data/api_v3/gc03wk)

### 实现的接口

* [天气实况](https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t?)
* [逐日天气预报](https://seniverse.yuque.com/hyper_data/api_v3/sl6gvt?)
* [生活指数](https://seniverse.yuque.com/hyper_data/api_v3/qa0mpo?)

### 快速上手

[查看/修改你的API密钥](https://seniverse.yuque.com/hyper_data/api_v3/gc03wk)

```cmd
npm i @ting-xing/seniverse-api
```

```ts
import {getResult, SeniverseApi} from '@ting-xing/seniverse-api'

const seniverseApi = new SeniverseApi("S5iNvA...."); // 您的私钥

const result = await seniverseApi.getWeatherFacts().then(getResult);
// const result = await seniverseApi.getDailyWeatherForecast().then(getResult);
// const result = await seniverseApi.getIndexOfLife().then(getResult);

console.log(result)

```

> getResult 方法只是从响应中提取 result,仅此而已.

控制台将打印这些内容

```json5
{
  location: {
    id: "WTG7R0CSBHZ9",
    name: "蚌埠",
    country: "CN",
    path: "蚌埠,蚌埠,安徽,中国",
    timezone: "Asia/Shanghai",
    timezone_offset: "+08:00"
  },
  now: {
    text: "晴",
    code: "0",
    temperature: "25"
  },
  last_update: "2024-03-22T15:40:13+08:00"
}
```

### 参数定义

> 三个接口都支持无参调用

* 获取逐日天气预报 [getDailyWeatherForecast](./src/params/DailyWeatherForecastParams.ts)
* 获取生活指数 [getIndexOfLife](./src/params/IndexOfLifeParams.ts)
* 获取天气实况 [getWeatherFacts](./src/params/WeatherNowParams.ts)