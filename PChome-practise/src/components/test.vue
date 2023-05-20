<template>
  <div>
    <input
      type="password"
      :type="showPassword ? 'text' : 'password'"
      v-model="password1"
    />
    <i class="password-icon" @click="togglePasswordVisibility(1)">
      {{ showPassword ? "Hide" : "Show" }}
    </i>
    <br />
    <input
      type="password"
      :type="showPassword ? 'text' : 'password'"
      v-model="password2"
    />
    <i class="password-icon" @click="togglePasswordVisibility(2)">
      {{ showPassword ? "Hide" : "Show" }}
    </i>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const password1 = ref("");
    const password2 = ref("");
    const showPassword = ref(false);

    function togglePasswordVisibility(inputNumber) {
      if (inputNumber === 1) {
        showPassword.value = !showPassword.value;
      }
    }

    return {
      password1,
      password2,
      showPassword,
      togglePasswordVisibility,
    };
  },
};
</script>

<style>
.password-icon {
  cursor: pointer;
}
</style>
