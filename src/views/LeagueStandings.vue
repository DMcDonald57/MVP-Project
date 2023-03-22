<template>
    <div>
        <img src="https://t3.ftcdn.net/jpg/01/02/77/06/360_F_102770655_hl8YR9kPFQhg7kBbNYcrnORG6wKfTwB0.jpg" alt="Banner" >
        <h1>League Win Loss Records</h1>
        <div v-for="team in standings" :key="team.Team">
        <h3>{{team.Team}} {{team.Win}} {{team.Loss}}</h3>
        </div>
    </div>
</template>

<script>

import axios from "axios"

    export default {
        name: "LeagueStandings",

        data: () => {
            return{
                standings: []
            }
        },
        methods: {
            league_standings(){
                axios.request({
                    method : "GET",
                    url : "http://127.0.0.1:5000/api/teamstandings"
                }).then((response) => {
                    this.standings = response.data
                }).catch ((error) => {
                    console.log(error)
                })
            },
        },
        mounted() {
            this.league_standings();
        }
    }
</script>

<style scoped>
img {
    width: 90vw;
    height:55vh;
    
}

</style>