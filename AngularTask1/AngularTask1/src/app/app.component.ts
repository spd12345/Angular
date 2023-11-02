import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask1';
  public name1="";
  public name2 ="";
 public name3 ="";
 public name4 ="";
 onclick(){
  alert("Your Name: "+this.name1+"\n"+
  "Your Email: "+this.name2+"\n"+
  "Your City: "+this.name3+"\n"+
  "Your Gender: "+this.name4);
  
 }
 
  
}
