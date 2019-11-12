import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent implements OnInit {
  title = 'Enter Details';
  show = false;
  constructor() { }

  ngOnInit() {
  }



}
