import {getResult, SeniverseApi} from "../src";
import dotenv from 'dotenv'

dotenv.config()

if (!process.env.SeniversePrivateKey) {
    throw new Error("请创建 .env 文件，并添加 SeniversePrivateKey 键! 如何获取 SeniversePrivateKey? https://seniverse.yuque.com/hyper_data/api_v3/gc03wk");
}

const seniverseApi = new SeniverseApi(process.env.SeniversePrivateKey);


describe('心知天气', () => {
    test('实时天气', async () => {
        const result = await seniverseApi.getWeatherFacts().then(getResult);


        expect(result.location.id).not.toBeNull();
    });

    test('逐日天气预报', async () => {
        const result = await seniverseApi.getDailyWeatherForecast().then(getResult);


        expect(result.location.id).not.toBeNull();
    });


    test('生活指数', async () => {
        const result = await seniverseApi.getIndexOfLife().then(getResult);

        expect(result.location.id).not.toBeNull();
    });

});
