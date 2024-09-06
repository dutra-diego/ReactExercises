 

import { Header } from "./components/Header"
import { Post } from "./components/Post"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import './global.css'
const posts = [{
  id: 1,
  author: {
    avatar: 'https://www.github.com/dutra-diego.png',
    name: 'Diego Dutra',
    role: 'Web Developer',

  },
  content: [
    {
      type: 'paragraph', content: 'Fala galeraa 👋'
    },
    
    {
      type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio, é um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
    },
    {
      type: 'link', content: 'jane.design/doctorcare'
    },

  ],
  publishedAt: new Date('2024-08-27 20:00:00'),

},
{
  id: 2,
  author: {
    avatar: 'https://www.github.com/dutra-diego.png',
    name: 'Kyoni Dutra',
    role: 'Dog',

  },
  content: [
    {
      type: 'paragraph', content: 'Fala galeraa 👋'
    },
    
    {
      type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio, é um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
    },
    {
      type: 'link', content: 'jane.design/doctorcare'
    },

  ],
  publishedAt: new Date('2024-02-27 20:00:00'),

},
]
function App() {
  

  return (
    <div>
      <Header/>

    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>     
         {posts.map(post => {
          return (
            <Post 
            key={post.id}
            author={post.author} 
            content={post.content} 
            publishedAt={post.publishedAt}
            />
          )
         })}
      </main>

    </div>
    </div>
   
    
  )
}

export default App
