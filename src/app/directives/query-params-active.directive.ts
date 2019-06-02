import { Directive, ElementRef, Renderer, HostBinding, Input, OnInit, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appQueryParamsActive]'
})
export class QueryParamsActiveDirective implements OnInit {
  @Input() title:string;
  @HostBinding('class.active') private isActive:boolean;
  
  constructor(private route: ActivatedRoute, private router: Router,private el:ElementRef,private renderer2:Renderer2) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.tags){
        if (params.tags.split(",").includes(this.title)) {
          this.renderer2.addClass(this.el.nativeElement,'active');
          this.isActive=true;
        }
        else{
          this.renderer2.removeClass(this.el.nativeElement,'active');
          this.isActive=false;
        }
      }
      else{
        this.renderer2.removeClass(this.el.nativeElement,'active');
        this.isActive=false;
      }
    });
  }
  
  // ngOnChanges(isActive) {
  //   if (this.isActive) {
        
  //       }
  //     else{
  //       this.renderer2.removeClass(this.el.nativeElement,'active');
  //     }

  //   }
  }


