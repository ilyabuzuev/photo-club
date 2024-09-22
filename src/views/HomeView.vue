<script setup lang="ts">
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66efbca500050ed8a3da');

const account = new Account(client);
const database: Databases = new Databases(client);

console.log(database);

</script>

<template>
  <main>
    <h1>hello, world</h1>
  </main>
</template>
