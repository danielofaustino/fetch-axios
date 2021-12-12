import fetch from 'node-fetch';
import axios from 'axios';

function getUsers() {
  console.time('fetch');
  fetch('https://jsonplaceholder.typicode.com/users/')
    .then((response) => response.json())
    .then((users) => {
      for (let x = 0; x < users.length; x++) {
        console.log(users[x].name);
      }
      console.timeEnd('fetch');
    })
    .catch((error) => {
      console.log(
        `Error Message: ${error.message} - Error Code: ${error.code}`
      );
    });
}

const getUsersWithAxios = async () => {
  try {
    console.time('Axios');
    let users = await axios.get('https://jsonplaceholder.typicode.com/users/');
    users.data.map((user) => {
      console.log(user.name);
    });
    console.timeEnd('Axios');
  } catch (error) {
    console.log(`Error Message: ${error.message} - Error Code: ${error.code}`);
  }
};

getUsersWithAxios();
//getUsers();
