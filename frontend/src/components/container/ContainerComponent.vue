<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.container
  margin: auto
  padding: 0px 15px
  max-width: 1030px

@media (max-width: 1200px)
  .container
    max-width: 830px

@media (max-width: 1024px)
  .container
    max-width: 730px

@media (max-width: 880px)
  .container
    max-width: 530px
</style>
