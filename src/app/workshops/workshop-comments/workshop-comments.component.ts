import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../services/workshops.service';

@Component({
  selector: 'app-workshop-comments',
  templateUrl: './workshop-comments.component.pug',
  styleUrls: ['./workshop-comments.component.scss']
})
export class WorkshopCommentsComponent implements OnInit {

  id:number;

  constructor(private route: ActivatedRoute,private _workshopsService:WorkshopsService) {
        
    this.id=route.snapshot.params['id']; 

}

    comments:Array<Comment1>;

  ngOnInit() {
    this.comments=this._workshopsService.getWorkShops(this.id)[0].comments;
    }


}
