import styles from './Titulo.module.css'

export default function Titulo({Titulo}){
    return(
        <div className={`${styles.tituloprincipal} text-center`}>
            <h1>{Titulo}</h1>
        </div>
    )
}