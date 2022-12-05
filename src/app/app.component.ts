import { Component, Input, OnInit } from '@angular/core';
import axios, {Axios} from 'axios';
import {Item} from './item';
// import {ActivatedRoute, Router} from '@angular/router';
import { UsersService } from './users.service';



@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
// config: any;
  // collection: [] = [];
// constructor(
  // private route: ActivatedRoute,
  // private router : Router
// ){
  // this.config ={
    // currentPage :1,
    // itemsPerPage: 10,
    // totalItems: 0, 
  // }
  // route.queryParams.subscribe(
    // params=>this.config.currentPage = params['page'] ? params['page']:1)
// 
    // for(let i=1; i<=100;i++){
      // this.collection.push(`item ${i}`)
    // }
// }
    // pageChange(newPage: number){
      // this.router.navigate([''], {queryParams: {page:newPage}})
    // }
  title = 'todo';
  POSTS: any;
  page:number = 1;
  count:number = 200;
  tableSize:number = 5;
  tableSizes:any = [5,10,15,20]

  filter: 'all'| 'active'| 'done' = 'all';
allItems = [] as any as Todo[];
apiUrl ='https://jsonplaceholder.typicode.com/todos';
  editedItem: any;
  

addItem(description: string, id: number){
  
  this.allItems.unshift({
    id,
    description,
    done:false
  })
}
createItem(description:string){
  this.postTodos(description)
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
    let pageSize = this.tableSize
    let currentPage = this.page ==1 ? 0 : this.page 
    let prvPage = this.page -1
    let start = (pageSize*prvPage)+1
    let params = `?_limit=${this.tableSize}&_start=${start}`
    console.log("Pagesize: "+pageSize, "currentPage: "+currentPage,  "Page "+this.page, "start "+start)
    
    try {
      this.allItems =[]
      const response= await axios.get(this.apiUrl + params);
      response.data
      
      .map((data:any)=>{
        console.log(data)
       this.addItem(data.title, data.id)
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async postTodos(title = 'eat'){
    try{
      const  response =  await axios.post( this.apiUrl,{
        title,
        completed: 'false',
        
      })
            this.addItem(response.data.title, response.data.id)
        
    } catch (error) {
      console.error(error);
      }
  }
  async putTodos(input: {description:string, id:number}){
    try{
       await axios.put( `${this.apiUrl}/${input.id}` ,{
        title: input.description,
        done:false,
        
      });
     } catch(error){
      console.log(error);
    }
  }
  async deleteTodos(id:number){
    axios.delete(`${this.apiUrl}/${id}`)
  
   }

   remove(item:Item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
    this.deleteTodos(item.id)
  }
  get items() {
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter ==='done' ? item.done : !item.done);
  }
  
  ngOnInit(): void {
    this.getTodos()
    // this.postTodos()
    // this.putTodos()
    // this.getTodos()
    
  }
 
  
  

  constructor() { }



  onTableDataChange(event:any){
    this.page = event;
    this.getTodos()
    console.log(this.page)
    
  }

  onTableSizeChange(event:any): void{
    this.tableSize = event.target.value;
    // this.page = 1
    this.getTodos()
  }
}

type Todo = { id:number,description:string, done:boolean}

    
  
  
 

