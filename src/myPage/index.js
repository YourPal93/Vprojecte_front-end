import React, { useEffect, useState } from 'react';
import { useLocalState } from '../utils/userLocalStorage';
import '../App.css';
import BackToTopButton from '../scrollUpButton';
import Sidebar from '../sidebar';
import Headbar from '../headbar';
import axios from 'axios';
import Post from '../post';

const MyPage = () => {
    const myId = 1;
    const [jwt, setJwt] = useLocalState('', 'jwt');
    const [myName, setMyName] = useState('');
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    

    useEffect(() => {
        if(fetching) {
            axios.get(`/users/${myId}/posts?pageNo=${currentPage}&pageSize=10`, {
                headers: {
                  Authorization: 'Bearer ' + jwt
                }
            })
            .then((response) => {
                setPosts([...posts, ...response.data.content])
                setTotalCount(response.headers['x-total-count'])
                setCurrentPage(prevState => prevState + 1)
            })
            .finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        axios.get('/users/my_page', {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        })
        .then((response) => setMyName(response.data.name));

        window.addEventListener('scroll', scrollHandler);
        return function() {
            document.removeEventListener('scroll', scrollHandler);
            };
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
        && posts.length < totalCount) {
            setFetching(true);
        }
    }




    return (
    <>
        <Headbar/>
        <div className='box-wrapper'>
            <div className='left-container'>
                <div className='sidebar-wrapper'>
                    <Sidebar/>
                </div>
            </div>
            <div className='mid-container'>
                <div className='header' />
                <div className='mt-4' />
                <div className='user-wall'>
                    <div className='post-box-wrapper'>
                    {
                    posts.map((item, index) => (
                        <Post { ...item } key={index}/>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <div>
                </div>
            </div>
            <div className='header-info'></div>
            <BackToTopButton/>
        </div>
    </>
    );
};

export default MyPage;