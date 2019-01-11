import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: object;
  @Input() loveIts: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onLike(){
  
    this.loveIts = this.loveIts + 1;

  }

  onDislike(){

    this.loveIts = this.loveIts - 1;

  }

  getColor(){

    if(this.loveIts > 0){
    return 'green';
    
    }else if(this.loveIts < 0){
      return 'red';
  }
  
}
}
