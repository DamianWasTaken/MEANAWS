import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private webRequestService:WebRequestService) {
  
  }

  createContent(title: string){
    //send web request to content
    return this.webRequestService.post(`Content`, {title})


  }

  getAllContent(){
    return this.webRequestService.get(`Content`)
  }
}
