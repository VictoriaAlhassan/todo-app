import { Component } from '@angular/core';
import axios, { Axios } from 'axios';
import { Router } from '@angular/router';
import { Item } from '../item';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  title = 'todo';
  POSTS: any;
  page: number = 1;
  count: number = 200;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  filter: 'all' | 'active' | 'completed' = 'all';
  allItems = [] as any as Todo[];
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  editedItem: any;

  constructor(private usersService: UsersService, private router: Router) {}

  addItem(description: string, id: number) {
    this.allItems.unshift({
      id,
      description,
      completed: false,
    });
  }
  createItem(description: string) {
    this.postTodos(description);
  }
  async getTodos() {
    let prvPage = this.page - 1;
    let start = this.tableSize * prvPage + 1;

    this.usersService.getTodos(this.tableSize, start).then((res) => {
      res.data.map((data: any) => {
        console.log(data);
        this.addItem(data.title, data.id);
      });
    });

    // let params = `?_limit=${this.tableSize}&_start=${start}`;
    // console.log("Pagesize: "+pageSize, "currentPage: "+currentPage,  "Page "+this.page,a

    // try {
    // this.allItems = [];
    // const response = await axios.get(this.apiUrl + params);
    // response.data.map((data: any) => {
    // console.log(data);
    // this.addItem(data.title, data.id);
    // });
    // } catch (error) {
    // console.error(error);
    // }
  }

  async postTodos(title = 'eat') {
    try {
      const response = await axios.post(this.apiUrl, {
        title,
        completed: 'false',
        //
      });
      this.addItem(response.data.title, response.data.id);
      //
    } catch (error) {
      console.error(error);
    }
  }
  async putTodos(input: { description: string; id: number }) {
    try {
      await axios.put(`${this.apiUrl}/${input.id}`, {
        title: input.description,
        completed: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteTodos(id: number) {
    axios.delete(`${this.apiUrl}/${id}`);
  }
  async check(item: Item) {
    item.completed = !item.completed;
    try {
      await axios
        .patch(`${this.apiUrl}/${item.id}`, { completed: item.completed })
        .then(() => {});
    } catch (error) {}
  }

  ItemClick(item: Item) {
    this.router.navigate([`/details/${item.id}`]);
    // console.log(item);
  }
  remove(item: Item) {
    this.usersService
      .deleteTodos(item.id)
      .then(() => {
        this.allItems.splice(this.allItems.indexOf(item), 1);
      })
      .catch((err) => {
        //TODO error
      });
  }
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'completed' ? item.completed : !item.completed
    );
  }

  ngOnInit(): void {
    this.getTodos();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getTodos();
    console.log(this.page);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    // this.page = 1;
    this.getTodos();
  }
}
type Todo = {
  id: number;
  description: string;
  completed: boolean;
  userId?: number;
};
