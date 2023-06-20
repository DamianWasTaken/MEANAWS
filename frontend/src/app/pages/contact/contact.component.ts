import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from 'src/app/content-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contentService:ContentServiceService){}

  content:Array<any> = [];

  ngOnInit(){
    this.getContent();
  }

  createNewContent(title:string){
    // console.log(title);
    this.contentService.createContent(title).subscribe((response:any)=>{
      console.log(response);
      this.content.push(response);

    })
  }

  getContent(){
    this.contentService.getAllContent().subscribe((response:any)=>
    {
      console.log(response)
      response.forEach((item:any )=> {
        this.content.push(item);
      });
      // this.content.push(response);
      console.log(this.content)
    });
  }

  

}
