<script setup lang="ts">
import AuthRegister from '../../../components/shared/AuthRegister.vue'
</script>

<template>
  <v-row class="h-100vh" no-gutters>
    <!---Left Part-->
    <v-col cols="12" lg="8" xl="8" class="d-flex align-center bg-lightprimary">
      <v-container>
        <div elevation="0" class="mb-3 d-flex justify-center">
            <img src="../../../assets/images/logos/logo.png" class="w-25" />
             </div>
        <div class="">
              <v-card elevation="0" class="registerBox">
                <v-card variant="outlined">
                  <v-card-text style="min-height: 27rem;" class="register_main_card" >

                    <AuthRegister />
                  </v-card-text>
                </v-card>
              </v-card>
        </div>
      </v-container>
    </v-col>
    <!---Left Part-->
    <!---Right Part-->
    <v-col cols="12" lg="4" xl="4" class="d-none d-lg-flex align-end justify-center bgpattern position-relative">
      <v-container>
        <div class="pa-10">
          <v-row justify="center">
            <v-col cols="12" xl="11">
              <div class="cardAnimation"></div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Right Part-->
  </v-row>
</template>
<style lang="scss">
.registerBox {
  max-width: 90%;
  margin: 0 auto;
}
.cardAnimation {
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    left: 35%;
    width: 260px;
    background-size: 380px;
    height: 290px;
    background-image: url('@/assets/images/auth/auth-signup-white-card.svg');
    background-repeat: no-repeat;
    background-position: center;
    animation: 15s wings ease-in-out infinite;
  }
  &:before {
    content: '';
    position: absolute;
    top: 12%;
    left: 25%;
    width: 360px;
    height: 350px;
    background-size: 460px;
    background-image: url('@/assets/images/auth/auth-signup-blue-card.svg');
    background-repeat: no-repeat;
    background-position: center;
    animation: 15s wings ease-in-out infinite;
    animation-delay: 1s;
  }
}
.bgpattern {
  background: url('@/assets/images/auth/auth-pattern.svg') repeat;
}
</style>
