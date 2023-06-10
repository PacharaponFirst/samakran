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
        <div key={data.id} className='grid grid-cols-1 border rounded-md shadow-md p-4 '>
        <div className='text-3xl'>{data.title}</div>
        <div className='text-sm py-4'>{data.body}</div>
        </div>
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
       

    // async function (Promise)
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
        <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        { posts.map((value) => (
            <NewsComponent data ={value} />
        ))}
        </div>
            </>
    );
};

export {NewsPage};