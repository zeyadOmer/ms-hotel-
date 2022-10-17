<template>
    
 <div class="sidebar">
    <div class="title">
      <strong style="color:#2680EB">MS</strong>
      <strong>Hotels</strong>
    </div>

    <router-link to="../main"
      ><i class="fa fa-circle-o"></i> الرئيسية
    </router-link>
    <p>الادارات و التحكم</p>

    <router-link to="../buildings"  >
      <i class="fas fa-archive"></i> ادارة المباني
      
    </router-link>

  <router-link to="/empSearch">ادارة الموظفين</router-link>
    <router-link to="/customers">المستأجرين</router-link>
       <p>التقارير</p>
      <a href="">تقارير المالية</a>
         <a href="">تقارير العمليات</a>


   
    </div>
</template>

<script>
export default{
    
}

</script>




<style scoped>

/* Sidebar styling */

.title{
  
  margin-bottom: 10%;
  text-align: center;
  padding-bottom: 3%;
}
.title strong {
  
  margin-left: 0%;
  padding-bottom: 25px;
  padding-top: 25%;
  padding-right: 2%;
  color: rgba(158, 148, 255, 1);
  font-size: 1.6rem;
  text-align: justify;
}
.title svg,
title strong {
  /* align  icon to title */
  
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 10%;
  padding-right: 10%;
}

.sidebar {
  direction: rtl;
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color:#313344;
  overflow-x: hidden;
  padding-top: 25px;

  text-align: right;
  
}

.sidebar p {
  margin-bottom: 5%;
  margin-top: 15%;
  margin-right: 18%;
  color: gray;
}
.sidebar a {
  margin-right: 10%;
  margin-top: 4%;
  min-width: 75%;
  max-width: 80%;
  display: block;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding-right: 5%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  font-weight: normal;
  text-transform: uppercase;
  border-bottom: 1px solid gray;
  transition: all 0.2s ease-in-out;
}
.sidebar button {
  background: transparent;
  padding: 0;
  text-align: right;
  margin-top: 1%;
  min-width: 100%;
  padding-right: 10%;

  display: block;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;

  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  border: none;
}

.sidebar i {
  padding-left: 5%;
  margin-right: 0px;
}

.sidebar a:hover {
  transform: translate(4px,0px);
  background: rgb(44, 44, 44);
}
.sidebar button:hover {
  margin-right: 4px;
}
.sidebar button:focus {
  color: var(--dText);
}

.main {
  direction: rtl;
  height: 100%;
  width: 100%;
  margin-right: 1%;
  margin-top: 1%;
  margin-left: 30px;
  /* Same as the width of the sidenav */
}

</style>
