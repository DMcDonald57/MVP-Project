<template>
    <div>
        <h1>ROSTER MAINTAINENCE</h1>
        <div class="buttons">
            <v-btn rounded="pill" color="black" @click="teamFullRoster">List Roster</v-btn>
            <v-btn rounded="pill" color="black">Add Player</v-btn>
            <v-btn rounded="pill" color="black">Delete Player</v-btn>
            <v-btn rounded="pill" color="black">Update Player Information</v-btn>
        </div>
        <div v-for="player in players" :key="player.first_name">
    <h3>{{player.first_name}} {{player.last_name}} {{player.phone_num}} {{player.email}} {{player.position_played }}</h3>
    </div>

    </div>
</template>

<script>

import axios from "axios"

    export default {
        name: 'team1Roster',
        
        data:() => {
            return{
            players: []
        }
    },
methods: {
    teamFullRoster(){
        axios.request({
            method : "GET",
            url : "http://127.0.0.1:5000/api/rosterupdate",
            data: {
                coach_id : this.coach_id
            }
        }).then((response) => {
        this.players = response.data
        }).catch ((error) => {
        console.log(error)
        })
    },
    },
}
</script>

<style scoped>

.buttons{
    padding: 50px;
    margin: 25px
}
h1{
    padding-top: 50px
}

</style>