import '../index.scss'
import SectionText from './SectionText';
import Sectionitems from './SectionItems';
import SectionGithub from './SectionGithub';
import SectionContact from './SectionContact';

function Main() {

    return(
        <div className='main'>
            <SectionText title='About me' img='https://media.licdn.com/dms/image/D4E03AQHQ3i0CJTN0wg/profile-displayphoto-shrink_800_800/0/1675350045924?e=1717632000&v=beta&t=nyX-LDWVqQVdTpQJL6k1sAbkHsvNVoQWX6litb7lj1E' id='1'/>
            <Sectionitems title='Tools & Languages' id='2'/>
            <SectionGithub title='Github' username='gustavohnsv' id='3'/>
            <SectionContact title='Contact' id='4'/>
        </div>
    )
}

export default Main