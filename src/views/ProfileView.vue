<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ID } from 'appwrite';
import { account, storage, database } from '@/utils/appwrite';
import { DB_ID, PHOTOS_COLLECTION_ID } from '@/app.constants';
import { useAuthStore } from '@/store/auth.store';
import { useUsersStore } from '@/store/users.store';
import { useLoaderStore } from '@/store/loader.store';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Avatar from '@/components/Avatar.vue';
import Loader from '@/components/Loader.vue';
import Button from '@/components/Button.vue';
import PhotoList from '@/components/PhotoList.vue';
import type { Input } from 'postcss';

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

const authStore = useAuthStore();
const usersStore = useUsersStore();
const loaderStore = useLoaderStore();

const user = ref<User>();
const file = ref<File | null>();

async function createFile() {
  if (!file.value) {
    console.log('файл не выбран');
    return;
  }

  try {
    const response = await storage.createFile('66f328a2003e2d93b1be', ID.unique(), file.value);
    const currentAccount = await account.get();

    const url = `https://cloud.appwrite.io/v1/storage/buckets/66f328a2003e2d93b1be/files/${response.$id}/view?project=66efbca500050ed8a3da`;
    const data = { userId: currentAccount.$id, url: url, createdAt: response.$createdAt };

    await database.createDocument(DB_ID, PHOTOS_COLLECTION_ID, ID.unique(), data);
  } catch (error) {
    console.log(error);
  }
}

function inputChangeHadle(event: InputEvent) {
  const target = event.target as HTMLInputElement;
  file.value = target.files![0];

  console.log(file.value);
}

onMounted(async () => {
  try {
    loaderStore.set(true);

    user.value = await usersStore.getUserById;
  } catch (error) {
    console.log(error);
  } finally {
    loaderStore.set(false);
  }
});
</script>

<template>
  <Header />
  <Main>
    <div v-if="loaderStore.isLoading !== true">
      <div v-if="user" class="flex flex-col gap-8">
        <section>
          <Avatar />
          <div class="flex gap-2">
            <div>
              {{ user?.firstname }}
            </div>
            <div>
              {{ user?.lastname }}
            </div>
          </div>
          <Button @click="createFile" class="py-2 px-4 text-white bg-zinc-600 rounded-md"
            >Добавить фото</Button
          >
          <input @change="inputChangeHadle" type="file" placeholder="file" />
        </section>
        <section>
          <PhotoList :userId="user.id" />
        </section>
      </div>
    </div>
    <Loader v-else />
  </Main>
</template>
