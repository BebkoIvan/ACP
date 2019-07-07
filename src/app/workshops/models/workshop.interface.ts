

interface Workshop {
    author: string;
    title: string;
    image: string;
    description: string;
    text: string;
    tags: number[];
    createdAt: string;
    reactionsCounts?: {
        likes: number,
        stars: number,
        uni: number
    };
    comments?: Array<Comment1>;
    reactionsAuthors?: {
        likes: Array<string>,
        stars: Array<string>,
        uni: Array<string>
    };
}
