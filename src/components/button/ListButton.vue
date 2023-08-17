<script setup lang="ts">
import { reactive } from 'vue'

import Button from './ButtonCustom.vue'
import FacebookIcon from '../../assets/icon/facebook-icon.svg'
import XIcon from '../../assets/icon/x-icon.svg'
import Linkin from '../../assets/icon/linkin-icon.svg'

const listButton = reactive([
  {
    id: 1,
    altText: 'facebook-icon',
    svgIcon: FacebookIcon
  },
  {
    id: 2,
    altText: 'linkin-icon',
    svgIcon: Linkin
  },
  {
    id: 3,
    altText: 'x-icon',
    svgIcon: XIcon
  }
])
</script>

<template>
  <div class="mb-4 flex justify-around">
    <Button
      v-for="item in listButton"
      :alt-text="item.altText"
      :url-svg-icon="item.svgIcon"
      :key="item.id"
      type="button"
    />
  </div>
</template>

<styled></styled>
