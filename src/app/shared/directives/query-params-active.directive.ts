import {
    Directive,
    ElementRef,
    Renderer,
    HostBinding,
    Input,
    OnInit,
    HostListener,
    Renderer2,
    OnChanges
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
    selector: '[appQueryParamsActive]'
})
export class QueryParamsActiveDirective implements OnInit {
    
    @Input() tag;
    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
        private renderer2: Renderer2
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            if (params.tags) {
                if (params.tags.split(',').includes(this.tag.seq.toString())) {
                    this.renderer2.addClass(this.el.nativeElement, 'active');
                } else {
                    this.renderer2.removeClass(this.el.nativeElement, 'active');
                }
            } else {
                this.renderer2.removeClass(this.el.nativeElement, 'active');
            }
        });
    }
    }
        

