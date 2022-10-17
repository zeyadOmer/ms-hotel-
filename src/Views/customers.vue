<template>
<sidebar />
<topbar />
<div class="con">
    <input type="text" placeholder="ادخل اسم المستأجر">
</div>

  <br />
  <br />
  <br />
  <hr />
  <!-- floor loop-->
 <div class="card">
          <!-- customers loop-->
          <div v-for="cus in customer" :key="cus.id" >
            <!-- customer condition loop-->
         
              <div class="card-container">
                <div class="upper-container">
                    <img :src="cus.cusImg" />

                </div>
                <div class="lower-container">
                  <div>
                    <h3>الشقه رقم {{ cus.flatId }}</h3>
                    <h4>{{ cus.name }}</h4>
                  </div>
                  <div>
                    <p
                   
                    >
                      تاريخ بداية الايجار :{{ cus.startDate }}
                    </p>
                  </div>
                  <div>
                    <p
                 
                    >
                      تاريخ نهاية الايجار :{{ cus.endDate }}
                    </p>
                    <p
                    >
                    </p>
                  </div>
                  <div>
                    <a href="#" class="btn" @click="chooseFlat(cus.cusID)"
                      >التفاصيل</a
                    >
                  </div>
                </div>
              </div>
              <!-- customer condition loop-->
        

            <!-- end customer looploop-->
          </div>
          </div>
        
     
    <!-- end flat loop-->

    <hr />
    <!--end floor loop-->

</template>



<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
import {flats,floors,customers} from '../model/building.js'
import hotels from '../model/hotel.js'
export default{
data(){
    return{
      hotel:[],
      flat:[],
      floor:[],
      customer:[],
        bColor:'',
        status:'',
        floorTitle:'gg',
        edit:false,


    }
},
components:{
    topbar,
    sidebar,
},
methods:{
    chooseFlat(id){
      console.log("yoyo" +id)
      this.$router.push('/flat/:'+id)
      
    
    },
    addFlat(floorID){
        console.log(floorID)
        this.$router.push('/newFlat/:'+floorID)
    }
},
created(){
  


  this.hotel=hotels   
  this.floor=floors
    this.flat=flats
    this.customer=customers
   
   

},

}
</script>



<style scoped>

.card{
    display: flex;
  direction: rtl;
margin-right: 12%;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 2vh;
    margin-bottom: 2vh;
}
.card >*{
    margin-right: 5%;
}


h1 {
  margin-right: 4%;
  margin-top: 1%;
  font-size: 2.7rem;
}
.gg {
  position: absolute;
  top: 20%;
  left: 50%;
  color: rgb(46, 120, 170);
  border: 0;
  font-size: 2.7rem;
  background: transparent;
  cursor: pointer;
}


#newFlat {
  float: left;
  color: rgb(50, 93, 133);
  cursor: pointer;
  margin-left: 2%;
}
#newFlat:hover {
  color: rgb(32, 62, 90);
}
.con {
  position: relative;

  direction: rtl;
  border-radius: 15px;
  display: inline-block;


  flex-direction: column;

  width: 85%;
  margin-top: 5%;
  margin-left: 2%;
  margin-right: 2%;
  max-height: 520px;
  padding-bottom: 1%;
}

.con input{
    width: 80%;
    height: 3vh;
    margin-right: 5%;
    border-radius: 30px;
    padding-right: 2%;
    border: 0;
}
.bDetails {
  float: right;
  max-width: 45%;
}
.bImage {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  float: left;

  margin: 1%;
}
.bImage img {
  padding: 0;
  width: 50%;
  width: auto;
  max-width: 100%;
  margin: 0;
}

.grid-container {
  margin-right: 10%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
}
.grid-item {
  vertical-align: middle;
  align-content: center;
  align-items: center;
  padding: 20px;

  font-size: 30px;

  text-align: right;
}

.floorCon {
  flex-wrap: wrap;
  display: flex;

  direction: rtl;
  margin-top: 2%;
  width: 90%;
  height: auto;
  padding: 10px;
}
.card-container {
  direction: rtl;
  margin-right: 5%;
  width: 300px;
  height: 430px;
  background: #fff;
  border-radius: 6px;
  position: relative;
  box-shadow: 0px 0px 5px 0px ;
  overflow: hidden;
  display: inline-block;
  margin-bottom: 2vh;
}
.upper-container {
  font-size: 14px;
  background: rgb(165, 165, 165);
  text-align: center;
  width: 100%;
  height: 150px;
}
.upper-container h5 {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  font-size: 100px;
  color: #fff;
}
.image-container {
  position: absolute;
  top: 48%;
  left: 50%;
  background: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 5px;
  transform: translate(-50%, -100%);
}
.image-container img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.lower-container {
  height: 280px;
  background: #fff;
  padding: 20px;
  padding-top: 40px;
  text-align: center;
}
.lower-container h3,
h4 {
  box-sizing: border-box;
  line-height: 0.6;
  font-weight: lighter;
}
.lower-container h4 {
  opacity: 1.2;
  font-weight: bold;
}
.lower-container p {
  font-size: 16px;
  color: gray;
  margin-bottom: 30px;
}
.lower-container .btn {
  padding: 12px 20px;
  background: gray;
  border: none;
  color: white;
  border-radius: 30px;
  font-size: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in;
}
.lower-container .btn:hover {
  background: transparent;
  color: gray;
  border: 2px solid gray;
}
</style>
