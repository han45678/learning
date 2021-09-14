<template>
  <footer>
    <div id="menu">
      <ul>
        <li v-for="(item, index) in menu" :key="index" @click="not_open(index)">
          <router-link :to="item.link">
            <img :src="item.img" alt="icon" />
            <span>{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
      <div class="background">
        <div class="left" />
        <div class="right" />
      </div>
    </div>
    <div id="helper" v-if="$store.state.helper">
      <div id="dialogue">小幫手尚未開放喔~</div>
      <svg v-html="helper_svg" :xmlns="w3_svg" :viewBox="helper_svg_viewBox" />
    </div>
  </footer>
</template>

<script>
// import('@/assets/images/menu/books.svg');
export default {
  data() {
    return {
      w3_svg: "http://www.w3.org/2000/svg",
      helper_svg_viewBox: "0 0 160.95 98.9",
      helper_svg:
        '<g data-name="helper"><path class="cls-1"d="M31.6,72.43s2.55-18.19,10.94-23.52l-12-9.36S17.52,52,15.82,69.37Z"/><path class="cls-2"d="M31.6,72.43s2.55-18.19,10.94-23.52l-12-9.36S17.52,52,15.82,69.37Z"/><path class="cls-3"d="M57.69,31s-24.58-8-29.32,5.63,9.47,19.85,14.51,20.44S57.69,31,57.69,31"/><path class="cls-4"d="M57.69,31s-24.58-8-29.32,5.63,9.47,19.85,14.51,20.44S57.69,31,57.69,31Z"/><path class="cls-5"d="M27.15,78.32s7.72,8,4.51,11.9-4.83,2.25-4.83,2.25-1,7.08-6.75,4.18c0,0-3.54,3.86-7.08-1,0,0-5.79,1-6.75-2.89,0,0-5.47,1-5.47-3.54a21.66,21.66,0,0,1,10-17.37c7.72-5.15,16.4,6.43,16.4,6.43"/><path class="cls-2"d="M27.15,78.32s7.72,8,4.51,11.9-4.83,2.25-4.83,2.25-1,7.08-6.75,4.18c0,0-3.54,3.86-7.08-1,0,0-5.79,1-6.75-2.89,0,0-5.47,1-5.47-3.54a21.66,21.66,0,0,1,10-17.37C18.47,66.74,27.15,78.32,27.15,78.32Z"/><path class="cls-3"d="M30.37,80.89S41,59,27.47,54.2,6.89,72.53,6.89,72.53s1.93,10.62,23.48,8.36"/><path class="cls-4"d="M30.37,80.89S41,59,27.47,54.2,6.89,72.53,6.89,72.53,8.82,83.15,30.37,80.89Z"/><path class="cls-1"d="M129.35,72.43s-2.55-18.19-10.94-23.52l12-9.36s13,12.4,14.68,29.82Z"/><path class="cls-2"d="M129.35,72.43s-2.55-18.19-10.94-23.52l12-9.36s13,12.4,14.68,29.82Z"/><path class="cls-3"d="M103.26,31s24.58-8,29.32,5.63-9.47,19.85-14.51,20.44S103.26,31,103.26,31"/><path class="cls-4"d="M103.26,31s24.58-8,29.32,5.63-9.47,19.85-14.51,20.44S103.26,31,103.26,31Z"/><path class="cls-5"d="M114.31,19.83l5.9-17L104.92,9.1a34.9,34.9,0,0,0-45.23,0L44.39,2.85l5.91,17a52.78,52.78,0,0,0-7.83,28.05c0,.39,0,.79,0,1.18h79.65c0-.39,0-.79,0-1.18a52.78,52.78,0,0,0-7.83-28.05"/><path class="cls-2"d="M114.31,19.83l5.9-17L104.92,9.1a34.9,34.9,0,0,0-45.23,0L44.39,2.85l5.91,17a52.78,52.78,0,0,0-7.83,28.05c0,.39,0,.79,0,1.18h79.65c0-.39,0-.79,0-1.18A52.78,52.78,0,0,0,114.31,19.83Z"/><polygon class="cls-6"points="107.92 11.15 112.07 15.59 114.44 8.63 107.92 11.15"/><polygon class="cls-6"points="56.68 11.15 52.54 15.59 50.17 8.63 56.68 11.15"/><path class="cls-7"d="M55,30.3s.55,12.09,15.25,9.75a77.13,77.13,0,0,1,26,.14s12.22,3.16,13.46-10.3S97.29,10,81.76,10,53.61,17.39,55,30.3"/><path class="cls-8"d="M55,30.3s.55,12.09,15.25,9.75a77.13,77.13,0,0,1,26,.14s12.22,3.16,13.46-10.3S97.29,10,81.76,10,53.61,17.39,55,30.3Z"/><path class="cls-9"d="M104.84,24.13a6.72,6.72,0,1,1-6.71-6.71A6.7,6.7,0,0,1,104.84,24.13Z"/><path class="cls-10"d="M101.58,24.13a3.46,3.46,0,1,1-3.45-3.45,3.45,3.45,0,0,1,3.45,3.45"/><path class="cls-9"d="M74.43,24.13a6.71,6.71,0,1,1-6.71-6.71A6.7,6.7,0,0,1,74.43,24.13Z"/><path class="cls-10"d="M71.18,24.13a3.46,3.46,0,1,1-3.46-3.45,3.46,3.46,0,0,1,3.46,3.45"/><path class="cls-11"d="M75.86,32.93s1.45,2.41,6.6,2.41,6-2.57,6-2.57"/><path class="cls-3"d="M108.59,56.37H54.69L43.13,66.94c.79,7.7,2.92,15.87,8.06,20,11.3,9,31.21,8.24,31.21,8.24s27.19,0,34.47-13a41.34,41.34,0,0,0,4.41-14.34l-.44,0Z"/><path class="cls-4"d="M108.59,56.37H54.69L43.13,66.94c.79,7.7,2.92,15.87,8.06,20,11.3,9,31.21,8.24,31.21,8.24s27.19,0,34.47-13a41.34,41.34,0,0,0,4.41-14.34l-.44,0Z"/><path class="cls-12"d="M121.47,48.79s-77.85-.09-78.33.39a93.63,93.63,0,0,0,0,17.76L54.69,56.37h53.9l12.25,11.45.44,0a79.7,79.7,0,0,0,.19-19"/><path class="cls-13"d="M121.47,48.79s-77.85-.09-78.33.39a93.63,93.63,0,0,0,0,17.76L54.69,56.37h53.9l12.25,11.45.44,0A79.7,79.7,0,0,0,121.47,48.79Z"/><path class="cls-5"d="M133.8,78.32s-7.72,8-4.5,11.9,4.82,2.25,4.82,2.25,1,7.08,6.75,4.18c0,0,3.54,3.86,7.08-1,0,0,5.79,1,6.75-2.89,0,0,5.47,1,5.47-3.54a21.66,21.66,0,0,0-10-17.37c-7.72-5.15-16.4,6.43-16.4,6.43"/><path class="cls-2"d="M133.8,78.32s-7.72,8-4.5,11.9,4.82,2.25,4.82,2.25,1,7.08,6.75,4.18c0,0,3.54,3.86,7.08-1,0,0,5.79,1,6.75-2.89,0,0,5.47,1,5.47-3.54a21.66,21.66,0,0,0-10-17.37C142.48,66.74,133.8,78.32,133.8,78.32Z"/><path class="cls-3"d="M130.58,80.89S120,59,133.48,54.2s20.58,18.33,20.58,18.33-1.93,10.62-23.48,8.36"/><path class="cls-4"d="M130.58,80.89S120,59,133.48,54.2s20.58,18.33,20.58,18.33S152.13,83.15,130.58,80.89Z"/></g>',
      menu: [
        {
          link: "/",
          img: "/images/menu/books.svg",
          text: "Books",
        },
        {
          link: "/records",
          img: "/images/menu/records.svg",
          text: "records",
        },
        {
          link: "/theater",
          img: "/images/menu/theater.svg",
          text: "theater",
        },
        {
          link: "/playground",
          img: "/images/menu/playground.svg",
          text: "playground",
        },
        {
          link: "settings",
          img: "/images/menu/settings.svg",
          text: "settings",
        },
        {
          link: "",
          img: "/images/menu/point.svg",
          text: "point",
        },
        {
          link: "",
          img: "/images/menu/danny.svg",
          text: "danny",
        },
      ],
    };
  },
  methods: {
    not_open(index) {
      if (this.menu[index].link === "") {
        this.$swal("抱歉!", "此功能尚未開放", "error");
      } else {
        let r = this.menu[index].link;
        this.$router.push(r);
      }
    },
  },
};
</script>
<style scoped lang="scss">
#dialogue {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  width: 150px;
  left: -90%;
  top: -80%;
  text-align: center;
  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    transform: rotate(45deg);
    bottom: -7.5px;
    right: 15px;
  }
}
footer #menu ul{
  margin-bottom: 0;
}
</style>

    