<template >

<topbar />
<sidebar />

<div @click="clear">
  <div class="add">
   <router-link to="newBuilding"> <button>+</button> </router-link>
  </div>

    <!-- building loop section -->
  <div v-for="hot in hotel" :key="hot.id" >
  <div class="con" @click="chooseB(hot.id)"  @contextmenu="handler($event ,hot.id )">
            <div class="bImage">
                 <div class="grid-item"> <img   :src="hot.img" alt=""></div>
                      
    
            </div>
    <h2>{{hot.name}}</h2>
    
    <div class="bDetails">
      
      <div class="grid-container">
        <div class="grid-item">عدد الطوابق:</div>
        <div class="grid-item">{{hot.num_floor}}</div>
        <div class="grid-item">الشقق المستاجره:</div>
        <div class="grid-item">{{hot.rented_flat}}</div>
        <!-- sec row -->
        <div class="grid-item">عدد الشقق:</div>
        <div class="grid-item">{{hot.num_flat}}</div>
        <div class="grid-item">الشقق الفارغه:</div>
        <div class="grid-item">{{hot.empty_flat}}</div>
        <!-- third row -->
        <div class="grid-item">تاريخ الانشاء:</div>
        <div class="grid-item">{{hot.build_date}}</div>
        <div class="grid-item">موظف المسؤول:</div>
        <div class="grid-item">احمد التجاني</div>
      </div>
    </div>


  </div>

   

 </div>
    <div id="menu" class="menu" :style="{display:dis}">
     <ul>
    
       <li @click="edit(b_id)">تعديل</li>
      <li>مسح</li>
     </ul>
   </div>
</div>
</template>


<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
import hotels from '../model/hotel.js'
export default{
      data(){
        return{
          dis:'none',
          hotel:[],
          b_id:null
    
        }
      },
      components:{
        topbar,
        sidebar,
      },
    methods:{
        clear()
        {
         
           this.dis='none'
        },
        chooseB(id)
        {
         
              this.$router.push("/building/:" + id);
        },


          handler: function(e ,id) {
        this.dis='block'
        var cursorX = e.pageX;
    var cursorY = e.pageY;
    var d = document.getElementById('menu');
d.style.position = "absolute";
d.style.left =  cursorX+'px';
d.style.top =cursorY+'px';
              console.log( id)
              this.b_id=id
        console.log( cursorX, cursorY)
        e.preventDefault();

     },

     edit(id){
       console.log("bitch"+id)
     }
  



    },
    created(){
      this.hotel=hotels
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

.con {
  direction: rtl;
  margin-left: 4%;
  margin-right: 4%;
display: inline-block;
  margin-top: 5%;
  width: 80%;
  background: #ffffff;
  
  color: #707070;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 0px 1px 10px 1px gray;
  cursor: pointer;
  margin-bottom: 0;
  
}
.con h2{
  margin-right: 2vw;
}

.bDetails {
  float: right;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  
  
}
.grid-item {
  padding: 1vw;
  font-size: x-large;
  text-align: right;
}

.bImage {
    display: grid;
    grid-template-columns: auto  ;
  float: left;
}
.grid-item img{
  max-width: 20vw;
  min-width: 20vw;
  min-height: 15vh ;
  max-height: 30vh;
  text-align: right;
}


.menu{
  width: auto;
  height: auto;
  background: rgb(51, 51, 51);
 border-radius: 5px;
  text-align: center;
     margin: 0;
  padding: 0;

}
.menu ul{
  list-style: none;
  color: #ffffff;
  font-size: 1rem;
  width: 100%;
    margin: 0;
  padding: 0;
  
}
.menu ul li{
  width: 120px;
  padding: 0.5rem;

}

.menu ul li:hover {
background: rgb(77, 77, 77);;

}
</style>
