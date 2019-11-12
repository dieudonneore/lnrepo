import { Component, OnInit } from '@angular/core';

const DATE = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  current = new Date();
  currentdate = this.current.getDate();
  currentnamedate = DATE[this.current.getDay()];
  currentnamemonth = MONTH[this.current.getMonth()];
  currentnameyeardate = this.current.getFullYear();
  minDate = new Date(this.currentnamedate);
  display = true;
  selectedDate: any;
  title = 'Select a Date & Time';
  fullname = 'Dieudonne Ore';
  meetingtime = '30 Minute Meeting';
  minute = '30 min';
  nomdujour;
  jour;
  annee;
  mois;
  day;
  month;
  years;

  constructor() { }

  ngOnInit() {
  }


  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
    this.day = new Date(this.selectedDate);
    console.log(this.day);
    this.jour = this.day.getDate();
    console.log(this.jour);
    this.annee = this.day.getFullYear();
    console.log(this.annee);
    this.mois = MONTH[this.day.getMonth()];
    console.log(this.mois);
    this.nomdujour = DATE[this.day.getDay()];
    console.log(this.nomdujour);
  }
  onclick() {
    this.display = false;
  }
  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
  }

}
