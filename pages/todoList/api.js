import request from '../../utils/request.js'

export function addListSubmit(params) {
    return request(`/todoList/addList`,params,'POST')
}

export function editListSubmit(params) {
    return request(`/todoList/editList`,params,'PUT')
}

export function deleteListSubmit(params) {
    return request(`/todoList/deleteList`,params,'DELETE')
}

export function getListSubmit(params) {
    return request(`/todoList/getList`,params,'GET')
}