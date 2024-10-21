// you can import the module in your main.js file
// eg: import Vue from 'vue' or import { createApp } from 'vue'

// Function to fetch users from the API
async function fetchUsers() {
  try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      // Filter users with age greater than 30
      const usersOver30 = data.users.filter(user => user.age > 30);
      
      // console.log("data ",data);
      console.log("User with age greater than 30 are → ", usersOver30);
  } catch (error) {
      console.error('Error fetching users:', error);
  }
}


// click event 
const button = document.getElementById('fetch-users');
button.addEventListener('click', () => {
    fetchUsers();
});

