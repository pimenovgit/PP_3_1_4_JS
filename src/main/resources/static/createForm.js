const createForm = document.getElementById("createForm");
createForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(createForm);
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

    fetch("api/admin/create", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(object)
    })
        .then(() => allUsers())
        .then(() => createForm.reset());


    return show('Page1','Page2');

})