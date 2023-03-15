<template>
  <div>
    <img src="https://photos-images.active.com/file/1/222/2227057/optimized/72a031eb-5274-4be3-8831-4e7ea02b8014.gif" alt="Team Banner" >
    <h1>The Fighting Foodies</h1>
      <div v-for="player in players" :key="player.first_name">
      <h3>{{player.first_name}} {{player.last_name}} {{player.position_played }}</h3>
      </div>
    </div>
    
</template>

<script>

import axios from "axios"

export default {
  name: 'TeamPage1',

  data:() => {
    return{
    players: []
  }
},
methods: {
    team_roster(){
      axios.request({
        method : "GET",
        url : "http://127.0.0.1:5000/api/roster",
        params: {
          team_id : 2
        }
      }).then((response) => {
        this.players = response.data
      }).catch ((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.team_roster();
  }
}
</script>

<style scoped>
img{
  width: 75%
}

</style>
