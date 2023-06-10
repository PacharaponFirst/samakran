import { FC, useState } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface NewsProps {
    data: Post;
}

const NewsComponent: FC<NewsProps> = ( { data } ) => {
    return( 
        <>
        <div>{data.title}</div>
        <div>{data.body}</div>
        </>
    );
};

const NewsPage: FC = () => {
    //state
        const [posts, setPosts] = useState<Post[]>([ {
            userId: 1,
            id: 1,
            title: "test",
            body: "test",
            }]);
       

    // function
    const loadNews = () => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resp)=> resp.json())
        .then((json) => {
            setPosts(json);
        })
    };

    //template
    return (
    <>
        <h1>NEWS TODAY!!!</h1>
        <button className='npru-button' onClick={loadNews}>
            Load News
        </button>
        { posts.map((value) => (
            <NewsComponent data ={value} />
        ))}
            </>
    );
};

export {NewsPage};