<template>

<topbar />
<sidebar />
<div class="con">
    <h2>اظافة شقه </h2>
  
    <h3>وصف الشقه</h3>
    <hr>
    <div class="descCon">
        <label for="">عدد الغرف</label><input type="text">
           <label for="">عدد الحمامات</label><input type="text">
              <label for="">عدد الغرف</label><input type="text">
                 <label for="">عدد المكيفات</label><input type="text">
                    <label for="">عدد الغساله</label><input type="text">
                       <label for="">عدد ثلاجه</label><input type="text">
                          <label for="">سعر الليلة</label><input type="text">
                             <label for="">سعر الشهر</label><input type="text">
    </div>
    <div class="imgCon">
        <h1>gg</h1>
              <h1>gg</h1>
                    <h1>gg</h1>
                          <h1>gg</h1>
    </div>

    
    </div>
    
    <button>الغاء</button>
      <button>حفظ</button>
</template>


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

<style scoped>

.con{
    margin-right: 11%;
    direction: rtl;
    margin-top: 2%;
padding: 1.2rem;

}
.descCon{
    display: grid;
    padding: 1.2rem;
    font-size: large;
    font-weight: 400;
    font-family: sans serif;
    width: 48%;
    float: right;
    gap: 1vh;
    
}
.imgCon{
      padding: 1.2rem;
    direction: ltr;
    display: grid;
    grid-template-columns: auto auto ;
float: left;
width: 48%;
}
button{

    font-size: larger;
    width: 5%;
    margin: 1.2rem;
       margin-top: 2%;
       margin-left: 4%;
    cursor: pointer;
}
input{
    height: 1.7rem;
}

</style>
