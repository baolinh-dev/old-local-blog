import { createReducer, createAction } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initialPostList
} 

export const addPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(initialState, (builder) => { 
    builder.addCase(addPost, (state, action) => { 
        // immerjs 
        // immerjs giúp mutatte một state an toàn
        const post = action.payload 
        state.postList.push(post)
    })
})

export default blogReducer
