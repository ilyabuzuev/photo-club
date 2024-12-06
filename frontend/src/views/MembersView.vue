<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MembersService } from '@/services/members-service/MembersService';
import { MemberEntity } from '@/entities/member/MemberEntity';
import MemberComponent from '@/components/member/MemberComponent.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';

const members = ref<MemberEntity[]>();
const membersService = new MembersService();

onMounted(async () => {
  members.value = await membersService.getAll();

  console.log(members.value);

});
</script>

<template>
  <main>
    <section class="members">
      <ContainerComponent class="members__container">
        <ul class="members__list" v-if="members">
          <MemberComponent
            v-for="(member, index) in members"
            :key="index"
            :id="member.id"
            :firstname="member.firstname"
            :lastname="member.lastname"
            :email="member.email"
          />
        </ul>
      </ContainerComponent>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.members
  @apply h-full

  &__container
    @apply h-full flex items-center justify-center

  &__list
    @apply flex gap-3 flex-wrap
</style>
