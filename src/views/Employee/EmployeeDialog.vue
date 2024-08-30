<script setup lang="ts">
import {ref} from "vue";
import type VForm from '@/components/VForm.vue';
import { useEmployeeStore } from "@/stores/employee";

const form = ref<VForm | null>(null);
  const employeeStore = useEmployeeStore()

async function save() {
  
  const { valid } = await form.value!.validate();
  if(valid) {
    await employeeStore.saveEmployee();
  }
}

</script>

<template>
  <v-dialog v-model="employeeStore.dialog" max-width="1024">
    <v-card title="Employee">
      <v-card-text>
        <v-form ref="form">
          <v-row dense>
            <v-col cols="12">
              <v-text-field label="Name*" required v-model="employeeStore.editedEmployee.name"
                :rules="[v => !!v || 'Item is required']"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Surname*" required v-model.number="employeeStore.editedEmployee.surname"
                :rules="[v => !!v || 'Item is required']"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <small class="text-caption text-medium-emphasis">*indicates required field</small>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="employeeStore.dialog = false"></v-btn>
        <v-btn color="primary" text="Save" variant="tonal" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>