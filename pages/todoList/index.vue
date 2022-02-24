<template>
  <view class="uni-padding-wrap uni-common-mt">
    <!-- 标题 -->

    <uni-row class="demo-uni-row">
      <uni-col :span="16">
        <input class="uni-input" v-model="newItem" placeholder="请输入..." />
      </uni-col>
      <uni-col :span="8" class="setInnerRight">
        <view> <button type="primary" @click="addList">新增</button> </view>
      </uni-col>
    </uni-row>

    <view class="uni-list">
      <checkbox-group @change="checkboxChange">
        <label
          class="uni-list-cell uni-list-cell-pd"
          v-for="item in todoList"
          :key="item._id"
        >
          <view>
            <checkbox :value="item._id" :checked="item.checked" />
          </view>
          <view>{{ item.title }}</view>
        </label>
      </checkbox-group>
    </view>

    <view class="uni-list" style="margin-top:3em">
      <checkbox-group @change="doneboxChange">
        <label
          class="uni-list-cell uni-list-cell-pd"
          v-for="item in doneList"
          :key="item._id"
        >
          <view>
            <checkbox :value="item._id" :checked="item.checked" />
          </view>
          <view>{{ item.title }}</view>
        </label>
      </checkbox-group>
    </view>
  </view>
</template>

<script>
import {
  addListSubmit,
  getListSubmit,
  deleteListSubmit,
  editListSubmit,
} from "./api";

export default {
  data() {
    return {
      title: "TodoList",
      newItem: "",
      todoList: [],
      doneList: [],
    };
  },
  onLoad() {},
  mounted() {
    this.getList();
  },
  methods: {
    // todo列表选中--完成
    checkboxChange: function (e) {
      console.log("e", e);
      let ids = e.detail.value;
      this.todoList.map((item) => {
        if (ids.includes(item._id)) {
          // 选中
          let params = { id: item._id, checked: true };
          this.editList(params);
        }
      });
    },

    // done列表选中--完成
    doneboxChange(e) {
      console.log("e", e);
      let ids = e.detail.value;
      this.doneList.map((item) => {
        if (!ids.includes(item._id)) {
          // 非选中e值中原值为true--取消选中
          if (item.checked) {
            let params = { id: item._id, checked: false };
            this.editList(params);
          }
        }
      });
    },

    getList() {
      getListSubmit().then((res) => {
        this.todoList = res.todoList;
        this.doneList = res.doneList;
      });
    },
    addList() {
      let params = {
        title: this.newItem,
      };
      addListSubmit(params).then((res) => {
        this.newItem = "";
        this.getList();
      });
    },
    editList(params) {
      editListSubmit(params).then((res) => {
        this.getList();
      });
    },
  },
};
</script>

<style>
.uni-list-cell {
  justify-content: flex-start;
}

.setInnerRight {
  display: flex;
  justify-content: flex-end;
}
</style>
