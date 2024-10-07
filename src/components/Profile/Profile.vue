<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/store/auth.store';
import { useLoaderStore } from '@/store/loader.store';
import { Query } from 'appwrite';
import { database, account } from '@/utils/appwrite';
import { DB_ID, USERS_COLLECTION_ID } from '@/app.constants';
import type { UsersFromDB } from '@/interfaces/UsersFromDB';
import DropdownButton from '@/components/DropdownButton/DropdownButton.vue';
import Loader from '@/components/Loader/Loader.vue';
import Avatar from '@/components/Avatar/Avatar.vue';
import { Icon } from '@iconify/vue';

const authStore = useAuthStore();
const loaderStore = useLoaderStore();

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
  // loaderStore.set(true);

  try {
    loaderStore.set(true);

    user.value = await getCurrentUser();
  } catch (err) {
    console.log(err);
  } finally {
    loaderStore.set(false);
  }
});
</script>

<template>
  <Loader v-if="loaderStore.isLoading && !authStore.isAuth" />
  <div v-else>
    <DropdownButton v-if="authStore.isAuth">
      <template v-slot:buttonContent>
        <Icon icon="ic:round-keyboard-arrow-down" color="gray" width="32" />
        <Avatar />
      </template>
      <template v-slot:menuContent>
        <div class="flex flex-col gap-2">
          <div>
            <p v-if="authStore.userEmail" class="flex gap-1 text-lg text-gray-800">
              <span>{{ user?.firstname }}</span>
              <span>{{ user?.lastname }}</span>
            </p>
          </div>
          <div class="flex items-center gap-1">
            <Icon icon="ic:round-account-box" width="24" class="text-gray-800" />
            <RouterLink
              to="/profile"
              class="text-lg text-gray-800 hover:text-red-500 ease-out duration-200"
              >Профиль</RouterLink
            >
          </div>
          <div class="flex items-center gap-1">
            <Icon icon="ic:round-log-in" width="24" class="text-red-500" />
            <button
              @click="authStore.logout"
              class="text-lg text-red-500 hover:text-gray-600 ease-out duration-200"
            >
              Выйти
            </button>
          </div>
        </div>
      </template>
    </DropdownButton>
    <div v-else>
      <RouterLink to="/login" class="hover:text-red-500 ease-out duration-200"> Войти </RouterLink>
    </div>
  </div>
</template>
