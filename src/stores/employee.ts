import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Employee } from '@/types/Employee'
import employeeService from '@/services/employee'

export const useEmployeeStore = defineStore('Employee', () => {
  const dialog = ref(false)
  const employees = ref<Employee[]>([])
  const editedEmployee = ref<Employee>({
    name: '',
    surname: ''
  })

  watch(dialog, (newDialog, oldDialog) => {
    if (!newDialog) {
      editedEmployee.value = { name: '', surname: '' }
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
      if (editedEmployee.value.id) {
        const res = await employeeService.updateEmployees(editedEmployee.value.id, editedEmployee.value)
      } else {
        const res = await employeeService.saveEmployees(editedEmployee.value)
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
    editedEmployee.value = JSON.parse(JSON.stringify(employee))
    dialog.value = true
  }

  return { employees, getEmployee, dialog, editedEmployee, saveEmployee, editEmployee, deleteEmployee }
})
