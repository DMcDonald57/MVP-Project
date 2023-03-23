<template>
    <div>
        <v-form class="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="email" label="Email" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="password" label="Password" required
                        :type="show ?'text':'password'" :append-icon="show ?'mdi-eye':
                        'mdi-eye-off'" @click:append="show=!show"></v-text-field>
                    </v-col>
                    
                </v-row>
            </v-container>
            
        </v-form>
                    <v-col>
                        <v-btn class="button" @click="coach_login">Play Ball!</v-btn> 
                        <!-- <p>or</p> -->
                        <!-- <v-btn @click="coach_logout">Update Profile</v-btn> -->
                    </v-col>
    </div>
</template>

<script>

import axios from "axios"

    export default {
        name: 'coachAccess',

    data() {
        return{
            email : "",
            password: "",
            show:false
        }
    },
methods: {
    coach_login(){
        axios.request({
        method : "POST",
        url : "http://127.0.0.1:5000/api/coachsession",
        data : {
        email : this.email,
        password : this.password
        }
    }).then((response) => {
        console.log(response)
        this.$router.push("./team1Roster")
        
    }).catch (() => {
    alert("Login Failed")
    })
    }
}
    }

</script>

<style scoped>

.valid {
    padding-top: 50px;
    padding-left: 25%;
    color: black;
    font-weight: bold;
}
.button{
    padding-left: 50%;
    
}

</style>