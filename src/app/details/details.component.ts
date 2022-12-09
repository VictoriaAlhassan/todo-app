import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Item } from '../item';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  id: any = null;
  // item: Item = { id: 0, title: 'N/A', completed: true, description: '' };
  item: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);
  }
  ngOnInit(): void {
    this.getTodoDetail(this.id);
  }

  getTodoDetail(id: number) {
    let result: any;
    this.usersService.getTodoDetail(this.id).then((res) => {
      result = res;
      this.item = result.data;
    });
  }

  // ngOnInit(): void {}
}
