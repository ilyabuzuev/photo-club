<script setup lang="ts">
import { computed, ref } from 'vue';
import { AuthService } from '@/services/auth-service/AuthService';
import { useInputsStore } from '@/stores/inputs.store';
import { useErrorsStore } from '@/stores/errors.store';
import ButtonComponent from '@/components/button/ButtonComponent.vue';
import CardComponent from '@/components/card/CardComponent.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';
import FormBoxComponent from '@/components/form/FormBoxComponent.vue';
import FormComponent from '@/components/form/FormComponent.vue';
import InputComponent from '@/components/input/InputComponent.vue';

const authService = new AuthService();
const inputsStore = useInputsStore();
const errorsStore = useErrorsStore();
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const isSubmitDisabled = computed(
  () =>
    !Boolean(
      firstname.value.length &&
        lastname.value.length &&
        email.value.length &&
        password.value.length &&
        confirmPassword.value.length,
    ),
);

async function submit() {
  const reponse = await authService.createAccount({
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
  });

  console.log(reponse);

}
</script>

<template>
  <div>
    <ContainerComponent class="register__container">
      <CardComponent paddings="xl">
        <FormComponent spacing="sm" class="w-80">
          <template #header>
            <h2 class="text-xl text-neutral-600 font-semibold">Регистрация</h2>
          </template>
          <template #content>
            <FormBoxComponent>
              <label class="font-normal text-neutral-400">Имя</label>
              <InputComponent v-model="firstname" :rules="{ isRequired: true }" />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-400">Фамилия</label>
              <InputComponent v-model="lastname" :rules="{ isRequired: true }" />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-400">E-mail</label>
              <InputComponent v-model="email" :rules="{ isRequired: true }" />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-400">Пароль</label>
              <InputComponent v-model="password" :rules="{ isRequired: true }" type="password" />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-400">Подтверждение пароля</label>
              <InputComponent
                v-model="confirmPassword"
                :rules="{ isRequired: true }"
                type="password"
              />
            </FormBoxComponent>
          </template>
          <template #footer>
            <div class="flex flex-col items-center gap-y-6 w-full">
              <ButtonComponent
                @click="submit"
                :disabled="isSubmitDisabled"
                class="text-white w-full bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-800"
                label="Регистрация"
              />
              <div class="text-neutral-400">
                Уже есть аккаунт?
                <router-link class="text-neutral-600 hover:text-red-500" to="/login"
                  >Войти</router-link
                >
              </div>
            </div>
          </template>
        </FormComponent>
      </CardComponent>
    </ContainerComponent>
  </div>
</template>

<style lang="sass" scoped>
.register__container
  @apply h-full flex items-center justify-center
</style>
