<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EmployeeDialog from '@/views/employee/EmployeeDialog.vue'
import ConfirmDialog from '@/views/Dialogs/ConfirmDialog.vue'
import { useEmployeeStore } from "@/stores/employee";
import {
  mdiTrashCan,
  mdiPlusCircle,
  mdiPencilBox,
} from "@mdi/js"

const employeeStore = useEmployeeStore()

const confirmDlg = ref();

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
  <v-table height="700px">
    <thead>
      <tr>
        <th><v-btn class="mb-1" @click="employeeStore.dialog = true" :icon="mdiPlusCircle" color="green"></v-btn></th>
        <th class="font-weight-bold">EmployeeID</th>
        <th class="font-weight-bold">FirstName</th>
        <th class="font-weight-bold">LastName</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of employeeStore.employees" :key="item.id">
        <td> <v-btn class="mr-5" @click="employeeStore.editEmployee(item)" :icon="mdiPencilBox" color="blue"></v-btn></td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.surname }}</td>
        <td><v-btn @click="deleteEmp(item.id!)" :icon="mdiTrashCan" color="red"></v-btn></td>
      </tr>
    </tbody>
  </v-table>
  <ConfirmDialog ref="confirmDlg"></ConfirmDialog>
</template>
