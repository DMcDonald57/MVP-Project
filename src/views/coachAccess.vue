<template>
    <div>
        <v-form class="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="Email" label="Email" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="Password" label="Password" required></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>

// import axios from axios

    export default {
        name: 'coachAccess'
    }

</script>

<style scoped>

.valid {
    padding-top: 300px;
}

</style>