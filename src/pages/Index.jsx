import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from "../state/postSlice";
import PostList from '../components/PostList'

const Index = () => {
  const dispatch = useDispatch(); 
  const posts = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <PostList />
  )
}

export default Index