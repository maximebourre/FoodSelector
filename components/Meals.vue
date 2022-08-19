<template>
  <div id="global">
    <div><h1>vos plâts :</h1></div>
    <div  v-for="(plat,index) in info" :key="index" style="width:100%;" >
      <div v-if="index<limit" class="meal">
        <table   >
        <tbody>
          <tr>
            <td v-if="index == 0 " class="bold name">{{plat.Meal_name}}</td>
            <td v-else class="name" >{{plat.Meal_name}}</td>
            <td class="score">{{plat.Score}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["userId"],
    data : function(){
    return{
      info: [],
      limit: 5,
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
    width: 250px;
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
    width: 100%;
}

.bold{
    font-weight: bold;
}

.meal{
  border-bottom: 2px solid #37bb2d;
  margin-bottom: 10px;
  width: 100%;
}

.name{
  width: 100%;
}
.score{
  text-align: center;
  width: 100%;
}

td{
  padding-left: 10px;
  padding-right: 10px;
}

table{
  width: 100%;
}
</style>