<template>
<sidebar />
<topbar />
<div class="con">
    <div class="container" >
        <h2 >البيانات الشخصية</h2>
        <label for=""> الاسم</label>
        <input type="text">
        
        <label for="">كلمة السر</label>
        <input type="text">
        <label for="">البريد الالكتروني</label>
        <input type="text">
        <label for="">رقم الهاتف</label>
        <input type="text">
         <label for="">تاريخ الميلاد</label>
             <input type="date" style="padding-left:4%">
        <label for=""> النوع</label>
        <select name="" id="" style="width:20%">
            <option value="">ذكر</option>
            <option value=""> انثى</option>
        </select>
        <label for="">عنوان السكن</label>
        <input type="text">
     

    </div>
               
            <div class="container" >
        <h2 >بيانات الناقل</h2>
        <label for=""> اسم المستخدم</label>
        <input type="text">
        <label for="">المسمى الوظيفي</label>
        <input type="text">
   
        <label for="">تاريخ التسجيل</label>
        <input type="date" style="padding-left:4%">
        <label for=""> اختيار العماره</label>
        <select name="" id="">
               <option name="" id="">المهندسين</option>
           <option name="" id="">الفتيحاب</option>
              <option name="" id="">المربعات</option>
        </select>

    </div>


     <hr>

                <div class="container" >
                    <h1 style="margin-right: 10%;">الصوره الشخصية</h1>
     <label for="image">
      <input type="file" name="image" id="image" style="display:none;"/>
      <img :src="source" alt="" >
   </label>
                     <div class="break">
     <el-button class="btnn" :plain="true" @click="open2">حفظ</el-button>
                     <button id="cancel" @click="cancel">الغاء</button>
                     </div>

    </div>

    </div>
</template>
<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
export default{
    data(){
        return{
            source:'https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png'
        }
    },
    components:{
            topbar,
            sidebar,
    },
    methods:{
           open2() {
        this.$message({
          message: 'تم الحفظ',
          type: 'success'
        });
      },
      cancel(){
          this.$router.push('/empSearch')
      }
    }
}
</script>

<style scoped>
hr{
 
    border-color: #313344;
   
}

  button:hover
  {
      box-shadow: 3px 4.9px 16px rgba(27,139,249,0.6);
 
}


.con{
    direction: rtl;
    display: flex;
     margin-right: 11%;
      margin-top: 1%;
      background: var(--darkConBG);
      width: 87%;
        border-radius: 7px;
    margin-top: 5%;
}
.container{
  
    color: var(--dText);
   
   
    
    display: grid;
    padding-left: 0;
    margin-right: 0;
    flex-wrap: wrap;
    width: 40%;
    margin: 2%;

   
}
.container button{
    margin-top: 4%;
    margin-right: 20%;

}
.container input,select{
    width: 50%;
    max-height: 10px;
        padding-right: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
}
.container img{
    height: auto;
    max-height: 30vh;
    width: 80%;
  
    margin-right: 10%;
    border: solid #313344;
    box-sizing: border-box;
    border-radius: 5px;

}



</style>