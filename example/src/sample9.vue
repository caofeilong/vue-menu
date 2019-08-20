<template>
  <hsc-menu-style-white>
    <hsc-menu>
      <hsc-menu-item label="Undo" keybind="meta+z" @click="window.alert('Undo')"/>
      <hsc-menu-separator/>
      <hsc-menu-item label="Cut" keybind="meta+x" @click="window.alert('Cut')"/>
      <hsc-menu-item label="Copy" keybind="meta+c" @click="window.alert('Copy')"/>
      <hsc-menu-item label="Paste" keybind="meta+v" @click="window.alert('Paste')" :disabled="true"/>
    </hsc-menu>
  </hsc-menu-style-white>
</template>

<script lang="ts">

  export default <any>{
    data() {
      return {
        checked: true,
        selected: ['A'],
      }
    },
    computed: {
      window() {
        return window
      },
    }
  }
</script>
