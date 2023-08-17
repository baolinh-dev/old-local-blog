import { Post } from 'types/blog.type';

export const initialPostList: Post[] = [
  {
    title: 'Title 1',
    description: 'Description 1',
    publishDate: '2023-08-17',
    id: '1',
    featuredImage:
      'https://images.unsplash.com/photo-1648184217069-34f0a57791bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    published: true,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    publishDate: '2023-08-18',
    id: '2',
    featuredImage:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    published: false,
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    publishDate: '2023-08-19',
    id: '3',
    featuredImage:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    published: false,
  },
  {
    title: 'Title 4',
    description: 'Description 4',
    publishDate: '2023-08-20',
    id: '4',
    featuredImage:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    published: false,
  },
];