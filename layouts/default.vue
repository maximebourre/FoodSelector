<template>
  <div id="container">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters({users: 'getUsers',}), 
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono');
  body{
    background-color: #e7e7e7;
    font-family: 'Ubuntu Mono';
    color: white;
    margin: 0;
    padding:0;
    font-size:20px;
  }
  header{
    font-size: 20px;
    height: 50px;
    padding-top: 10px;
    text-align: center;
    display: block;
  }
  header div{
    margin: auto;
  }
  header a{
    display:block;
    float:left;   
    color:#73A1F8;
    text-transform: uppercase;
    margin-left: 2%;
    margin-right: 2%;
    text-decoration-line: none;
    font-weight: bold;
  }
  footer{
    margin: 0;
    width: 100%;

  }
  footer div{
    margin: 0;
    width: 100%;
    text-align: center;
    background-color: #73A1F8;
    height: 150px;
  }
  footer h1{
    padding-top: 0px;
    margin-top: 0%;
  }
  footer a {
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 15px;
  }
  
  .content{
    padding-right: 12%;
    padding-left: 12%;
    padding-bottom: 5%;
    height: 105vh ;
    z-index: -2;
  }
  .first{
    padding-left: 12%;
  }

  .content .text{
    width: 50%;
    margin-right: 0;
  }
  .content .image{
    text-align: center;
    justify-content: center;
  }
  img{
    width:100%;
  }
  .icon{
    width: 48px ;
  }
  .inline{
    margin: 0;
    padding: 0;
    display: inline;
  }
  .dark{
  background-color: #303030;
  }
  .content h1{
    padding-top: 3%;
    text-align: center;
    color: #73A1F8;
    margin-bottom: 10%;
  }
  .color{
    color: #73A1F8;
  }

</style>
