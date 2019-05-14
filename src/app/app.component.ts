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
  aca_active:Boolean=false;
  profile:{user_name:string,get_img():string;}={
   user_name:"Jeff Bezos",
   get_img(){return "/assets/images/"+ this.user_name.substr(0,this.user_name.indexOf(' '))+".png"}
  };
  articles=[
    {
      title:"TAG Heuer Gets 'Tagged",
      img:"/assets/images/tag_heuer.jpg",
      text:"TAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced its new partnership with graffiti artist Alec Monopoly. The artist painted a huge mural on the side of the hotel, exhibited several works in the TAG Heuer lounge, and unveiled a new painting – a portrait of brand president Jean-Claude Biver."
      },
  {
    title:"Case is better",
    img:"/assets/images/case.jpg",
    text:"I spent maybe a week all day every day working on the wall, my first legal wall because I was just so excited and it was nice to be able to chill and relax and work on the piece instead of doing it quickly and running from the cops or whatever. Then it just really grew from there. Other people saw it and appreciated the skill."
  },
{
  title:"Alec is priceless",
  img:"/assets/images/tag_heuer.jpg",
  text:"I did an art show for Donald Trump at his house in Palm Beach, Florida. It was a bunch of pop art and stuff like that, so I wasn't doing any graffiti at that time, so I'd say from about 2000 to 2006, I wasn't doing any graffiti."},
];
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
      this.menu_active=false;
    }
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>=576){
      this.mobile=false;
    }
    else{
      this.mobile=true;
    }
  }
  hideMenu(){
    let menu:HTMLElement=document.querySelector(".side-menu");
    let main_content:HTMLElement=document.querySelector(".main-content");
    this.menu_active=false;
    menu.className="side-menu";
    main_content.className="main-content";
  }
  handleSearchClick(e:Event){
  this.search_active=!this.search_active;
  }
  handleMenuClick(e:Event){
    this.menu_active=!this.menu_active;
    let menu:HTMLElement=document.querySelector(".side-menu");
    let main_content:HTMLElement=document.querySelector(".main-content");
    if(this.menu_active){
      menu.className+=" menu-active";
      main_content.className+=" darken";
    }
    else{
      menu.className="side-menu";
      main_content.className="main-content";
    }
  }
  aca_toggle(){
    let aca:HTMLElement=document.querySelector(".aca");
    if(this.aca_active){
      aca.className="aca";
    }
    else{
      aca.className+=" aca-active";
    }
    this.aca_active=!this.aca_active;
  }

}

