<template>
<topbar />
<sidebar />
 <div class="add">
  <router-link to="newEmp">  <button >+</button> </router-link>
  </div>
<div class="con">
    <input type="text" placeholder="ادخل اسم الموظف" >
    
    <h1>الموظفين:</h1>

   

    <div class="break"></div>
    <div class="card" @click="getEmp(1)">
        <img src="../assets/1.png" alt="">
        <div class="cardcon">
            <strong>  التجاني ساره علي </strong>
            <p>عمارة المهندسين</p>
            <p>غفير</p>
        </div>
    </div>
       <div class="card">
        <img src="../assets/1.png" alt="">
        <div class="cardcon">
            <strong>  التجاني ساره علي </strong>
            <p>عمارة المهندسين</p>
            <p>غفير</p>
        </div>
    </div>
       <div class="card">
        <img src="../assets/1.png" alt="">
        <div class="cardcon">
            <strong>  التجاني ساره علي </strong>
            <p>عمارة المهندسين</p>
            <p>غفير</p>
        </div>
    </div>

    
    </div>
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
        getEmp(id){
            this.$router.push('/employee/:'+id)
        }
    }
}
</script>

<style scoped>
.add{

}
.add button{ 
border: 0;
  position: fixed;
  height: 50px;
  background: green;
  color: #fff;
  font-size: 2.7rem;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  top: 95%;
  left: 1%;
  cursor: pointer;
  transition: ease-out .3s all;
}
.add button:hover{ 
background: rgb(39, 228, 71);
transform: scale(1.2,1.2);
}
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
.break{
    height: 0;
    flex-basis: 100%;
}
.con input{
    width: 98%;
    height: 50px;
    border-radius: 30px;
    padding-right: 2%;
    border: 1px;
}

.con input:focus{
    border: 0 solid transparent;
outline: transparent;
}
.card{
     background: #fff;
    border: 1px;
    width: 15%;
 margin: 1.2rem;
 border-radius: 5px;
 box-shadow: 0px 1px 10px 1px gray;

}
.card img{
    border: 1px;
    width: 100%;
    min-height: 300px;
    max-height: 200px;
  
}
.cardcon{
   text-align: center;
    padding-top: 2%;
    padding-right: 2%;
    font-size: 1.2rem;
    
}
.card:hover{
    transform: scale(1.02,1.02);
    cursor: pointer;
}
</style>