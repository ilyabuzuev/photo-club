<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MembersService } from '@/services/members-service/MembersService';
import { MemberEntity } from '@/entities/member/MemberEntity';
import Member from '@/components/member/Member.vue';

const members = ref<MemberEntity[]>();
const membersService = new MembersService();

onMounted(async () => {
  members.value = await membersService.getAll();
});
</script>

<template>
  <main>
    <section class="members">
      <div class="menbers__container container">
        <ul class="members__list" v-if="members">
          <Member
            v-for="(member, index) in members"
            :key="index"
            :id="member.id"
            :name="member.name"
            :email="member.email"
          />
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.members

  &__list
    @apply flex gap-3 flex-wrap
</style>
