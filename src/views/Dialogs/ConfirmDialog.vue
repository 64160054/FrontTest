<script setup lang="ts">
import { rejects } from "assert";
import { resolve } from "path";
import { ref } from "vue";

const dialog = ref(false);

let onOk: (value: unknown) => void
let onCancel: (reason?: any) => void

const openDialog = () => {
  dialog.value = true;
  return new Promise((resolve, rejects) => {
    onOk = resolve
    onCancel = rejects
  })
}

defineExpose({ openDialog })

function closeFunc() {
  dialog.value = false;
  onCancel("Cancel")
}

function okFunc() {
  dialog.value = false;
  onOk("Ok")
}

</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="400" persistent>
      <v-card text="Are you sure to delete this item." title="Please Confirm">
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="closeFunc">
            Cancel
          </v-btn>
          <v-btn @click="okFunc">
            Ok
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>