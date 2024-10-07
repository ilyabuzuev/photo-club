<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuid } from 'uuid';
import { ID } from 'appwrite';
import { database } from '@/utils/appwrite';
import { DB_ID, USERS_COLLECTION_ID } from '@/app.constants';
import { useAuthStore } from '@/store/auth.store';
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import Main from '@/components/Main/Main.vue';
import Logo from '@/components/Logo/Logo.vue';

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

const router = useRouter();
const authStore = useAuthStore();

async function registerAccount() {
  const userId = ID.unique();
  const data = { id: userId, firstname: firstname.value, lastname: lastname.value };

  console.log(userId);

  await authStore.register({ id: userId, email: email.value, password: password.value });
  await login();
  await database.createDocument(DB_ID, USERS_COLLECTION_ID, userId, data);
}

async function login() {
  // isLoadingStore.set(true);

  try {
    authStore.login({ email: email.value, password: password.value });
  } catch (error) {
    console.log(error);

    await router.push('/login');

    // isLoadingStore.set(false);
  } finally {
    email.value = '';
    password.value = '';

    await router.push('/');

    // isLoadingStore.set(false);
  }
}
</script>

<template>
  <div class="flex justify-center p-4 bg-gray-100">
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4">
        <Logo />
      </div>
    </div>
  </div>
  <Main>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shadow-md"
    >
      <div class="mb-6">
        <h2 class="text-center text-4xl font-medium">Регистрация</h2>
      </div>
      <form class="flex flex-col gap-y-7 justify-stretch" @submit.prevent>
        <Input
          v-model="firstname"
          :id="uuid()"
          type="text"
          placeholder="Имя"
          label-positioning="col"
          isValidate
        />
        <Input
          v-model="lastname"
          :id="uuid()"
          type="text"
          placeholder="Фамилия"
          label-positioning="col"
          isValidate
        />
        <Input
          v-model="email"
          :id="uuid()"
          type="email"
          placeholder="Email"
          label-positioning="col"
          isValidate
        />
        <Input
          :id="uuid()"
          v-model="password"
          type="password"
          placeholder="Пароль"
          label-positioning="col"
          isValidate
        />
        <Input
          :id="uuid()"
          v-model="passwordConfirm"
          type="password"
          placeholder="Подтверждение пароля"
          label-positioning="col"
        />
        <Button
          class="py-4 text-2xl text-white bg-zinc-700 rounded-full hover:bg-zinc-600 ease-out duration-200"
          label="Зарегистрироваться"
          @clickEvent="registerAccount"
        >
          Зарегистрироваться
        </Button>
      </form>
      <div class="mt-5 text-lg font-medium text-center">
        Уже есть аккаунт?
        <RouterLink to="/login" class="text-gray-500 hover:text-red-500 ease-out duration-200"
          >Войти</RouterLink
        >!
      </div>
    </div>
  </Main>
</template>
