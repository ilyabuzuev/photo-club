<script setup lang="ts">
import { Query, ID } from 'appwrite';
import { account, client, database } from '@/utils/appwrite';
import Input from '@/components/Input.vue';

const promise = account.create(ID.unique(), 'test1@mail.com', '12345678',); 

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
// database.listDocuments('', ,)
</script>

<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shadow-sm">
    <form class="flex flex-col gap-y-4" @submit.prevent>
      <Input type="text" label="Логин" placeholder="Введите логин" label-positioning="col" />
      <Input type="text" label="Пароль" placeholder="Введите пароль" label-positioning="col" />
    </form>
  </div>
</template>
