import { Link } from 'react-router-dom';
import {useState} from 'react';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleHome.css';
import '../../assets/stylesFull.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp  } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown  } from '@fortawesome/free-solid-svg-icons';

/* Importing images */
import imgPorsche from '../../assets/imgs/porscheSVG.svg'
import imgOldMercedes from '../../assets/imgs/oldMercedesSVGReduced.svg'
import imgSilvia from '../../assets/imgs/silviaSVGReduced.svg'
import imgBmwRoadTrip from '../../assets/imgs/bmwRoadTripSVGReduced.svg'
import imgUser from '../../assets/imgs/userSVGReduced.svg'

function Home() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const increment2 = () => {
        setCount2(prevCount2 => prevCount2 + 1);
    };

    const decrement2 = () => {
        setCount2(prevCount2 => prevCount2 - 1);
    };

    return(
       <>
        {/* Sections */}
        {/* Menu */}
        <section className="fullAlignFlex espacoTopo">
            <div className="container align-self-center">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btnSectionTopo">
                            <Link to="/">GARAGEM</Link>
                        </button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btnSectionTopo">
                            <Link to="/">COMUNIDADE</Link>
                        </button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btnSectionTopo">
                            <Link to="/">CARROS</Link>
                        </button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <button className="btn btnSectionTopo">
                        <Link to="/">CLASSIFICADOS</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>   
        {/* News, images */}
        <section className="fullAlignFlex espacoTopo espacoLateral">
        <div className="align-self-center">
            <div className="row newsBorder">
                <div className="col-12">
                    <img src={imgPorsche} alt="Porsche supera record!" className="widthFull newsImgStyle"></img>
                </div>
                <div className="col-12">
                    <p className="newsParagraph">Porsche estabelece novo record em Nürburgring !!</p>
                </div>
            </div>     

            <div className="row espacoTopo">
                <div className="col-12 col-xl-6">
                    <img src={imgOldMercedes} alt="Mercedes Antiga" className="newsImgStyle"></img>
                    <p className="newsParagraph">Antiguidades de respeito que você deve conhecer</p>     
                </div>

                <div className="col-12 col-xl-6 flexDirectionColumn">
                    <div className="col-12">
                        <img src={imgSilvia} alt="Silvia JDM" className="newsImgStyle"></img>
                        <p className="legendaNews">Nissan Silvia em detalhes, JDM perfeito para drift !!</p> 
                    </div>  

                    <div className="col-12 espacoTopo">
                        <Link to="" className="legendaTopics">Explorando a Paixão Automotiva: O Fascinante Mundo dos Carros</Link> 
                        <Link to="" className="legendaTopics mt-1">Design Incrível</Link> 
                        <Link to="" className="legendaTopics mt-1">Performance Eletrizante</Link> 
                        <Link to="" className="legendaTopics mt-1">Compartilhando Histórias</Link> 
                        <Link to="" className="legendaTopics mt-1">Inovação Sustentável</Link> 
                        <Link to="" className="legendaTopics mt-1">Eventos e Encontros</Link> 
                        <Link to="" className="legendaTopics mt-1">Drift e Tunning</Link> 
                        <Link to="" className="legendaTopics mt-1">Técnica e Equipamento</Link> 
                    </div>    
                </div>
            </div>

            <div className="row newsBorder">
                <div className="col-12">
                    <img src={imgBmwRoadTrip} alt="Viagem de BMW" className="widthFull newsImgStyle"></img>
                </div>
                <div className="col-12">
                    <p className="newsParagraph">Confira as imagens da nossa Road Trip !!</p>     
                </div>
            </div>  
            </div>
        </section>

        <hr className="divisor mt-5"></hr>

        <section className="d-flex mb-5 espacoTopo fullAlignFlex" id="comunidade">
            <div className="container align-self-center">
                <h1>Comunidade</h1>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="d-flex align-items-center borderComment">
                                <div className="borderUser col-3">
                                    <img src={imgUser} alt="Usuario" width="50"></img>
                                    <p><strong><em>SpeedDemon666</em></strong></p>
                                </div>
                                <p className="col-7">Lorem ipsum dolor sit et officia repudiandae vitae ipsa fugiat doloremque, 
                                    quod possimus consectetur rerum debitis minus, esse placeat sint quas facere temporibus?</p>
                                <p className="col-2 align-self-end alinhaLeft">
                                    <div className="d-flex g-10">
                                        <div>
                                            {count2}
                                        </div>
                                        <button onClick={increment2}>
                                            <FontAwesomeIcon  icon={faThumbsUp}></FontAwesomeIcon>
                                        </button>
                                        <button onClick={decrement2}>
                                            <FontAwesomeIcon  icon={faThumbsDown}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                 </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 marginMediaQuery">
                            <div className="d-flex align-items-center borderComment">
                                <div className="borderUser col-3">
                                    <img src={imgUser} alt="Usuario" width="50"></img>
                                    <p><strong><em>JoseCarlos67</em></strong></p>
                                </div>
                                <p className="col-7">Lorem ipsum dolor sit et officia repudiandae vitae ipsa 
                                    fugiat doloremque, quod possimus consectetur rerum debitis minus, 
                                    esse placeat sint quas facere temporibus?</p>
                                <p className="col-2 align-self-end alinhaLeft">
                                    <div className="d-flex g-10">
                                        <div>
                                            {count}
                                        </div>
                                        <button onClick={increment}>
                                            <FontAwesomeIcon  icon={faThumbsUp}></FontAwesomeIcon>
                                        </button>
                                        <button onClick={decrement}>
                                            <FontAwesomeIcon  icon={faThumbsDown}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 mt-4 mb-4">
                            <div className="d-flex align-items-center borderComment">
                                <div className="borderUser">
                                    <img src={imgUser} alt="Usuario" width="50"></img>
                                    <p><strong><em>ZecaSpeed2</em></strong></p>
                                </div>
                                <p>Lorem ipsum dolor sit et officia repudiandae 
                                    vitae ipsa fugiat doloremque, quod possimus consectetur rerum debitis minus, esse placeat 
                                    sint quas facere temporibus?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr className="divisor mt-5"></hr>
       </>
    );
}



export default Home;