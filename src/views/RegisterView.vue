<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { Query, ID, AppwriteException } from 'appwrite';
import { account, client, database } from '@/utils/appwrite';
import { register } from '@/utils/register';
import { login } from '@/utils/login';
import { useUserStore } from '@/stores/user.store';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

const router = useRouter();
const userStore = useUserStore();
// const promise = account.create(ID.unique(), 'test1@mail.com', '12345678');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

// database.listDocuments('', ,)



async function registerAccount() {
  userStore.register({ id: ID.unique(), email: email.value, password: password.value });
}
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shadow-sm"
  >
    <form class="flex flex-col gap-y-4" @submit.prevent>
      <Input
        v-model="email"
        :id="uuidv4()"
        type="email"
        label="Email"
        placeholder="Введите email"
        label-positioning="col"
        isValidate
      />
      <Input
        :id="uuidv4()"
        v-model="password"
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        label-positioning="col"
        isValidate
      />
      <Input
        :id="uuidv4()"
        v-model="passwordConfirm"
        type="password"
        label="Подтверждение пароля"
        placeholder="Подтвердите пароль"
        label-positioning="col"
      />
      <Button
        class="py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 ease-out duration-200"
        label="Зарегестрироваться"
        @clickEvent="registerAccount"
      />
    </form>
  </div>
</template>
