import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask2';
   public Ouser="user";
  public Opass="Admin";
  public user="";
  public pass="";
  
  verify:any;

  public verf(){
   
     if (this.Opass===this.user) {
      this.verify=false;
      
     } else {
      this.verify=true;
     }

    }
   
  }

