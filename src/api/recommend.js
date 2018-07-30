import jsonp from '../common/js/jsonp'
import {commonParams,options} from "./config"
export function getRecommend(){
    const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";

    const data=Object.assign({},commonParams,{
        platform:"h5",
        uin:0,
        needNewCode:1,
        _: 1530519112958

    })

    return jsonp(url,data,options)
}

export function getSongList(dissid){
    const url="https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg";

    const data=Object.assign({},commonParams,{
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        disstid: dissid,
        format: 'jsonp',
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
    })

    return jsonp(url,data,options)
}
