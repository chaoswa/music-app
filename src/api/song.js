import jsonp from '../common/js/jsonp'
import { commonParams} from "./config"
import axios from 'axios'

export function getLyric(mid){
    const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';
    const data=Object.assign({},commonParams,{
        songmid:mid,
        pcachetime:+new Date(),
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
    })
    
    return jsonp(url, data)
    // return axios.get(url,{
    //     params:data
    // }).then((res)=>{
    //     return Promise.resolve(res.data);
    // })
}