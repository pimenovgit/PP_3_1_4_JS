async function getResponse() {
    let res = await fetch('http://localhost:8080/api/user')
    let content = await res.json()


    let list = document.querySelector('.user-principal-table')
    let roles = "";
    for (let role in content.role) {
        roles += `${content.role[role].getName} `
    }

    result += `
<tr>
 <td>${content.id}</td>
 <td>${content.name}</td>
 <td>${content.lastname}</td>
 <td>${content.age}</td>
 <td>${content.email}</td>
 <td>${content.roles}</td>
 </tr>
`

    list.innerHTML = result

    $('#principalView').empty()
    $('#principalView').append(content.stringView)
}

getResponse()
