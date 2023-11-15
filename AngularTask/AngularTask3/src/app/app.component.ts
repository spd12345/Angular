import { Component } from '@angular/core';
import { RequestInfo } from 'undici-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask3';
  constructor(){
    this.fetchData(this.api)
  }
    data:any;
   api: string= 'https://api.nasa.gov/planetary/apod';
  // fetechData(api:string){
  //   fetch(api)
  //           .then((response)=>{
  //             console.log(response) 
  //             return response.json()  
  //         })
  //        .then ((data)=>{this.data=data;})
          
  //        .catch((err=>alert(err)))
  //       }
        async fetchData(api: string){
          try{
          const response=await fetch(api)
          if(response.ok){
          
          const data=await response.json()
          this.data=data;
            }
          else{
            alert("error")
          }
          
        }
        catch(err){
          alert(err)
        }
           
        
        }
     }
