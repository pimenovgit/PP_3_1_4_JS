const formDelete = document.getElementById('formDelete')
formDelete.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(formDelete);
    fetch("api/admin/delete/"+formData.get("id"), {
        method: "DELETE"
    })
        .then(() => allUsers());
    $("#ModalDelete").modal("hide");
    formDelete.reset();
})