import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit{
  @Output() parentFun :EventEmitter<any>=new EventEmitter
  constructor(){  }

  ngOnInit(): void {
    this.parentFun.emit('shakti')
  }
}
