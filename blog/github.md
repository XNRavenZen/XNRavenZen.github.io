<!-- <ClientOnly> -->
  <!-- <GitHubStarredCard :starredUrls="urls"/> -->
<keep-alive>
  <component class="card-list" :is="componentName" :starredUrls="urls"/>
</keep-alive>
<!-- </ClientOnly> -->

<script>
import {defineComponent,ref,onMounted,computed,createApp,inject} from "@vue/composition-api"
import axios from "axios";

export default defineComponent({
  setup(props,context) {
    const responseData = ref(null);
    const componentName = ref(null);
     onMounted(async () => {
      const store = context.root.$store;
      const loadingFunc = store.state.loadingFunc;
      loadingFunc();
      await axios({
        method: 'get',
        url: 'https://api.github.com/users/XNRavenZen/starred',
        responseType: 'json'
      }).then(response => {
        // 请求成功
        let res = response.data;
        console.log(res);
        responseData.value = res;
        componentName.value = "GitHubStarredCard"
        // $hideLoading()
      }).catch(error => {
        // 请求失败，
        console.log(error);
        componentName.value = "NotFound"
      }).then(()=>{
        loadingFunc(false)
      })
    })
    const urls = computed(()=>responseData.value||[]);
    return{
      // starredUrls
      urls,
      componentName
    }
  }
})
</script>
<style>
.pinned-item-list-item-content {
  margin: 16px;
  padding:4px;
  box-shadow: 2px 1px 5px 1px rgba(0,0,0,0.25);
}
</style>
