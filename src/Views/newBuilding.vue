<template>
<topbar />
<sidebar />
<div class="con">
    <label for=""> اسم المبنى</label>
    <input type="text">
        <label for=""> عدد الطوابق:</label>
    <input type="text">
        <label for=""> عدد الشقق</label>
    <input type="text">
        <label for=""> تاريخ الانشاء</label>
    <input type="date">
    <label for="">الموظف المسؤول</label>
    <select name="" id="">
    <option value="">اختر موظف </option>
    <option value="">خالد التجاني </option>
       <option value="">السر هجو </option>
    </select>
   
</div>
    <button>حفظ</button>
    <button @click="cancel" style="float:left">الغاء</button>
</template>

<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
export default{
       components:{
        topbar,
        sidebar,
    },
    methods:{
        cancel(){
         
            this.$router.push('/buildings')
        }
    }
}
</script>
<style scoped>
.con{
     display: grid;
     grid-template-columns: auto;
     padding:0;
    flex-wrap: wrap;
    direction: rtl;
    width: 88%;
    margin-top: 4%;
    height: 500px;
    font-size: 1.7rem;
    margin-right: 1%;
    margin-left:1%;
}
.con label{
    padding-top: 1.2rem;
}
 button{
     float: right;
     margin-right: 12%;
    font-size: 1.7rem;
    margin-top: 1%;
}
</style>