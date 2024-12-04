<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MembersService } from '@/services/members-service/MembersService';
import { MemberEntity } from '@/entities/member/MemberEntity';
import Member from '@/components/member/Member.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';

const members = ref<MemberEntity[]>();
const membersService = new MembersService();

onMounted(async () => {
  members.value = await membersService.getAll();
});
</script>

<template>
  <main>
    <section class="members">
      <ContainerComponent class="members__container">
        <ul class="members__list" v-if="members">
          <Member
            v-for="(member, index) in members"
            :key="index"
            :id="member.id"
            :name="member.name"
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
