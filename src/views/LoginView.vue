<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuid } from 'uuid';
import { useAuthStore } from '@/store/auth.store';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Main from '@/components/Main.vue';
import Logo from '@/components/Logo.vue';

const email = ref('');
const password = ref('');

const router = useRouter();
const authStore = useAuthStore();

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
        <h2 class="text-center text-4xl font-medium">Вход</h2>
      </div>
      <form class="flex flex-col gap-y-7" @submit.prevent>
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
        <Button
          class="py-3 text-2xl text-white bg-zinc-700 rounded-full hover:bg-zinc-600 ease-out duration-200"
          @clickEvent="login"
        >
          Войти
        </Button>
      </form>
      <div class="mt-5 text-lg font-medium text-center">
        <span>Ещё нет аккаунта? </span>
        <RouterLink to="/register">
          <span class="text-gray-500 hover:text-red-500 ease-out duration-200"
            >Зарегистрироваться</span
          >
        </RouterLink>
        <span>!</span>
      </div>
    </div>
  </Main>
</template>
