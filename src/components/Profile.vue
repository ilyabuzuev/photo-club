<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/store/auth.store';
import { Query } from 'appwrite';
import { database, account } from '@/utils/appwrite';
import { DB_ID, USERS_COLLECTION_ID } from '@/app.constants';
import DropdownButton from '@/components/DropdownButton.vue';
import type { UsersFromDB } from '@/interfaces/UsersFromDB';

const authStore = useAuthStore();

interface User {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: string[];
  $updatedAt: string;
  firstname: string;
  lastname: string;
  id: string;
}

const user = ref<User>();

async function getCurrentUser() {
  const currentAccount = await account.get();

  const response: UsersFromDB = await database.listDocuments(DB_ID, USERS_COLLECTION_ID, [
    Query.equal('id', currentAccount.$id)
  ]);

  if (!response) console.log('error');

  console.log(response);

  return response.documents[0];
}

onMounted(async () => {
  user.value = await getCurrentUser();
});
</script>

<template>
  <DropdownButton v-if="authStore.isAuth">
    <template v-slot:content>
      <div>
        <p v-if="authStore.userEmail">
          <span>{{ user?.firstname }}</span>
          <span>{{ user?.lastname }}</span>
        </p>
      </div>
      <div>
        <button @click="authStore.logout" class="hover:text-red-500 ease-out duration-200">
          Выйти
        </button>
      </div>
    </template>
  </DropdownButton>
  <div v-else>
    <RouterLink to="/login" class="hover:text-red-500 ease-out duration-200"> Войти </RouterLink>
  </div>
</template>
