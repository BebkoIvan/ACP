import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
}
)
export class AppComponent {
  title = 'ACP';
  search_active:Boolean=false;
  mobile:Boolean=false;
  innerWidth:any;
  menu_active:Boolean=false;
  profile:{user_name:string,get_img():string;}={
   user_name:"Jeff Bezos",
   get_img(){return "/assets/images/"+ this.user_name.substr(0,this.user_name.indexOf(' '))+".png"}
  };
  menu_items=[
    {
    title:"Dashboard",
    icon:"icon-dashboard"
  },
  {
    title:"Lessons",
    icon:"icon-study"
  },
  {
    title:"Settings",
    icon:"icon-cog"
  }
];
  ngOnInit() {
        console.log(this.profile);
        this.innerWidth = window.innerWidth;
        if(this.innerWidth>=576){
          this.mobile=false;
        }
        else{
          this.mobile=true;
        }
    }
  @HostListener('window:resize', ['$event']) onResize(event) {
    if((this.innerWidth<576 && window.innerWidth>=576) ||(this.innerWidth>=576 && window.innerWidth<576) ){
      this.search_active=false;
    }
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>=576){
      this.mobile=false;
    }
    else{
      this.mobile=true;
    }
  }
  handleSearchClick(){
  this.search_active=!this.search_active;
  }
  handleMenuClick(){
    this.menu_active=!this.menu_active;
  }
}

