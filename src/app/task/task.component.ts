import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TimingService} from '../timing.service';
import {NgxSpinnerService} from 'ngx-spinner';
// import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  hours = [];
  display = false;
  details: any;
  constructor(
    public router: Router,
    public timeservice: TimingService,
    private spinner: NgxSpinnerService
    // public http: HttpClient
  ) {

  }

  ngOnInit() {
    this.obtenirheure();
  }

  showbutton() {
    this.display = true;
  }

  envoyer() {
    this.router.navigate(['details']);
  }

  obtenirheure() {
    this.hours = this.timeservice.getHours();
    console.log(this.hours);
  }

}
