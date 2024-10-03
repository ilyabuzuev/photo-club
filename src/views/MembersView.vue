<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUsersStore } from '@/store/users.store';
import type { UsersFromDB } from '@/interfaces/UsersFromDB';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Member from '@/components/Member.vue';

const userStore = useUsersStore();

const users = ref<UsersFromDB['documents']>();

onMounted(async () => {
  await userStore.setUsers();

  users.value = userStore._users;

  console.log(users.value);
  
});
</script>

<template>
  <Header />
  <Main>
    <Member
      v-for="(user, index) in users"
      :key="index"
      :firstname="user.firstname"
      :lastname="user.lastname"
    />
  </Main>
</template>
