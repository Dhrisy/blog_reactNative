import React, { useReducer } from 'react'
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

export const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    // state = {[]}
    // action ={type: add, edit, delete, payload: }
    switch (action.type) {
        case 'getBlogPosts':
            return action.payload;
        // case 'createBlogPost':
        //     return [...state, { 
        //         id: Math.floor(Math.random() * 99999),
        //     title: action.payload.title,
        //     content: action.payload.content  }];
        // case 'updateBlogPost':
        //     return state.map((blogPosts) => {
        //         return blogPosts.id === action.payload.id 
        //         ? { ...blogPosts, title: action.payload.title, content: action.payload.content }
        //         : blogPosts
        //         })
        // case 'deleteBlogPost':
        //     return state.filter((blogPost) => blogPost.id !== action.id);
       default:
            return state;
    }

}


export const BlogProvider = ({ children }) => {

    const [blogPosts, runMyReducer] = useReducer(blogReducer, []);

  
    const deleteBlogPost = async(id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        // runMyReducer({ type: 'deleteBlogPost', id: id });
    }

    const createBlogPost = async( title, content, callBack) => {
        console.log('ppp');
        await jsonServer.post('/blogposts' , {title: title, content: content})
        // runMyReducer({ type: 'createBlogPost', payload: { title: title, content: content }});
        if(callBack){
            callBack();
        }
    }

    const updateBlogPost = async( id, newTitle, newContent, callBack) => {
        await jsonServer.put(`/blogposts/${id}`, {title: newTitle, content: newContent})
        // runMyReducer({ type: 'updateBlogPost', payload: { id: id, title: newTitle, content: newContent }});
        if(callBack){
            callBack();
        }
    }

    const getBlogPosts = async() => {
       const response =  await jsonServer.get('/blogposts');
       //response.data = [ ]
       runMyReducer({ type: 'getBlogPosts', payload: response.data })
    }


    return <BlogContext.Provider value={{ data: blogPosts, updateBlogPost, deleteBlogPost,createBlogPost, getBlogPosts  }}>
        {/* //key: value   pair */}
        {children}
    </BlogContext.Provider>

}
