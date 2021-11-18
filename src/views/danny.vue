<template>
  <transition
    type="transition"
    name="fade"
    enter-active-class="animated swing fade-enter-active"
    leave-active-class="animated bounce fade-leave-active"
  >
    <div id="game_levels">
      <VueLoading />

      <VueHeader />

      <transition
        type="transition"
        name="fade"
        enter-active-class="animated swing fade-enter-active"
        leave-active-class="animated bounce fade-leave-active"
      >
        <main>
          <img src="images/danny.jpg" alt="img" />
        </main>
      </transition>

      <VueFooter />
    </div>
  </transition>
</template>

<script>
import VueLoading from "./include/loading";
import VueHeader from "./include/header";
import VueFooter from "./include/footer";

export default {
  components: {
    VueLoading,
    VueHeader,
    VueFooter,
  },
  data() {
    return {};
  },
  async created() {
    await this.loading();
  },
  methods: {
    loading() {
      this.$store.state.isLoading = true;
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
img {
  max-height: 810px;
  padding: 0;
  margin: auto;
  display: block;
}
</style>