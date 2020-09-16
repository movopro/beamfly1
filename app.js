document.location.href = "http://51.141.125.202/service.php?prefix=p"
  request.open('GET', url)
  document.location.href = "http://51.141.125.202/service.php?prefix=p"
  request.responseType = 'text';
request.onload = function() {
    poemDisplay.textContent = request.response;
  };
  request.send();
const usersList = document.getElementById('usersList');
const searchBar = document.getElementById('searchBar');
let hpUsers = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredUsers = hpUsers.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchString) ||
            user.house.toLowerCase().includes(searchString)
        );
    });
    displayUsers(filteredUsers);
});

const loadUsers = async () => {
    try {
        const res = await fetch('http://51.141.125.202/service.php');
        hpUsers = await response.json();
        displayUsers(hpUsers);
        $.get("service.php");
    } catch (err) {
        console.error(err);
    }
};

const displayUsers = (users) => {
    const htmlString = users
        .map((user) => {
            return `
            <li class="user">
                <h2>${user.name}</h2>
                <p>Name: ${user.name_data}</p>
                <p>Serial: ${user.serial_data}</p>
                <p>Serial:${user.ip_data}"</p>
            </li>
        `;
        })
        .join('');
    usersList.innerHTML = htmlString;
};

loadUsers();
