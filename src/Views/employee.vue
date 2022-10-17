<template>
<sidebar />
<topbar />
<div class="con">
    <h1>الموظف</h1>
</div>

</template>

<style scoped>
.con{

    display: flex;
    flex-wrap: wrap;
    direction: rtl;
    width: 88%;
    margin-top: 4%;
    height: 500px;
 
    margin-right: 1%;
    margin-left:1%;

}
</style>

<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'

export default{

components:{
    topbar,
    sidebar,
}


}

</script>