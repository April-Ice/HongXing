<template>
  <view class="uni-padding-wrap uni-common-mt">
    <view class="uni-padding-wrap">
      <view class="uni-title uni-common-mt"> TodoList </view>
    </view>
    <view class="uni-list">
      <checkbox-group @change="checkboxChange">
        <label
          class="uni-list-cell uni-list-cell-pd"
          v-for="item in items"
          :key="item.value"
        >
          <view>
            <checkbox :value="item.value" :checked="item.checked" />
          </view>
          <view>{{ item.name }}</view>
        </label>
      </checkbox-group>

      <navigator
        url="/pages/todoList/index?title=navigate"
        hover-class="navigator-hover"
      >
        <button type="default">跳转到新页面</button>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "个人中心",
      items: [
        {
          value: "USA",
          name: "美国",
        },
        {
          value: "CHN",
          name: "中国",
          checked: "true",
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    checkboxChange: function (e) {
      let items = this.items;
      let values = e.detail.value;
      items.map((item) => {
        if (values.includes(item.value)) {
          this.$set(item, "checked", true);
        } else {
          this.$set(item, "checked", false);
        }
      });
    },
  },
};
</script>

<style>
.uni-list-cell {
  justify-content: flex-start;
}
</style>
