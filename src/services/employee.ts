import type { Employee } from '@/types/Employee'
import http from './axios'
function getEmployees() {
  return http.get('/employees')
}

function saveEmployees(employee: Employee) {
  return http.post('/employees', employee)
}

function updateEmployees(id: number, employee: Employee) {
  return http.patch('/employees/'+ id, employee)
}

function deleteEmployees(id: number) {
  return http.delete('/employees/'+ id)
}

export default {
  getEmployees,
  saveEmployees,
  updateEmployees,
  deleteEmployees,
}