<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'
import { onMounted, ref } from 'vue'
import EmployeeDialog from '@/views/Employee/EmployeeDialog.vue'
const employeeStore = useEmployeeStore()
onMounted(async () => {
  await employeeStore.getEmployee()
})
const deleteEmp = async (id: number) => {
  try {
    employeeStore.deleteEmployee(id)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <EmployeeDialog></EmployeeDialog>
  <v-container>
    <v-table height="600px">
      <thead>
        <tr>
          <th><v-btn @click="employeeStore.dialog = true" icon="mdi-plus"></v-btn></th>
          <th></th>
          <th></th>
          <th></th>
          <th>EmployeeID</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>FirstName</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>LastName</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of employeeStore.employees" :key="item.id">
          <td>
            <v-btn class="mr-5" @click="employeeStore.editEmployee(item)" icon="mdi-pencil"></v-btn>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ item.id }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ item.firstname }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ item.lastname }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><v-btn @click="deleteEmp(item.id!)" icon="mdi-delete"></v-btn></td>
        </tr>
      </tbody> </v-table
  ></v-container>
</template>
