<script setup>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { HttpHelper } from "../HttpHelper";
import { PageHelper } from "../PageHelper";

let router = useRouter();
let route = useRoute();

let page = ref({});
PageHelper.Init(page, () => {});

var storedetail = ref({});
 
var fuwudetail=ref([]);

// 门店详情
HttpHelper.Post("store/storedetail", { id: route.query.id }).then((res) => {
  storedetail.value = res;
});
 
// 购买
var goumia=()=>{
   router.push('/Submitorder?id='+fuwudetail.value.id);
    console.log('寄哪里了---',fuwudetail,fuwudetail.id); 
}

 
 
</script>

<template>
  <div
    class=""
    v-if="page.Res!=null"
  >
  
  <div>模版</div>

  </div>
</template>
<style scoped>
 
</style>