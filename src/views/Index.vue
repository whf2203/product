<template>
<div class="wrap">
    <el-row class="tac">
        <el-col>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span @click="send">导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
    <div class="content">
        aefgjobejkdsnklnmvkln
    </div>
</div>
</template>

<script>
var md5=require('md5');
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
    send(){
        console.log(66666);
        fetch('http://localhost:8888/get')
       .then(res=>res.json())
       .then(body=>{
           console.log('body...',body);
       })
    },
    
  },
  mounted(){
    this.message();
  }
}
</script>
<style>
.wrap{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-between;
}
.tac{
    width:28%;
    font-size:.3rem;
}
.tac span{
    font-size: .3rem;
}
el-menu-item{
    font-size:.3rem;
}
.content{
    margin-right: .5rem;
}
</style>
