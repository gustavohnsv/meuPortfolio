import '../index.scss'

function UserRepos(props) {
    return(
        <div className='user-repos'>
            <div className='user-repos-name'>           
                <a href={props.url} target='_blank' rel="noreferrer">{props.name}</a>
                <span> {props.desc} </span>
            </div>
            <div className='user-repos-info'>           
                    {props.language && (
                        <ul>
                            <li>
                                <span className='user-repos-info-lang'> {props.language}</span>   
                            </li>
                        </ul>
                    )}
                <span className='user-repos-info-date'> {Intl.DateTimeFormat('pt-BR').format(new Date(props.update))}</span>
            </div>
        </div>
    )
}

export default UserRepos