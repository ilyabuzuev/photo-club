<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { database } from '@/utils/appwrite';
import { DB_ID, USERS_COLLECTION_ID } from '@/app.constants';
import { useUsersStore } from '@/store/users.store';
import type { UsersFromDB } from '@/interfaces/UsersFromDB';
import Header from '@/components/Header/Header.vue';
import Main from '@/components/Main/Main.vue';
import Member from '@/components/Member/Member.vue';

const userStore = useUsersStore();

const users = ref<UsersFromDB['documents']>();

async function fetchUsers() {
  const response: UsersFromDB = await database.listDocuments(DB_ID, USERS_COLLECTION_ID);

  return response;
}

onMounted(async () => {
  // await userStore.setUsers();

  users.value = (await fetchUsers()).documents;

  console.log(users.value);
});
</script>

<template>
  <Header />
  <Main>
    <section class="flex gap-4">
      <Member
        v-for="(user, index) in users"
        :key="index"
        :firstname="user.firstname"
        :lastname="user.lastname"
      />
    </section>
  </Main>
</template>
