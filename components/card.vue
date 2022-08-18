<template>
  <div id="global">
      <div ><h1>Votre meilleur plats :</h1></div>
      <div><h2>{{info.Meal_name}},{{info.Score}}</h2></div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["userId"],
    data : function(){
    return{
      info: [],
    }
  },
  created(){
    axios.get("http://foodselector.alwaysdata.net/userMeals/"+this.userId)
    .then((responce) =>{
        console.log(responce)
      this.info = responce.data
    })
    .catch((error)=>{
      console.log("error axios")
      console.log(error)
    })
  },

}
</script>

<style>

#global{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    width: 20%;
    color: black;
    background-color: rgb(179, 163, 163);
    margin-right: 2%;
    margin-left: 2%;
    border-radius: 10% ;
    overflow: hidden;
    box-shadow: 10px  10px 10px #37bb2d ;
}

#global h1{
    font-size: 24px;
    padding-top: 3%;
    text-align: center;
    color: #37bb2d;
}
</style>