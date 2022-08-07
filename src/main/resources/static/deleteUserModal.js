const DeleteModal = document.getElementById('ModalDelete')
DeleteModal.addEventListener('show.bs.modal', event => {
    const Dbutton = event.relatedTarget
    const DuserId = Dbutton.getAttribute('data-bs-userId')
    const DuserName = Dbutton.getAttribute('data-bs-userName')
    const DuserLastname = Dbutton.getAttribute('data-bs-userLastname')
    const DuserAge = Dbutton.getAttribute('data-bs-userAge')
    const DuserEmail = Dbutton.getAttribute('data-bs-userEmail')

    const DmodaluserId = DeleteModal.querySelector('#userIdDelete')
    const DmodaluserName = DeleteModal.querySelector('#userNameDelete')
    const DmodaluserLastname = DeleteModal.querySelector('#userLastnameDelete')
    const DmodaluserAge = DeleteModal.querySelector('#userAgeDelete')
    const DmodaluserEmail = DeleteModal.querySelector('#userEmailDelete')

    DmodaluserId.value = DuserId
    DmodaluserName.value = DuserName
    DmodaluserLastname.value = DuserLastname
    DmodaluserAge.value = DuserAge
    DmodaluserEmail.value = DuserEmail
})