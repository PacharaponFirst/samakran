import { FC } from 'react';

const NewsPage: FC = () => {
    // function
    const loadNews = () => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resp)=> resp.json())
        .then((json) => {
            console.log(json);
        })
    };

    //template
    return (
    <>
        <h1>NEWS TODAY!!!</h1>
        <button className='npru-button' onClick={loadNews}>
            Load News
        </button>
    </>
    );
};

export {NewsPage};