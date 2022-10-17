<template>
    <div class="topbar">
        <img src="../assets/pro.jpg" alt="" class="avatar" @click="showdropmenu">
        <div class="dropmenu" :style="{display:dis}">
            <ul>
                <li @click="this.$router.push('/profile')">الملف الشخصي</li>
            <li @click="$router.push('/')">تسجيل الخروج</li>
            </ul>

        </div>
        <div class="gg">
                <strong>احمد محمد </strong>
        <small>الاداره</small>
          </div>     
    </div>
</template>

<script>
export default{
    data(){
        return{
            dis:'none',
        }
    },
    methods:{
        showdropmenu(){
            if( this.dis=='block'){
            this.dis='none'
            }
            else{
                  this.dis='block' 
            }
        }
    }
}
</script>

<style>

.avatar{
    margin-left: 2%;
    height: 50px;
    width: 60px;
    border-radius: 50%;
    margin-top: 0.2%;
    object-fit: scale-down;
}
.dropmenu{
    position: absolute;
    top: 90%;
    left: 0.2%;
    background: #313344;
    color: #fff;
    border-radius: 7px;
    width: 10%;
  
   
}
.dropmenu ul{
    
      padding: 0;
    text-align: center;
list-style: none;
}
.dropmenu ul li{
padding: 1.2rem;
cursor: pointer;
}
.dropmenu ul li:hover{
background: rgb(44, 44, 44);
}

.topbar .gg{
     margin-top: 0.5%;
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-left: 1%;

}


.topbar{

    display: flex;
      vertical-align: middle;
    margin-right: 10%;
    position: fixed;
    top: 0;
    right: 0;
    height: 5%;
    width: 90%;
    background: #313344;
    text-align: left;
    z-index: 1;
    padding-bottom: 5px;
}
.topbar img{
    cursor: pointer;
}
</style>