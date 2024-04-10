import '../index.scss'
import axios from 'axios'
import UserRepos from './UserRepos';
import { useState, useEffect } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

    function SectionGithub(props) {

        const { title, username } = props;
        const [userData, setUserData] = useState(null);
        const [userRepos, setUserRepos] = useState(null);
        const [loading, setLoading] = useState(true);
        const [visibleItemCount, setVisibleItemCount] = useState(3);

        useEffect(() => {
            async function fetchUserData() {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                const responseRepos = await axios.get(`https://api.github.com/users/${username}/repos`);
                //console.log(responseRepos.data) 
                //console.log(response.data);
                setUserData(response.data);
                setUserRepos(responseRepos.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                setLoading(false);
            }
            }fetchUserData();}, [username]);

        const toggleVisibility = () => {
            if (visibleItemCount === 3) {
                setVisibleItemCount(userRepos.length);
            } else {
                setVisibleItemCount(3);
            }
        };

        if (loading) {
            return <div className='section-github-loading'> Carregando... </div>;
        }
        
        if (!userData) {
            return <div className='section-github-error'> Falha ao encontrar usuário, tente novamente mais tarde </div>;
        }

        return (            

            <div className='section-github' id={props.id}>
                <h3> {title} </h3>
                <TransitionGroup>
                    {              
                        userRepos && userRepos.slice(0, visibleItemCount).map(item => (
                            <CSSTransition key={item.id} timeout={500} classNames="fade">
                                <UserRepos
                                key={item.id}
                                name={item.name}
                                language={item.language}
                                update={item.updated_at}
                                url={item.html_url}
                                desc={item.description}
                                />
                            </CSSTransition>

                        ))
                    }
                </TransitionGroup>
                <button onClick={toggleVisibility}>
                    {visibleItemCount === 3 ? <CiCirclePlus size={25} color="#FFF"/> : <CiCircleMinus size={25} color="#FFF"/>}
                </button>
            </div>
        )
    }

    export default SectionGithub