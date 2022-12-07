import { Component } from '@angular/core';
import axios, {Axios} from 'axios';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // allItems = [] as any as Todo[];
  apiUrl ='https://jsonplaceholder.typicode.com/todos';
  httpClient: any;

  getDetails(){
    return this.httpClient.get(this.apiUrl)
  }

  // addItem(description: string, id: number, completed:boolean){
  // 
    // this.allItems.unshift({
      // id,
      // description,
      // done:false
    // })
  // }

  // title = 'todo';
  // POSTS: any;
  // page:number = 1;
  // count:number = 200;
  // tableSize:number = 5;
  // tableSizes:any = [5,10,15,20]


  // async getTodos() {
    // let pageSize = this.tableSize
    // let currentPage = this.page ==1 ? 0 : this.page 
    // let prvPage = this.page -1
    // let start = (pageSize*prvPage)+1
    // let params = `?_limit=${this.tableSize}&_start=${start}`
    // console.log("Pagesize: "+pageSize, "currentPage: "+currentPage,  "Page "+this.page, "start "+start)
        // 

    //  try {
      // this.allItems =[]
      // const response= await axios.get(this.apiUrl + params);
      // response.data
      // 
      // .map((data:any)=>{
        // console.log(data)
      //  this.addItem(data.title, data.id, data.completed)
      // });
    // } catch (error) {
      // console.error(error);
    // }
  // }
}

// type Todo = { id:number,description:string, done:boolean}
