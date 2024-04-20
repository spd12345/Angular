import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask5';
  users={
    name: 'shakti',
    age: 23,
    address: 'cuttack'
  }
fullDate: string|undefined;
  parentFun(hello:any){
    console.warn(hello)
  }

  name= 'shakti';
  today=Date.now();
  money=100;
  
  binding=''
//--------------------------------------
//=============view Child Component===================


  @ViewChild('dobInput') dateOfBirth: ElementRef | undefined ;
  @ViewChild('ageInput') age: ElementRef<any> ;
  
  calcAge(){
    let birthYear: any=new Date(this.dateOfBirth?.nativeElement.value).getFullYear()
    
    let currentYear: any=new Date().getFullYear()
    let age=currentYear-birthYear;
   
   this.age?.nativeElement.value==age;
    //console.log(age)
  }
}
