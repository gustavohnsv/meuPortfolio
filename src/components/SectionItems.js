import '../index.scss'
import SectionCard from './SectionCard'
import languageList from './languageList'
import toolList from './toolList'

function Sectionitems(props) {

    return(
        <div className='section-items' id={props.id}>
            <section className='section-items-main'>
                <h3> {props.title} </h3>
                    <div className='section-items-main-items-right'>
                        {
                            languageList.map((item) => {
                                return (
                                    <SectionCard 
                                    key={item.id}
                                    href={item.href}
                                    url={item.url}
                                    alt={item.alt}
                                    text={item.text}
                                    />
                                )
                            })
                        }
                        {
                            toolList.map((item) => {
                                return (
                                    <SectionCard 
                                    key={item.id}
                                    href={item.href}
                                    url={item.url}
                                    alt={item.alt}
                                    text={item.text}
                                    />
                                )
                            })
                        }
                    </div>
            </section>
        </div>
    )
}

export default Sectionitems