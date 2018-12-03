import http from '../config/httpConfig';
const baseInfoModule = '/baseInfo'
/**获取生产环境 */
export const listProductionApi = () => {
    return http.post(baseInfoModule + '/listProduction')
}