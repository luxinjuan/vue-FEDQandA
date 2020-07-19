<template v-for = "item in table.header">
  <my-table :table="table"></my-table>
</template>

<script>
import myTable from "../../components/common/Table";

export default {
  components: {
    "my-table": myTable
  },
  data() {
    return {
      table: {
        loading: false, // 数据加载loading
        tableData: [
          {
            basic: "算法",
            program: "热门语言",
            skill: "移动开发",
            ability: "英语"
          },
          {
            basic: "数据结构",
            program: "非热门语言",
            skill: "机器学习",
            ability: "行测"
          },
          {
            basic: "计算机组成原理",
            program: "前端框架",
            skill: "大数据",
            ability: "智力题"
          },
          {
            basic: "计算机网络",
            program: "",
            skill: "软件工程",
            ability: "材料分析"
          },
          {
            basic: "操作系统",
            program: "",
            skill: "安全",
            ability: ""
          },
          {
            basic: "数据库",
            program: "",
            skill: "新领域",
            ability: ""
          }
        ],
        event: {
          sortEvent: this.tableSort
        },
        //表格每一项数据的属性
        header: [
          //多选操作
          //   {
          //     prop: "selection",
          //     width: "55"
          //   },
          {
            prop: "basic",
            label: "计算机基础"
            // width: "180",
            // sortable:true
          },
          {
            prop: "program",
            label: "编程语言"
          },
          //   {
          //     prop: "img",
          //     label: "头像",
          //     width: "180",
          //     isImg: true
          //   },
          {
            prop: "skill",
            label: "专业技能"
          },
          {
            prop: "ability",
            label: "通用能力"
          }
          //操作栏
          //    {
          //     prop: "options",
          //     label: "删除",
          //     fixed: "right"
          //   }
        ]
        //操作的按钮
        // options: [
        //   {
        //     type: "success",
        //     label: "删除",
        //     event: this.checkPass,
        //     isShow: item => {
        //       return item.status == 0 ? false : true;
        //     }
        //   },
        //   {
        //     type: "danger",
        //     label: "编辑",
        //     event: this.checkNoPass,
        //     isShow: item => {
        //       return item.status == 1 ? false : true;
        //     }
        //   }
        // ]
      },
    //    pagination:{
    //     pageSize:10,
    //     pageNum:1,
    //     total:7
    //   }
    };
  },
  methods: {
    tableSort(val) {
      console.log(val);
    },
    checkPass(val) {
      console.log(val);
    }
    // checkNoPass(val) {
    //   console.log(val);
    // }
  }
};
</script>

<style scoped>
</style>