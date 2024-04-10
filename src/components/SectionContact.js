import '../index.scss'
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import { MdCopyAll } from "react-icons/md";
import {Pagination, A11y, Autoplay } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideList from './slideList'
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';


function SectionContact(props) {

    let notifyCopied = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
    });

    let notifyError = (text) => toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
    });

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                notifyCopied('Copiado para área de transferência!');
            })
            .catch((error) => {
                notifyError('Erro ao copiar texto!');
                console.error(error);
            });
    };

    return(
        <div className='section-contact' id={props.id}>
            <h3> {props.title} </h3>
            <Swiper
            effect={'cards'}
            modules={[Pagination, A11y, Autoplay, EffectCards]}
            slidesPerView={1}
            pagination={{ clickable: true}}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            touchMoveStopPropagation={true}
            >
                {slideList && slideList.slice(0,4).map( (item) => ( 
                    <SwiperSlide key={item.id} className='slide-card' style={{ background: item.background}}>
                        <a href={item.link} target='_blank' rel="noreferrer">
                            <h2> {item.text} </h2>
                            <img 
                            src={item.url} 
                            alt={item.text}
                            className='slide-img'
                            />  
                        </a> 
                    </SwiperSlide>
                    ))
                }
                <SwiperSlide className='slide-card' style={{ background: slideList[4].background}}>
                     <h2> {slideList[4].text} </h2>
                     <div className='slide-card-gmail'>
                       <button onClick={() => copyToClipboard(slideList[4].link)}> {slideList[4].link} </button>
                     <MdCopyAll size={20} color='#FFF'/> 
                     </div>
                        <img 
                        src={slideList[4].url} 
                        alt={slideList[4].text}
                        className='slide-img'
                        />     
                </SwiperSlide>
            </Swiper>
            <ToastContainer />
        </div>
    )
}

export default SectionContact