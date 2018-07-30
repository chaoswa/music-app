<template>
  <div class="singer" ref="singer">
    <list-view :data="singers"  @select="selectSinger" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import {getSingerList} from '../api/singer'
import {ERR_OK} from '../api/config'
import Singer from '../common/js/singer'
import ListView from '../base/listview/listview'
import {mapMutations} from 'vuex'
import {playlistMixin} from '../common/js/mixin'

const HOT_NAME="热门";
const HOT_SINGER_LEN=10;
export default {
  mixins: [playlistMixin],
  name: 'Singer',
  props: {
  },
  data(){
    return {
      singers:[]
    }
  },
  components: {
    ListView
  },
  created(){
    this._getSingerList()
  },
  methods:{
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.singer.style.bottom = bottom
      this.$refs.list.refresh()
    },
    selectSinger(singer){
      this.$router.push({
        path:`/singer/${singer.id}`
      });
      this.setSinger(singer)
    },
    _getSingerList(){
      getSingerList().then((res)=>{
        if(res.code===ERR_OK){
          this.singers=this._normalizeSinger(res.singerList.data.singerlist);
          console.log(this._normalizeSinger(res.singerList.data.singerlist))
        }
      })
    },
    _normalizeSinger(list){
      let map={
        hot:{
          title:HOT_NAME,
          items:[]
        }
      };
      list.forEach((item,index) => {
        if(index<HOT_SINGER_LEN){
          map.hot.items.push(
            new Singer({
              id:item.singer_id,
              name:item.singer_name,
              mid:item.singer_mid
            })
          )
        }
      });
      let hot=[];
      let ret=[];
      for(let key in map){
        let val=map[key];
        hot.push(val)
      }
      return hot
    },
    ...mapMutations({
      setSinger:'SET_SINGER'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
