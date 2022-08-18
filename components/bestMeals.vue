<template>
    <div>
        <div>
            <h1>Vos plâts ideaux</h1>
        </div>
        <ul>
            <li v-for="meal in meals">
                <div>
                    <h2>{{meal.Meal_name}}</h2>
                    <h3>{{meal.Score}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            meals: [],
        };
    },
    created() {
        axios.get("http://foodselector.alwaysdata.net/get/bestMeal/1")
            .then((responce) => {
                console.log(responce)
                this.meals = responce.data
            })
            .catch((error) => {
                console.log("error axios")
                console.log(error)
            })
    },
    
}
</script>

<style>

</style>