<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { MemberEntity } from '@/entities/member/MemberEntity';
import { MembersService } from '@/services/members-service/MembersService';
import Member from '@/components/member/Member.vue';

const member = ref<MemberEntity>();
const membersService = new MembersService();
const route = useRoute();

onMounted(async () => {
  member.value = await membersService.getByEmail(route.params.email as string);
});
</script>

<template>
  <main v-if="member">
    <div class="container">
      <Member :id="member.id" :name="member.name" :email="member.email" />
    </div>
  </main>
</template>
