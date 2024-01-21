export {displayUsers};

const displayUsers = (data) => {
    const tbody = document.getElementById('table')
    let counter = 1;
    tbody.innerHTML = ''
  
    data.forEach(element => {
        const name = element.name
        const username = element.username
        const email = element.email
        const phone = element.phone
        const website = element.website

        tbody.innerHTML += `<tr>
        <th scope="row">${counter}</th>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${website}</td>
      </tr>`;
        counter ++;
    });
}