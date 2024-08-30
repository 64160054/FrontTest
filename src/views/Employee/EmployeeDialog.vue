<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'
import { ref } from 'vue'
import type VForm from '@/components/VForm.vue'

const form = ref<VForm | null>(null)
const employeeStore = useEmployeeStore()

async function save() {
  const { valid } = await form.value!.validate()
  if (valid) {
    await employeeStore.saveEmployee()
  }
}
</script>

<template>
  <v-dialog v-model="employeeStore.dialog" max-width="1024">
    <v-card title="User">
      <v-card-text>
        <v-form ref="form">
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                label="ID*"
                required
                v-model="employeeStore.editedEmployees.id"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="FirstName*"
                required
                v-model="employeeStore.editedEmployees.firstname"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="LastName*"
                required
                v-model="employeeStore.editedEmployees.lastname"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <small class="text-caption text-medium-emphasis">*indicates required field</small>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Close" variant="plain" @click="employeeStore.dialog = false"></v-btn>
        <v-btn color="primary" text="Save" variant="tonal" @click="save()"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
