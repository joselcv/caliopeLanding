<template>
  <v-app >
    <toolbar />
          <keep-alive>
						<router-view :key="$route.fullpath" />
					</keep-alive>
    <v-content />
  </v-app>
</template>
<script>
 import toolbar from "@/components/NewToolbar.vue"
 import {mapMutations} from "vuex";

  
 export default {
   components: {
    toolbar,
  },
  data: () => ({
   
  }),
  mounted() {
    this.hiddenTolbar();
  },methods: {
   ...mapMutations(["hiddenTolbar"]),
  },
}
</script>
<style >
    .row{
      margin-left:0 !important;
      margin-right:0 !important;
      margin-bottom: 0 !important
    }
</style>