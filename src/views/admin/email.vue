<!--<script>-->
<!--import {Steps, Step, Button , message} from 'ant-design-vue'-->

<!--import AuthRegister from '../authentication/authForms/AuthRegister.vue'-->
<!--export default {-->
<!--  components: {-->
<!--    'a-steps': Steps,-->
<!--    'a-step': Step,-->
<!--    'a-button': Button,-->
<!--    AuthRegister-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      current: 0,-->
<!--      steps: [-->
<!--        { title: 'Personal Information', content: AuthRegister },-->
<!--        { title: 'Licensing Information', content: 'Second-content' },-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    next() {-->
<!--      this.current++-->
<!--    },-->
<!--    previous() {-->
<!--      this.current&#45;&#45;-->
<!--    },-->
<!--    done(){-->
<!--      message.success('Processing Completed')-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->

<!--<template>-->

<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <a-steps :current="current">&ndash;&gt;-->
<!--&lt;!&ndash;      <a-step v-for="item in steps" :key="item.title" :title="item.title" />&ndash;&gt;-->
<!--&lt;!&ndash;    </a-steps>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="steps-content">&ndash;&gt;-->
<!--&lt;!&ndash;      {{ steps[current].content }}&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="steps-action">&ndash;&gt;-->
<!--&lt;!&ndash;      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>&ndash;&gt;-->
<!--&lt;!&ndash;      <a-button&ndash;&gt;-->
<!--&lt;!&ndash;          v-if="current == steps.length - 1"&ndash;&gt;-->
<!--&lt;!&ndash;          type="primary"&ndash;&gt;-->
<!--&lt;!&ndash;          @click="done"&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;        Done&ndash;&gt;-->
<!--&lt;!&ndash;      </a-button>&ndash;&gt;-->
<!--&lt;!&ndash;      <a-button v-if="current > 0" style="margin-left: 8px" @click="previous">Previous</a-button>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--  <div>-->
<!--    <a-steps :current="current">-->
<!--      <a-step v-for="item in steps" :key="item.title" :title="item.title" />-->
<!--    </a-steps>-->
<!--    <div class="steps-content">-->
<!--      <component :is="steps[current].content" />-->
<!--    </div>-->
<!--    <div class="steps-action">-->
<!--      <a-button type="primary" class="mx-1" v-if="current < steps.length - 1"  @click="next">Next</a-button>-->
<!--      <a-button class="mx-1" v-if="current > 0" style="margin-left: 8px" @click="previous">Previous</a-button>-->
<!--      <a-button type="primary" class="mx-1" v-if="current == steps.length - 1"  @click="done">Create Account</a-button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.steps-content {-->
<!--  margin-top: 16px;-->
<!--  border: 1px dashed #e9e9e9;-->
<!--  border-radius: 6px;-->
<!--  background-color: #fafafa;-->
<!--  min-height: 200px;-->
<!--  text-align: center;-->
<!--  padding-top: 80px;-->
<!--}-->

<!--.steps-action {-->
<!--  margin-top: 24px;-->
<!--}-->
<!--</style>-->


<script setup lang="ts">

</script>

<template>

</template>

<style scoped lang="scss">

</style>
