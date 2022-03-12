<template>
  <v-dialog persistent v-model="registerDialog">
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title style="color:green">Saved successfully!!</v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                flat
                @click="registerDialog = false">Ok</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    props: ['meetupId'],
    name: 'register',
    data () {
      return {
        registerDialog: false
      }
    }
  }
</script>
