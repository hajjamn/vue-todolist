const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Vue',
      toDoList: [
        {
          text: 'Creare repo su Github',
          done: false,
        },
        {
          text: 'Clonare repo su VS Code',
          done: false,
        },
        {
          text: 'Creare index.html',
          done: false,
        },
        {
          text: 'Creare app.css in cartella css',
          done: false,
        },
        {
          text: 'Creare app.js in cartella js',
          done: false,
        },
        {
          text: 'Collegare index.html a app.css e app.js',
          done: false,
        },
        {
          text: 'Collegare Bootstrap',
          done: false,
        },
        {
          text: 'Collegare VUE',
          done: false,
        },
        {
          text: 'Collegare FontAwesome',
          done: false,
        },
        {
          text: 'First commmit',
          done: false,
        },
      ],
      newItemText: null
    }
  },
  methods: {
    deleteItem(i) {
      this.toDoList.splice(i, 1)
    },
    addNewItem() {
      this.toDoList.push({text: this.newItemText, done: false})
      this.inputReset()
    },
    inputReset() {
      this.newItemText = null
    },
  },
}).mount('#app')