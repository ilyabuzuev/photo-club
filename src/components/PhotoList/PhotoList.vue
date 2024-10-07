<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Query } from 'appwrite';
import { account, database } from '@/utils/appwrite';
import { DB_ID, PHOTOS_COLLECTION_ID } from '@/app.constants';
import { useLoaderStore } from '@/store/loader.store';
import Loader from '@/components/Loader/Loader.vue';

interface Props {
  userId: string;
}

defineProps<Props>();

const loaderStore = useLoaderStore();

const photoList = ref();

async function getUserPhotos() {
  const currentAccount = await account.get();

  const response = await database.listDocuments(DB_ID, PHOTOS_COLLECTION_ID, [
    Query.equal('userId', currentAccount.$id)
  ]);

  console.log(response);

  return response;
}

onMounted(async () => {
  photoList.value = await getUserPhotos();

  // try {
  //   loaderStore.set(true);

  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   loaderStore.set(false);
  // }
});
</script>

<template>
  <div v-if="loaderStore.isLoading !== true">
    <div v-if="photoList" class="flex p-8 bg-white rounded-xl">
      <img
        class="w-64 hover:scale-125 ease-in-out duration-300 cursor-pointer"
        v-if="photoList.documents.length"
        v-for="(photo, index) in photoList.documents"
        :key="index"
        :src="photo.url"
        :alt="photo.description"
      />
      <div v-else>Фотографии не найдены</div>
    </div>
  </div>
  <Loader v-else />
</template>
