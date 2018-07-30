import jsonp from '../common/js/jsonp'
import { commonParams, options } from "./config"
export function getSingerList() {
    const url = "https://u.y.qq.com/cgi-bin/musicu.fcg"
    const data = Object.assign({}, commonParams, {
        callback: 'getUCGI918818210025111',
        g_tk: 5381,
        jsonpCallback: 'getUCGI918818210025111',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf - 8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        data: '{ "comm": { "ct": 24, "cv": 10000 }, "singerList": { "module": "Music.SingerListServer", "method": "get_singer_list", "param": { "area": -100, "sex": -100, "genre": -100, "index": -100, "sin": 0, "cur_page": 1 } } }'

    })

    return jsonp(url, data)
}
export function getSingerDetail(singerId) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
    const data = Object.assign({}, commonParams, {
        singerid: singerId,
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf - 8',
        outCharset: 'utf - 8',
        notice: 0,
        platform: 'h5page',
        needNewCode: 1,
        order: 'listen',
        from: 'h5',
        num: 15,
        begin: 0,
        _: 1530773740822,
    })

    return jsonp(url, data,options)
}