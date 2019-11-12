import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimingService {
  constructor() { }

 getHours() {
    return [
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
    ];
  }
}
