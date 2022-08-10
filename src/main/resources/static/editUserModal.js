const editModal = document.getElementById('editUserModal')
editModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const userId = button.getAttribute('data-bs-userId')
    const userName = button.getAttribute('data-bs-userName')
    const userLastname = button.getAttribute('data-bs-userLastname')
    const userAge = button.getAttribute('data-bs-userAge')
    const userEmail = button.getAttribute('data-bs-userEmail')

    const modaluserId = editModal.querySelector('#userId')
    const modaluserName = editModal.querySelector('#userName')
    const modaluserLastname = editModal.querySelector('#userLastname')
    const modaluserAge = editModal.querySelector('#userAge')
    const modaluserEmail = editModal.querySelector('#userEmail')

    modaluserId.value = userId
    modaluserName.value = userName
    modaluserLastname.value = userLastname
    modaluserAge.value = userAge
    modaluserEmail.value = userEmail
})
