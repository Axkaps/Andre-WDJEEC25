<template>
    <div class="dropdown">
      <button class="dropdown-button" @click="toggleDropdown">Open Dropdown</button>
      <div class="dropdown-content" v-show="isOpen">
        <ul>
          <li v-for="i in 31" :key="i">
            <button @click="selectOption(i)">{{ i }}</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        options: [] // Array to hold dropdown options
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        // Do something with the selected option, e.g., emit an event or update a value
        console.log("Selected option:", option);
        this.isOpen = false; // Close the dropdown after selecting an option
      }
    },
    // Optionally, you can pass props to customize the dropdown options
    props: {
      // You can pass options as an array of strings
      // Example usage: <Dropdown :options="['Option 1', 'Option 2', 'Option 3']" />
      options: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  
  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ddd;
    z-index: 1;
  }
  
  .dropdown-content button {
    display: block;
    width: 100%;
    padding: 10px 20px;
    text-align: left;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .dropdown-content button:hover {
    background-color: #ddd;
  }
  
  .show {
    display: block;
  }
  </style>
  