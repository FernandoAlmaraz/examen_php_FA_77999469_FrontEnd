import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormaterService {

  constructor() { }
  formatDate(date: Date): string {
    const day = this.padZero(date.getDate());
    const month = this.padZero(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

}
