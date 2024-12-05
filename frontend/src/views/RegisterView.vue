<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from '@/components/button/ButtonComponent.vue';
import CardComponent from '@/components/card/CardComponent.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';
import FormBoxComponent from '@/components/form/FormBoxComponent.vue';
import FormComponent from '@/components/form/FormComponent.vue';
import InputComponent from '@/components/input/InputComponent.vue';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
</script>

<template>
  <div>
    <ContainerComponent class="register__container">
      <CardComponent paddings="xl">
        <FormComponent class="w-80">
          <template #header>
            <h2 class="text-xl text-neutral-800 font-semibold">Регистрация</h2>
          </template>
          <template #content>
            <FormBoxComponent>
              <label class="font-normal text-neutral-600">Имя</label>
              <InputComponent
                v-model="name"
                :rules="{ isRequired: true, minLength: 2, maxLength: 20 }"
              />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-600">E-mail</label>
              <InputComponent
                v-model="email"
                :rules="{ isRequired: true, minLength: 2, maxLength: 20 }"
              />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-600">Пароль</label>
              <InputComponent
                v-model="password"
                :rules="{ isRequired: true, minLength: 2, maxLength: 20 }"
              />
            </FormBoxComponent>
            <FormBoxComponent>
              <label class="font-normal text-neutral-600">Подтверждение пароля</label>
              <InputComponent
                v-model="confirmPassword"
                :rules="{ isRequired: true, minLength: 2, maxLength: 20 }"
              />
            </FormBoxComponent>
          </template>
          <template #footer>
            <ButtonComponent class="text-white w-full bg-neutral-900" label="Регистрация" />
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
