<template>

<div class="router">
    <router-view>
    </router-view>
    </div>
<div class="footer">
  <h4>all right reserved</h4>
</div>

</template>

<script>

export default {
  name: 'App',
  components: {
  
  
  }
}
</script>

<style>

:root{
--borderColor:#18c912;
--border2Color:"red";

}

#cancel{
  margin-right: 10%;
width: 20%;
font-size: large;
border:solid 0px;
cursor: pointer;
margin-bottom: 1%;
padding: 0;
color: white;
border-radius: 5px;
text-align: center;
font: larger cairo;
  text-decoration:none;
  text-transform:uppercase;
  background-color: #f91b1b;
  box-shadow: 1px 2.9px 16px       rgba(249, 27, 64, 0.4);
  transition:0.6s cubic-bezier(0.01, 1.69,    0.99, 0.94);   
}
#cancel:hover{
      box-shadow: 3px 4.9px 16px rgba(249, 27, 56, 0.6);

}
.btnn{
margin-right: 10%;
width: 20%;
font-size: large;
border:solid 0px;
cursor: pointer;
margin-bottom: 1%;
padding: 0;
color: white;
border-radius: 5px;
text-align: center;
font: larger cairo;
  text-decoration:none;
  text-transform:uppercase;
  background-color: #1b8bf9;
  box-shadow: 1px 2.9px 16px       rgba(27,139,249,0.4);
  transition:0.6s cubic-bezier(0.01, 1.69,    0.99, 0.94); 
}


body{
  background: #E3E3E3;
}


a.router-link-active {
  background: linear-gradient(-90deg, #52BAF1, #2680EB);

  color: #fff !important;
  box-shadow: 0 5px 15px rgba(92, 149, 182, 0.4);
}

a.router-link{
  color: #000;
}

body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  
  
}
.footer{
  position:fixed;
  bottom: 0;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 5vh;
    background: #313344;
    filter: blur(.6px);
    box-shadow: 0px 1px 10px 1px #313344bd ;
box-sizing: border-box;
  color: rgb(190, 190, 190);
font-weight: bold;
font-size: large;

  margin-top: 8vh;
  z-index: 0;
}

.router{
  overflow: auto;
  height: 94vh;
}
</style>