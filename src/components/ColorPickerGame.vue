<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import useColorPicker from '../composables/useColorPicker'

export default {
  setup() {
    const colors = ["green", "red", "blue", "purple"];
    const {matchColor, message} = useColorPicker(colors)

    return { colors, matchColor,message};
  },
};
</script>

<style></style>
