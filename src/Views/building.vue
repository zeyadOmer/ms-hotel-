<template>
<topbar />

<sidebar />
  <div class="con">
    <div class="bImage">
      <img src="../assets/flat.jpg" alt="" />
      <img src="../assets/room.jpg" alt="" />
      <img src="../assets/room2.jpg" alt="" />
      <img src="../assets/bath.jpg" alt="" />
    </div>
    <h1 :style="[edit ? 'display:none' : 'display:block']">{{ hotel.name }}</h1>

    <div class="grid-item" :style="[edit ? 'display:block' : 'display:none']">
      <input type="text" />
    </div>
    <button class="gg" @click="edit = !edit"><i class="fa fa-edit"></i></button>
    <div class="bDetails">
      <div class="grid-container">
        <div class="grid-item">عدد الطوابق:</div>
        <div
          class="grid-item"
          :style="[edit ? 'display:none' : 'display:block']"
        >
          {{ hotel.num_floor }}
        </div>
        <div
          class="grid-item"
          :style="[edit ? 'display:block' : 'display:none']"
        >
          <input type="text" />
        </div>
        <div class="grid-item">الشقق المستاجره:</div>

        <div class="grid-item">{{ hotel.rented_flat }}</div>
        <!-- sec row -->
        <div class="grid-item">عدد الشقق:</div>
        <div
          class="grid-item"
          :style="[edit ? 'display:none' : 'display:block']"
        >
          {{ hotel.num_flat }}
        </div>
        <div
          class="grid-item"
          :style="[edit ? 'display:block' : 'display:none']"
        >
          <input type="text" />
        </div>
        <div class="grid-item">الشقق الفارغه:</div>
        <div class="grid-item">{{ hotel.empty_flat }}</div>
        <!-- third row -->

      
          <div class="grid-item" style="font-size:1.2rem;">تاريخ الانشاء:</div>
          <div class="grid-item" style="font-size:1.2rem;">
            {{ hotel.build_date }}
          </div>
          <div class="grid-item" style="font-size:1.2rem">موظف المسؤول:</div>
          <div
            class="grid-item"
            :style="[edit ? 'display:block' : 'display:none']"
          >
            <input type="text" />
          </div>
          <div class="grid-item" :style="[edit ? 'display:none' : 'display:block']"> احمد التجاني</div>
       
      </div>
    </div>
    <!-- building image section -->
  </div>

  <br />
  <br />
  <br />
  <hr />
  <!-- floor loop-->
  <div v-for="floor1 in floor" :key="floor1.id">
    <h1 style="float:right;margin-right:15%">{{ floor1.title }}</h1>

    <h2 id="newFlat" @click="addFlat(floor1.floorId)">اظافة شقه</h2>

    <div class="floorCon">
      <!-- flat loop-->
      <div
        v-for="flat1 in flat"
        :key="flat1.id"
        style="margin-right:10%"
        :class="{
          empty: flat1.status === 'empty',
          repair: flat1.status === 'repair',
        }"
      >
        <div v-show="flat1.fId === floor1.floorId && flat1.bId == hotel.id">
          <!-- customers loop-->
          <div v-for="cus in customer" :key="cus.id">
            <!-- customer condition loop-->
            <div v-show="cus.flatId === flat1.flat_id">
              <div class="card-container">
                <div class="upper-container">
                  <h5>{{ flat1.flat_id }}</h5>
                  <div class="image-container">
                    <img :src="cus.cusImg" />
                  </div>
                </div>
                <div class="lower-container">
                  <div>
                    <h3>الشقه رقم {{ cus.flatId }}</h3>
                    <h4>{{ cus.name }}</h4>
                  </div>
                  <div>
                    <p
                      :style="[
                        flat1.status == 'rented'
                          ? 'display:block'
                          : 'display:none',
                      ]"
                    >
                      تاريخ بداية الايجار :{{ cus.startDate }}
                    </p>
                  </div>
                  <div>
                    <p
                      :style="[
                        flat1.status == 'rented'
                          ? 'display:block'
                          : 'display:none',
                      ]"
                    >
                      تاريخ نهاية الايجار :{{ cus.endDate }}
                    </p>
                    <p
                      :style="[
                        flat1.status != 'rented'
                          ? 'display:block'
                          : 'display:none',
                      ]"
                    >
                      حالة الشقه :{{ flat1.status }}
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
            </div>

            <!-- end customer looploop-->
          </div>
        </div>
      </div>
    </div>
    <!-- end flat loop-->

    <hr />
    <!--end floor loop-->
  </div>
</template>

<script>
import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
import { flats, floors, customers } from "../model/building.js";
import hotels from "../model/hotel.js";
export default {
  data() {
    return {
      hotel: [],
      flat: [],
      floor: [],
      customer: [],
      bColor: "",
      status: "",
      floorTitle: "gg",
      edit: false,
    };
  },
  components:{
    sidebar,
    topbar
  },
  methods: {
    chooseFlat(id) {
      console.log("yoyo" + id);
      this.$router.push("/flat/:" + id);
    },
    addFlat(floorID) {
      console.log(floorID);
      this.$router.push("/newFlat/:" + floorID);
    },
  },
  created() {
    var id = this.$route.params.id.toString().substr(1);
    console.log(id);
    this.hotel = hotels.filter((hotels) => hotels.id == id);
    console.log(this.hotel);
    this.hotel = this.hotel[0];

    console.log(this.hotel);
    this.floor = floors.filter((floors) => floors.bId == id);

    this.flat = flats.filter((flats) => flats.bId == id);
    this.customer = customers;
  },
 
};
</script>

<style scoped>
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

.rented {
  box-shadow: #18c912;
  --borderColor: #18c912;
}
.empty {
  --borderColor: gray;
}
.repair {
  --borderColor: red;
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

  background: #ffffff;
  flex-direction: column;

  width: 85%;
  margin-top: 5%;
  margin-left: 2%;
  margin-right: 2%;
  max-height: 520px;
    box-shadow: 0px 1px 10px 1px #313344bd ;

  padding-bottom: 1%;
}


.bDetails {
  float: right;
  min-width: 60%;
  max-width: 70%;
}
.bImage {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  float: left;
  max-width: 30%;
  margin: 1%;
}
.bImage img {
  padding: 0;
  
  width: auto;
  max-width: 100%;
  margin: 0;
}

.grid-container {
  margin-right: 10%;
  display: grid;
  gap: 20px;
  grid-template-columns: 25% 25% 25% 25%;
  max-width: 100%;
  
}
.grid-item {
  vertical-align: middle;
  align-content: center;
  align-items: center;
  font-size: x-large;
  display: inline-block;
  text-align: center;
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
  box-shadow: 0px 1px 10px 1px var(--borderColor);
  overflow: hidden;
  display: inline-block;
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
  color: var(--borderColor);
  opacity: 0.6;
  font-weight: bold;
}
.lower-container p {
  font-size: 16px;
  color: gray;
  margin-bottom: 30px;
}
.lower-container .btn {
  padding: 12px 20px;
  background: var(--borderColor);
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
  color: var(--borderColor);
  border: 2px solid var(--borderColor);
}
</style>
