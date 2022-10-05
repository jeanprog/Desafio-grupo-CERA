import {defineStore} from 'pinia'


export const userStore = defineStore('users' ,{ 
     state: () => { 
        return { 
            listUsers :  [] 
        }
     },
     actions: { 
        addUser(item) { 
            this.listUsers.push(item)
        }
     }        
     
}) 