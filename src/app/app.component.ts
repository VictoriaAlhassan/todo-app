import { Component, Input, OnInit } from '@angular/core';
import axios, {Axios} from 'axios';
import {Item} from './item';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  title = 'todo';
  // pages:number =1
  // dataset:any[]=['1','2','3','4','5','6','7','8','9','10','11','12']

  filter: 'all'| 'active'| 'done' = 'all';
allItems = [] as any as Todo[];
apiUrl ='https://jsonplaceholder.typicode.com/todos';
  editedItem: any;
  

addItem(description: string){
  this.allItems.unshift({
    description,
    done:false
  })
}

// editable = false;
// @Input() item!: Item;
// 
// saveItem(description: string){
  // if(!description) return;
  // this.editable = false;
  // this.item.description = description;
// }

  async getTodos() {
    try {
      const response= await axios.get(this.apiUrl);
      response.data.map((data:any)=>{
       this.addItem(data.title)
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async postTodos(){
    try{
      const  response =  await axios.post( this.apiUrl,{
        id: 1,
        title: 'eat',
        completed: 'false',
        
              })
         response.data.map((data:any)=>{
            this.addItem(data.title)
          });
    } catch (error) {
      console.error(error);
      }
  }
  async putTodos(){
    try{
       await axios.put( this.apiUrl, {
        title: this.title,
        done:false,
        id:'1'
      });
     } catch(error){
      console.log(error);
    }
  }
  async deleteTodos(id:string){
    axios.delete(this.apiUrl)
  
   }
   remove(item:Item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  get items() {
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter ==='done' ? item.done : !item.done);
  }
  
  ngOnInit(): void {
    this.getTodos()
    this.postTodos()
    this.putTodos()
    
  }
 
  
  

  constructor() { }
}

type Todo = {description:string, done:boolean}

    
  
  
 

