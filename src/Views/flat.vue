<template>

<sidebar />
<topbar />


  <div class="con">
       
    <!-- flat image section -->
    <div v-for="fla in flat" :key="fla.flat_id">
            <div class="bImage">
                 <div class="grid-item"><img src="../assets/1.png" alt=""></div>
                                  <div class="grid-item"><img src="../assets/1.png" alt=""></div>

                 <div class="grid-item"><img src="../assets/1.png" alt=""></div>

                 <div class="grid-item"><img src="../assets/1.png" alt=""></div>
    
            </div>
    <h2>وصف الشقه</h2>
     <!-- flat details section -->
    <div class="bDetails">
      
      <div class="grid-container">
        <div class="grid-item">عدد الغرف:</div>
        <div class="grid-item">3</div>
        <div class="grid-item">حمامات:</div>
        <div class="grid-item">4</div>
        <!-- sec row -->
        <div class="grid-item">مطبخ:</div>
        <div class="grid-item">1</div>
        <div class="grid-item">صالة:</div>
        <div class="grid-item">1</div>
        <!-- third row -->
        <div class="grid-item">مكيفات:</div>
        <div class="grid-item">4</div>
        <div class="grid-item">ثلاجه:</div>
        <div class="grid-item">1</div>
          <div class="grid-item">غساله:</div>
        <div class="grid-item">1</div>
          <div class="grid-item">سعر الليله:</div>
        <div class="grid-item">2700</div>
          <div class="grid-item">سعر الشهر:</div>
        <div class="grid-item">30.000</div>
           <div class="grid-item" :style="{display:inputdis}">حالة الشقه:</div>
        <div class="grid-item" :style="{display:inputdis}"><select name="" id="">
           <option value="empty"></option>
          <option value="repair">تحت الصيانه</option>
         
          </select></div>
      </div>
    </div>
  </div>
  </div>
       <!-- customer details section -->
       <div v-for="customer in cus" :key="customer.cusID">
   <hr>
      <h2 style="float:right;margin-right:15%;">بيانات المستأجر</h2>
    <div class="cuscon" :style="{display:datadis}">
         <div class="grid-container" >
        <div class="grid-item">اسم المستأجر:</div>
        <div class="grid-item">{{customer.name}} </div>
        <div class="grid-item">رقم الهاتف:</div>
        <div class="grid-item">{{customer.phone}}</div>
         <div class="grid-item">اثبات الشخصية:</div>
        <div class="grid-item">{{customer.identity}}</div>
        <div class="grid-item">نوع اثبات الشخصية :</div>
        <div class="grid-item">{{customer.idType}}</div>
         </div>
            <div class="grid-container" style="margin-right:5%">
        <div class="grid-item">تاريخ بداية الايجار:</div>
        <div class="grid-item">{{customer.startDate}} </div>
        <div class="grid-item">تاريخ نهاية الايجار:</div>
        <div class="grid-item">{{customer.endDate}}</div>
         <div class="grid-item">نوع الايجار:</div>
        <div class="grid-item">يومي </div>
        <div class="grid-item"><button style="width:200%">مستندات المستاجر</button></div>
        <div class="grid-item" style="background:transparent"></div>
         <div class="grid-item">المبلغ المطلوب:</div>
        <div class="grid-item"><strong>22.000 جنيه سوداني</strong> </div>
            </div>
            <div class="left">
            <img :src="customer.cusImg" alt="">
            <div class="break"></div>
            <button style="  background:#52F17C;">انهاء الايجار</button>
             
            <button style="  background: #2680EB;">تعديل</button>
         
            <button style="  background:#d85353;">الغاء</button>
            </div>
    </div>
    </div>

       <!-- customer input section -->
      <div class="cuscon" :style="{display:inputdis}">
         <div class="grid-container" >
        <div class="grid-item">اسم المستأجر:</div>
        <div class="grid-item"><input type="text"> </div>
        <div class="grid-item">رقم الهاتف:</div>
        <div class="grid-item"><input type="text"></div>
         <div class="grid-item">اثبات الشخصية:</div>
        <div class="grid-item"><input type="text"> </div>
        <div class="grid-item">نوع اثبات الشخصية :</div>
        <div class="grid-item"><input type="text"></div>
         </div>
            <div class="grid-container" style="margin-right:5%">
        <div class="grid-item">تاريخ بداية الايجار:</div>
        <div class="grid-item"><input type="date"> </div>
        <div class="grid-item">تاريخ نهاية الايجار:</div>
        <div class="grid-item"><input type="date"></div>
         <div class="grid-item">نوع الايجار:</div>
        <div class="grid-item"><select name="" id="">
          <option value="daily"> يومي  </option>
             <option value="monthly">شهري</option>
          </select> </div>
        <div class="grid-item"><button style="width:200%" @click="[doc=true]">مستندات المستاجر</button></div>
        <div class="grid-item" style="background:transparent"></div>
         <div class="grid-item">المبلغ المطلوب:</div>
        <div class="grid-item"><strong></strong> </div>
            </div>
            <div class="left">
            <img src="../assets/1.png" alt="">
            <div class="break"></div>
                  <button style="  background:#52F17C;">بدا الايجار</button>
             
         
            <button style="  background:#d85353;"> الغاء</button>
            </div>
                <div class="docs" :style="[docs?'display:block':'display:none']">
    </div>




    </div>

</template>

<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
import {customers,flats } from "../model/building.js";


export default{
  data(){
    return{
      datadis:'none',
      inputdis:'none',
      doc:false,
      flat:[],
      cus:[],
    }
  },
  components:{
    topbar,
    sidebar
  },
  methods:{

  },
  created(){
    console.log( this.$route.params.id)
    var x= this.$route.params.id.toString();
    x=x.substr(1)
    this.cus=customers.filter(customers=>x==customers.cusID)
 
    this.flat=flats.filter(flats=>this.cus[0].flatId==flats.flat_id)
   console.log(this.flat)
    if(x==0){
      this.inputdis='block'
    } else{
      this.datadis='block'
    }

  }
}
</script>

<style scoped>
.con {
  direction: rtl;
  margin-left: 2%;
  margin-right: 2%;
display: inline-block;
  margin-top: 5%;
  width: 85%;
  background: #ffffff;

  height: 520px;
margin-bottom: 2%;

  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0px 1px 10px 1px gray;
 
  
}

.bDetails {
  float: right;
  min-width: 60%;
  max-width: 70%;
}
.bImage {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5px;
  float: left;
  max-width: 30%;
  margin-left: 1%;
}
.bImage img {
  border-radius: 15px;
  padding: 0;
  max-height: 240px;
  
  max-width: 100%;
  margin: 0;
}
.grid-container {
  margin-right: 10%;
  display: grid;
  gap: 20px;
  grid-template-columns: 25% 25% 25% 25%;
  
}
.grid-item {
  vertical-align: middle;
  align-content: center;
  align-items: center;
  font-size: x-large;
  display: inline-block;
  text-align: center;
}
.grid-item button{
  font-size: 2.1rem;
  background: #52BAF1;
  color: #fff;
  border: 1px;
  box-shadow: 1px 1px 1px grey;
  border-radius: 30px;
  cursor: pointer;
  transition: all .3s ease-in;
}

.grid-item button:hover{
background: transparent;
color: #52BAF1;
border: 1px solid #52BAF1;
}
.cuscon {
  
  direction: rtl;
  margin-left: 2%;
  margin-right: 2%;
  display: block;
  margin-top: 4%;
  width: 85%;
  background: #ffffff;
  height: 600px;


  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0px 1px 10px 1px gray;
  
  
}
.cus > * {
  padding: 1.2rem;
}
.cuscon .grid-container {
    float: right;
  display: grid;
  grid-template-columns: 50% 50% 50% 50% ;
    
    margin: 0;
  
}
.cuscon .grid-item {
  padding: 20px;
  font-size: 1.7rem;
  text-align: right;
}
.cuscon .grid-item input{
width: 100%;
font-size: 1.2rem;
}
.left{
  position: relative;
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
}
.left img{
  object-fit: scale-down;
  margin-top: 10% ;
  min-width: 80%;
  min-height: 30vh;
  border-radius: 7px;
  max-height: 300px;
}
.left button{
  position: relative;
  padding-right: .5vw;
  padding-left: .5vw;
  min-width: 30%;
  max-width: 100%;
font-size: x-large;
color: #fff;
border-radius: 30px;
cursor: pointer;
display:inline-block;
border: 0;
}
.left button:hover{
transform: scale(1.02,1.02);
}
.break{
flex-basis: 100%;
height: 0;
}
.docs{
  position: absolute;
  height: 60vh;
  width: 60%;
  background: rgb(180, 180, 180);
  box-shadow: 0px 1px 10px 1px gray;
  
  z-index: 3;
  border-radius: 5px;
  top: 30%;
  left: 20%;
}
</style>