<template>
  <v-container>
     <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Account Information</h4>
      </v-flex>
    </v-layout>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSubmit">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="prefix"
                      label="Prefix"
                      id="prefix"
                      type="prefix"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="firstname"
                      label="FirstName"
                      id="firstName"
                      type="firstName"
                      required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="lastName"
                      label="LastName"
                      id="lastName"
                      type="lastName"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="hphone"
                      label="Home Phone"
                      id="hphone"
                      type="hphone" ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                   <v-text-field
                      name="cphone"
                      label="Cell Phone"
                      id="cphone"
                      type="cphone" ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="jobTitle"
                      label="Job Title"
                      id="jobTitle"
                      type="jobTitle"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      name="cOrg"
                      label="Company / Organization"
                      id="cOrg"
                      type="cOrg"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">
                      Save
                       <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                    </v-btn>
                    <success-dialog></success-dialog>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SuccessDialog from '../Meetup/Registration/SuccessDialog'
  export default {
    component: {
      SuccessDialog
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        this.$router.push('/')
      }
    }
  }
</script>
