import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios, { Axios } from 'axios';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  title = 'todo';

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(tableSize: number, start: number) {
    let params = `?_limit=${tableSize}&_start=${start}`;
    // console.log("Pagesize: "+pageSize, "currentPage: "+currentPage,  "Page "+this.pag
    return axios.get(this.apiUrl + params);
  }

  async postTodos(title = 'eat') {
    try {
      const response = await axios.post(this.apiUrl, {
        title,
        completed: 'false',
      });
      // this.addItem(response.data.title, response.data.id);
    } catch (error) {
      console.error(error);
    }
  }
  async putTodos(input: { description: string; id: number }) {
    try {
      await axios.put(`${this.apiUrl}/${input.id}`, {
        title: input.description,
        done: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteTodos(id: number) {
    return axios.delete(`${this.apiUrl}/${id}`);
  }
  async check(item: Item) {
    item.completed = !item.completed;
    try {
      await axios
        .patch(`${this.apiUrl}/${item.id}`, { completed: item.completed })
        .then(() => {});
    } catch (error) {}
  }

  ngOnInit(): void {
    // this.getTodos();
  }

  /**
   *
   * @param id The id of the item
   * @returns This returns an objects of the task details.
   */
  getTodoDetail(id: number): Promise<Item> {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  constructor() {}
}
