<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { MemberEntity } from '@/entities/member/MemberEntity';
import { MembersService } from '@/services/members-service/MembersService';
import MemberComponent from '@/components/member/MemberComponent.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';

const member = ref<MemberEntity>();
const membersService = new MembersService();
const route = useRoute();

onMounted(async () => {
  member.value = await membersService.getByEmail(route.params.email as string);
});
</script>

<template>
  <main v-if="member">
    <section class="member">
      <ContainerComponent class="member__container">
        h
        <MemberComponent
          :id="member.id"
          :firstname="member.firstname"
          :lastname="member.lastname"
          :email="member.email"
        />
      </ContainerComponent>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.member
  @apply flex items-center h-full
</style>
