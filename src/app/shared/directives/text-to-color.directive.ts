import {
    Directive,
    ElementRef,
    Renderer,
    HostListener,
    HostBinding,
    Input,
    OnInit,
    OnChanges
} from '@angular/core';

@Directive({
    selector: '[appTextToColor]'
})
export class TextToColorDirective implements OnChanges {
    
    @HostBinding('class.onHover') private ishovering: boolean;
    color: string;

    colorMap: Array<Color> = [
        {
            title: 'chocolate',
            color: '#bf7924'
        },

        {
            title: 'gold',
            color: '#f0cc00'
        },

        {
            title: 'slateblue',
            color: '#7246d5'
        },

        {
            title: 'yellowgreen',
            color: '#b8dc4a'
        },
        {
            title: 'deepskyblue',
            color: '#0dcdee'
        },

        {
            title: 'mediumorchid',
            color: '#c268b6'
        },

        {
            title: 'crimson',
            color: '#ca172c'
        },

        {
            title: 'darkgreen',
            color: '#073a10'
        },

        {
            title: 'deeppink',
            color: '#e32d8f'
        }
    ];

    @Input() config = {
        title: '',
        colorMap: this.colorMap,
        hoverReact: false,
        hoverLighten: false,
        disabled: false
    };
    
    constructor(private el: ElementRef, private renderer: Renderer) { }

    ngOnChanges(): void {
        if (this.config.disabled) {
            this.color = 'grey';
        }
        else {
            this.color = this.getColor();
            this.renderer.setElementStyle(
                this.el.nativeElement,
                'backgroundColor',
                this.getColor()
            );
        }
        
    }


    getColor() {
        const title = this.config.title;
        let color = this.colorMap[1].color;
        switch (title.length) {
            case 2:
                if (title.match(/J/)) {
                    color = this.colorMap[1].color;
                } else {
                    color = this.colorMap[
                        Math.floor(Math.random() * this.colorMap.length)
                    ].color;
                }
                break;

            case 3:
                color = this.colorMap[2].color;
                break;

            case 4:
                color = this.colorMap[3].color;
                break;

            case 5:
                color = this.colorMap[4].color;
                break;

            case 6:
                color = this.colorMap[5].color;
                break;

            case 7:
                color = this.colorMap[6].color;
                break;

            case 8:
                color = this.colorMap[7].color;
                break;

            case 9:
                color = this.colorMap[8].color;
                break;

            default:
                color = this.colorMap[1].color;
                break;
        }
        return color;
    }

    LightenColor = (color, percent) => {
        if (color[0] === '#') {
            color = color.slice(1);
        }

        const num = parseInt(color, 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const B = ((num >> 8) & 0x00ff) + amt;
        const G = (num & 0x0000ff) + amt;

        return (
            '#' +(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
             (G < 255 ? (G < 1 ? 0 : G) : 255)
            ).toString(16).slice(1)
        );
    };

    @HostListener('mouseover') onHover() {
        if (!this.config.disabled) {
            if (this.config.hoverReact) {
                this.renderer.setElementStyle(
                    this.el.nativeElement,
                    'backgroundColor',
                    this.LightenColor(
                        this.color,
                        this.config.hoverLighten ? 20 : -20
                    )
                );
                this.ishovering = true;
            }
        }
        
    }

    @HostListener('mouseout') onMouseOut() {
        this.renderer.setElementStyle(
            this.el.nativeElement,
            'backgroundColor',
            this.color
        );
        this.ishovering = false;
    }
}
