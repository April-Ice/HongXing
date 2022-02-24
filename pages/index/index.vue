<template>
  <view>
    <list>
      <!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
      <cell v-for="item in dataList" :key="item.id">
        <text>title:{{ item.title }}</text>
        <text>time:{{ item.update_at }}</text>
      </cell>
    </list>
    <uni-list>
      <uni-list-item v-for="item in dataList" :key="item.id">
       
      </uni-list-item>
    </uni-list>
  </view>
</template>
<script>
import { fetchDataList } from "./api";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      console.log("----getDataList-----");
      fetchDataList().then((res) => {
        console.log("res", res);
        this.dataList = res ? res : [];
      });
    },
  },
};
</script>

<style></style>
