<template>
<div class="myTable">
     <el-table :data="table.tableData"  v-loading="table.loading" :stripe="table.stripe">
    <template v-for="item in table.header">
      <el-table-column type="selection" :width="item.width" v-if="item.prop == 'selection'" :key="item.prop"></el-table-column>
      <template v-else-if="item.prop == 'options'">
        <template v-if="table.options.length">
          <el-table-column :label="item.label" :width="item.width" :fixed="item.fixed" :key="item.label">
            <template slot-scope="scope">
              <template v-for="btn in table.options">
                <el-button
                  :type="btn.type"
                  v-if="btn.isShow ? btn.isShow(scope.row) : true"
                  :key="btn.type"
                  @click="btn.event(scope.row)"
                >{{btn.label}}</el-button>
              </template>
            </template>
          </el-table-column>
        </template>
      </template>
      <template v-else>
        <!-- <template v-if="item.isImg">
          <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="item.prop">
            <template slot-scope="scope">
              <el-popover placement="left" trigger="click">
                <div>
                  <el-image
                    style="width: 300px; height: auto;"
                    :src="scope.row[item.prop]"
                    fit="contain"
                    slot="reference"
                  ></el-image>
                </div>
                <el-image
                  style="width: 100px;height: 100px;"
                  :src="scope.row[item.prop]"
                  fit="contain"
                  slot="reference"
                ></el-image>
              </el-popover>
            </template>
          </el-table-column>
        </template> -->
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter?item.formatter:null"
          :show-overflow-tooltip="item.tooltip?item.tooltip:false"
          :sortable="item.sortable?item.sortable:false"
          :key="item.prop"
        ></el-table-column>
      </template>
    </template>
  </el-table>
  <!-- 分页 -->
    <!-- <section class="ces-pagination"  v-if='isPagination'>
        <el-pagination style='display: flex;justify-content: center;height: 100%;align-items: center;'
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            layout="total,sizes ,prev, pager, next,jumper"
            :page-size="pagination.pageSize"
            :current-page="pagination.pageNum"
            :total="pagination.total"
        ></el-pagination>
    </section> -->
</div>

</template>

<script>
export default {
  name:"myTable",
  props: {
    table: Object,
     // 是否显示分页
    // isPagination:{type:Boolean,default:true},
    // 分页数据
    // pagination:{ type:Object,default:()=>({pageSize:10,pageNum:1,total:0})},
  }
};
</script>
<style scoped>
.myTable{
  padding: 20px;
}
</style>