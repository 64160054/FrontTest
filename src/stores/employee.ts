import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Employee } from '@/types/Employee'
import employeeService from '@/services/employee'

export const useEmployeeStore = defineStore('Employee', () => {
  const dialog = ref(false)
  const employees = ref<Employee[]>([])
  const editedEmployees = ref<Employee>({
    firstname: '',
    lastname: ''
  })

  watch(dialog, (newDialog, oldDialog) => {
    if (!newDialog) {
      editedEmployees.value = { firstname: '', lastname: '' }
    }
  })

  async function getEmployee() {
    try {
      const res = await employeeService.getEmployees()
      employees.value = res.data
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  async function saveEmployee() {
    try {
      if (editedEmployees.value.id) {
        const res = await employeeService.updateEmployees(
          editedEmployees.value.id,
          editedEmployees.value
        )
      } else {
        const res = await employeeService.saveEmployees(editedEmployees.value)
      }

      dialog.value = false
      await getEmployee()
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteEmployee(id: number) {
    try {
      const res = await employeeService.deleteEmployees(id)
      await getEmployee()
    } catch (e) {
      console.log(e)
    }
  }

  async function editEmployee(employee: Employee) {
    editedEmployees.value = JSON.parse(JSON.stringify(employee))
    dialog.value = true
  }

  return {
    dialog,
    employees,
    editedEmployees,
    getEmployee,
    editEmployee,
    saveEmployee,
    deleteEmployee
  }
})
