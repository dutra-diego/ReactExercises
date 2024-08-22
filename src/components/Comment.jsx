import { ThumbsUp, Trash } from 'phosphor-react'
import  styles  from './Comment.module.css'
import { Avatar } from './Avatar'
export function Comment(){
    return (
        <div className={styles.comment}>
              <Avatar  src="https://www.github.com/dutra-diego.png" />
              <div className={styles.commentBox}>
                  <div className={styles.commentContent}>
                    <header>
                      <div className={styles.authorAndTime}>
                        <strong>Diego Dutra</strong>
                        <time title="11 de Maio às 08:13" dateTime='2024-05-11 08:13:30'>Cerca de 1h atrás</time>
                       
                      </div>
                        
                      <button title="Deletar comentário">
                        <Trash size={24} />
                      </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                  </div>

                  <footer>
                    <button>
                      <ThumbsUp/>
                      Aplaudir <span>20</span>
                    </button>
                  </footer>
              </div>
        </div>
    )
}