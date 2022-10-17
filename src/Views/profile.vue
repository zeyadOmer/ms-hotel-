<template>
<topbar />
<sidebar />
<div class="container">
   <div class="con">
        <h3>الاسم</h3>
        <h3>المسمى الوظيفي</h3>
        <h3>مكان العمل</h3>
        <h3>تاريخ التوظيف</h3>
        <h3>المهام</h3>
      
   </div>
   <div class="con">
        <h3>ساره هجو عمر</h3>
        <h3>محاسب</h3>
        <h3>عمارة المهندسين</h3>
        <h3>20/12/2018</h3>
        <h3>نظافة ,غسيل ملابس ,حسابات العملاء</h3>
        <input type="file"  >
      
   </div>
     <img src="../assets/pro.jpg" alt="">
     </div>
</template>



<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
export default{
  data(){
    return{
      ima:"../assets/pro.jpg",
      gg:''
    }
  },
    components:{
        topbar,
        sidebar,
    },
    methods:{
        getEmp(id){
            this.$router.push('/employee/:'+id)
        }
    }
}
</script>


<style scoped>
.container{
    direction: rtl;
    display: grid;
    grid-template-columns: auto auto auto;
      margin-top: 10vh;
    background: #313344;
    color: aliceblue;
    min-height: 40vh;
    width: auto;
    padding: 0;
    margin-right:11%;
       margin-left:1%;
    border-radius: 7px;
}
.con{
    
    float: right;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    direction: rtl;
   
    margin-top: 4%;
    
 
    margin-right: 5%;
    margin-left:1%;
}
 img{
   position: absolute;
   left: 4vw;
     border-radius: 7px;
      margin-left:0;
 margin-top: 4vh;
    float: left;
    height: 30vh;
    width: 20vw;
}
</style>