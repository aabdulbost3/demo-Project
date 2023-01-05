import { lazy } from 'react'
const Login = lazy(()=>import('../pages/login/index'))
const Loading = lazy(()=>import('../minicomp/loading'))
const Home = lazy(()=>import('../pages/Home/Home'))
const MyBlog = lazy(()=>import('../pages/MyBlog/MyBlog'))
const Contact = lazy(()=>import('../pages/Contact/Contact'))
const AboutMe = lazy(()=>import('../pages/AboutMe/AboutMe'))
const Archive = lazy(()=>import('../pages/Archive/Archive'))
const BlogSingle = lazy(()=>import('../pages/BlogSingle/BlogSingle'))
const NotFoundpages = lazy(()=>import('../pages/NotFoundpages/NotFoundpages'))
const AdminPage = lazy(()=>import('../pages/AdminPage/AdminPage'))




export const DataRouter =[
    {
        id : 1,
        path :!window.localStorage.getItem("token") ?  '/Login': null  ,
        Element :!window.localStorage.getItem("token") ?  <Login />: null 
    },
    {
        id : 2,
        path : '/',
        Element : <Home />
    },
    {
        id : 3,
        path : '/myblog',
        Element : <MyBlog />
    },
    {
        id : 4,
        path : '/aboutme',
        Element : <AboutMe />
    },
    {
        id : 5,
        path : '/contact',
        Element : <Contact />
    },

    {
        id : 6,
        path : '/archive',
        Element : <Archive />
    },
    {
        id : 7,
        path : '/blogsingle',
        Element : <BlogSingle />
    },
    { 
        id : 8,
        path : '/*',
        Element : <NotFoundpages />
    },
    { 
        id : 9,
        path :  window.localStorage.getItem("token") ?  '/adminpage': null ,
        Element : window.localStorage.getItem("token") ?  <AdminPage />: null 
    }
]
