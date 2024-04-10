import '../index.scss'

function SectionCard(props) {

    function blurOthers(event) {
        var cards = document.getElementsByClassName('section-card');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.add('blur');
        }
        event.target.classList.remove('blur');
    }

    function unblurOthers() {
        var cards = document.getElementsByClassName('section-card');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('blur');
        }
    }

    return(
        <div className='section-card' onMouseOver={blurOthers} onMouseOut={unblurOthers}>
            <a href={props.href} target='_blank' rel="noreferrer">            
                <img src={props.url} alt={props.alt} style={{width: '100%'}}/>
            </a>
            <div className="section-card-content">
                <h4><b>{props.text}</b></h4>
            </div>
        </div>
    )
}

export default SectionCard