import '../index.scss'

function SectionText(props) {
    return(
        <div className='section-text' id={props.id}>
            <section className='section-text-left'>
                <div className='section-text-left-img'>
                    <img src={props.img} alt=''/>
                </div>
            </section>

            <section className='section-text-right'>
                <h3> {props.title} </h3>
                <p>
                    Meu nome é <b>Gustavo Henriques Vieira</b>, um entusiasta apaixonado pela área de tecnologia. Sou formado em <b>Técnico em Desenvolvimento de Sistemas pela <a href='https://www.cps.sp.gov.br/etecs/etec-de-poa/' target='_blank' rel="noreferrer">ETEC de Poá</a></b>, onde adquiri uma sólida base técnica e habilidades essenciais para entrar no mundo da programação.
                </p>
                <p>                 
                    Atualmente, estou cursando <b>Sistemas de Informação na <a href='https://www5.usp.br/' target='_blank' rel="noreferrer">Universidade de São Paulo</a></b>, mais especificamente na <b><a href='https://www5.each.usp.br/' target='_blank' rel="noreferrer">Escola de Artes, Ciências e Humanidades (EACH-USP)</a> </b>. Aqui, além de me aprofundar em conceitos avançados de programação e sistemas de informação, estou imerso em um ambiente acadêmico vibrante e colaborativo, <b>onde posso explorar e expandir meu conhecimento em diversas áreas relacionadas à tecnologia.</b>
                </p>
            </section>
        </div>
    )
}

export default SectionText