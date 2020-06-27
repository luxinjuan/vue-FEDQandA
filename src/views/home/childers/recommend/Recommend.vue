<template>
<div id="recommend">
  <a-list item-layout="vertical" size="large"  :data-source="listData">
    <a-list-item slot="renderItem" key="item.title" slot-scope="item">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="@/assets/img/touxiang1.jpg"
      />
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
  </a-list>
</div>
  
</template>
<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    // href: 'https://www.antdv.com/',
    title: `前端开发程序猿 ${i}`,
    avatar: '@/assets/img/touxiang1.jpg',
    description:
      '三年程序猿.',
    content:
      '前端常用的三大框架，分别为:VUE,REACT,Angular',
  });
}
export default {
  name:"Recommend",
  data() {
    return {
      listData,
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
};
</script>
<style></style>