import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import "../models/comment-interface";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-workshop-page",
    templateUrl: "./workshop-page.component.pug",
    styleUrls: ["./workshop-page.component.scss"],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class WorkshopPageComponent implements OnInit {

    id: number;
    workshop:Workshop;
    workshops:Workshop[] = [
        {
            id: 1,
            title: "TAG Heuer Gets 'Tagged'",
            img: "/assets/images/tag_heuer.jpg",
            shortDesc:
                "TAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced its new partnership with graffiti artist Alec Monopoly. The artist painted a huge mural on the side of the hotel, exhibited several works in the TAG Heuer lounge, and unveiled a new painting – a portrait of brand president Jean-Claude Biver.",
            tagsList: ["js", "Angular", "Web-Development"],
            link: "",
            creationDate: "2013-03-10T02:00:00Z",
            likes: 676,
            comments:[
                
                    {
                        authorName:"Vasya",
                        authorLastname:"Pupkin",
                        authorImg:"/assets/images/Jeff.png",
                        date:"2016-02-11T02:00:00Z",
                        commentText:"Very interesting!",
                        likes:38
                    },
            
                    {
                        authorName:"Vanya",
                        authorLastname:"Pupkin",
                        authorImg:"",
                        date:"2016-03-11T02:00:00Z",
                        commentText:"CTAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced",
                        likes:389
                    },
            
                    {
                        authorName:"Jason",
                        authorLastname:"Stalone",
                        authorImg:"",
                        date:"2012-03-11T02:00:00Z",
                        commentText:"I do it better folks",
                        likes:3829
                    }
    
            ]
        },
    
        {
            id: 2,
            title: "Case is better",
            img: "/assets/images/case.jpg",
            shortDesc:
                "I spent maybe a week all day every day working on the wall, my first legal wall because I was just so excited and it was nice to be able to chill and relax and work on the piece instead of doing it quickly and running from the cops or whatever. Then it just really grew from there. Other people saw it and appreciated the skill.",
            tagsList: ["Art", "Bitcoin", "Money"],
            link: "",
            creationDate: "2013-12-10T02:00:00Z",
            likes: 30,
            comments:[
                
                {
                    authorName:"Vasya",
                    authorLastname:"Pupkin",
                    authorImg:"/assets/images/Jeff.png",
                    date:"2016-02-11T02:00:00Z",
                    commentText:"Very interesting!",
                    likes:38
                },
        
                {
                    authorName:"Vanya",
                    authorLastname:"Pupkin",
                    authorImg:"",
                    date:"2016-03-11T02:00:00Z",
                    commentText:"CTAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced",
                    likes:389
                },
        
                {
                    authorName:"Jason",
                    authorLastname:"Stalone",
                    authorImg:"",
                    date:"2012-03-11T02:00:00Z",
                    commentText:"I do it better folks",
                    likes:3829
                }
    
        ]
        },
        {
            id: 3,
            title: "Alec is priceless",
            img: "/assets/images/tag_heuer.jpg",
            shortDesc:
                "I did an art show for Donald Trump at his house in Palm Beach, Florida. It was a bunch of pop art and stuff like that, so I wasn't doing any graffiti at that time, so I'd say from about 2000 to 2006, I wasn't doing any graffiti.",
            tagsList: ["Artemon", "Mercedez", "Bentley"],
            link: "",
            creationDate: "2016-02-11T02:00:00Z",
            likes: 777,
            comments:[
                
                {
                    authorName:"Vasya",
                    authorLastname:"Pupkin",
                    authorImg:"/assets/images/Jeff.png",
                    date:"2016-02-11T02:00:00Z",
                    commentText:"Very interesting!",
                    likes:38
                },
        
                {
                    authorName:"Vanya",
                    authorLastname:"Pupkin",
                    authorImg:"",
                    date:"2016-03-11T02:00:00Z",
                    commentText:"CTAG Heuer’s headquarters during Art Basel Miami 2016 was the Mondrian Hotel, where the company announced",
                    likes:389
                },
        
                {
                    authorName:"Jason",
                    authorLastname:"Stalone",
                    authorImg:"",
                    date:"2012-03-11T02:00:00Z",
                    commentText:"I do it better folks",
                    likes:3829
                }
    
        ]
        }
    ];
    constructor(private route: ActivatedRoute) {
        this.id=route.snapshot.params['id'];
        this.workshop=this.workshops[this.id];
    }

    ngOnInit() {
    }

    likeactive: boolean = false;

    likec() {
        if (this.likeactive) {
            this.workshop.likes -= 1;
        } 
        else {
            this.workshop.likes += 1;
        }

        this.likeactive = !this.likeactive;
    }

    
}
