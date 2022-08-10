const formEdit = document.getElementById("formEdit");
formEdit.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formEdit);
    const object = {
        roles:[]
    };

    formData.forEach((value, key) => {
        if (key === "rolesId"){

            const roleId = value.split(" ")[0];
            const roleName = value.split(" ")[1];
            const role = {
                id : roleId,
                name : "ROLE_" + roleName
            };
            object.roles.push(role);
        } else {
            object[key] = value;
        }
    });
    fetch("api/admin/update/"+formData.get("id"), {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(object)
    })
        .then(() => allUsers());
    $("#editUserModal").modal("hide");
    formEdit.reset();
})