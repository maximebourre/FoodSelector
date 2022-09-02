<template>
  <div>
    <div>
      <h1 v-if="this.uId !=0">Bonjour</h1><h1> {{user.User_name}}</h1>
      <select  v-model="uId" name="user" @change="defUser($event)" id="select">
        <option  v-for="(u,index) in users" :key="index" :value="u.User_id">{{u.User_name}}</option>
    </select>

    </div>
    
    <Meals :userId="this.uId" v-if="this.uId !=0" :key="componentKeyMeals" v-on:mealId="toSelectMeal"/>
    <mealDetails :mealId="this.selectMeal" v-if="this.uId !=0 && selectMeal != 0" :key="componentKeyDetails"/>

  </div>
</template>

<script>
import Meals from '../components/Meals.vue'
import MealDetails from '../components/MealDetails.vue'
import axios from "axios"

export default {
  components: { Meals , MealDetails },
  name: 'IndexPage',
  data () {
    return {
      selectMeal: 0,
      users:{},
      uId:0,
      user : {"User_id":"0","User_name":"Please choose your profil"},
      renderComponent : true,
      componentKeyMeals:0,
      componentKeyDetails:0,

    }
  },
  methods:{
    toSelectMeal(id){
      this.componentKeyDetails += 1
      this.selectMeal = id
    },
    defUser:function(event){
      this.componentKeyMeals += 1
      this.componentKeyDetails += 1
      console.log(this.uId);
      if( this.uId != null)
      axios.get("https://foodselector.alwaysdata.net/user/" + this.uId)
        .then((responce) =>{
          console.log(responce.data)
          this.user = responce.data
          this.$forceUpdate()
        })
        .catch((error)=>{
          console.log("error axios")
          console.log(error)
        })
    }
  },
  created(){
    axios.get("https://foodselector.alwaysdata.net/users")
    .then((responce) =>{
      console.log(responce.data)
      this.users = responce.data
    })
    .catch((error)=>{
      console.log("error axios")
      console.log(error)
    })
  },
}
</script>
