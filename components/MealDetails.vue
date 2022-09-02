<template>
    <div v-if="mealId != 0" id="global">
        <div>
            <h1>{{meal.Meal_name}}</h1>
        </div>
        <!-- <div>
            Image
        </div> -->
        <div>
            Ingredients :
            <div  v-for="(ingredient,index) in this.ingredients" :key="index" style="width:100%;" >
                <table>
                    <tbody>
                        <tr>
                            <td>{{ingredient}}</td>
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
    props: ["mealId"],
    data : function(){
      return{
        meal: [],
        ingredients: [],
      }
    },
    created(){
    axios.get("https://foodselector.alwaysdata.net/meal/"+this.mealId)
    .then((responce) =>{
      this.meal = responce.data
      this.ingredients = responce.data.Meal_Ingredients.split(",")
    })
    .catch((error)=>{
      if (this.mealId != 0){
        console.log("error axios")
        console.log(error)
      }
    })
  },

}
</script>

<style>

</style>