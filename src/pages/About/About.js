import './About.css';


import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'altext',
        caption: 'Osten L2',
        img1: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg",
        img2: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg",
        img3: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"

    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Osten L1',
        img1: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg",
        img2: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg",
        img3: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Osten L3',
        img1: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg",
        img2: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg",
        img3: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
    }
];



const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.caption} />

                <div className="swpimg">
                    <div className=" ">
                        <div className='aylanish m-2'>
                            <img src={item.img1} className="imgg" alt="" />
                            <h3 className='text-light bg-dark'> OSTEN L2</h3>
                        </div>
                    </div>
                    <div className=" ">
                        <div className='aylanish m-2'>
                            <img src={item.img2} className="imgg" alt="" />
                            <h3 className='text-light bg-dark'> OSTEN L2</h3>
                        </div>
                    </div>
                    <div className=" ">
                        <div className='aylanish m-2'>
                            <img src={item.img3} className="imgg" alt="" />
                            <h3 className='text-light bg-dark'> OSTEN L2</h3>
                        </div>
                    </div>
                </div>

            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
                max-width: 100%;
                height: 570px;
                background: white;
              }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" className='text-dark fs-5 fw-bold chiziq' onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" className='text-dark fs-5 fw-bold chiziq' onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Example;


export const About = () => {
    return (
        <div>
            <div className="section">
                <div className="container">
                    <p className='kattaHarf'>MODERN LIFT SYSTEMS</p>
                    <p className='kichiikHarf'>Крупная лифтостроительная компания в Узбекистане!</p>
                </div>

            </div>
            <div className="section2">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="quti2">
                            <h1>О нас</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="m-2 p-1">
                                <p className='fw-bold text-dark'>
                                    Современная, динамично развивающаяся, следую- щая международным стандартам качества, при этом настроенная на максимальную доступность продукции для всех слоёв населения.
                                    «Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии.
                                </p>
                                <p>
                                    В настоящее время в условиях ускоренного разви- тия экономики Республики Узбекистан и растущей динамики строительства жилых многоэтажных домов, торгово-развлекательных комплексов и бизнес центров. Возрос спрос на грузоподъемное оборудование отвечающим современным требо- ваниям эргономики и удобства эксплуатации.

                                    Принимая во внимание факторы, приведенные выше, а также в целях организации производства конкурентоспособной продукции в Республике Узбе- кистан, предлагается освоение производства лиф- тов и эскалаторов.

                                    Цели реализации данного проекта : џ производство конкурентоспособной продукции; џ обеспечение строительных компаний надёжным и качественным подъемным оборудованием; џ создание новых рабочих мест (200 ч.).
                                </p>
                                <div>
                                    <img src="https://osten-co.uz/images/index/home.jpg" alt="" className="img-fluid m-2" />
                                </div>
                                <div>
                                    <img src="https://osten-co.uz/images/index/about.jpg" alt="" className="img-fluid m-2" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="m-2 p-1">
                                <p>Для получения сертификата на лифт проверяются следующие устройства безопасности, входящие в лифтовое оборудование:</p>
                                <ul>
                                    <li>Ограничители скорости</li>
                                    <li>Замки дверей шахт</li>
                                    <li>Буферы</li>
                                    <li>Ловители</li>
                                    <li>Гидроаппаратура безопасности</li>
                                </ul>
                                <p>
                                    Испытания лифтовых узлов безопасности проводят технически компетентные сотрудники лабораторий, занимающихся лифтовым оборудованием и несущие ответственность за качество испытаний и объективность результатов. После окончания проверки оформляется отчет о техническом состоянии лифта и его соответствии требованиям ТУ, ГОСТ и EN.
                                </p>
                                <p>
                                    Лабораторией называют изолированное помещение, в котором находятся специальные измерительные приборы для тестирования отдельных узлов и элементов лифта. Также лабораторией считаются большие испытательные центры или ИЦ, имеющие испытательную башню, шахту и стенды для испытаний. К испытательным центрам выдвигаются высокие требования, соответствия текущей системе сертификации для аттестации и получения допуска к испытаниям, чтобы иметь возможность тестировать оборудование на высоком уровне, обеспечивать точность и объективность проводимых
                                </p>
                                <p>
                                    На высоте 56 метров расположена, самая высокая в стране, смотровая производственный потенциал и масштабность ООО «ТЕХНОПАРК».
                                </p>
                                <p>
                                    Испытательный центр служит как для тестирования лифтов, так и для исследовательской работы и совершенствования систем безопасности лифта и лифтового оборудования.
                                </p>
                                <p>
                                    Строительство 60-метровой испытательной башни началось в 2019 году и будет окончено в кратчайшие сроки в течении 6 месяцев в 2020 году, наличие испытательной башни в производственном комплексе ООО «ТЕХНОПАРК» даст толчок к развитию лифтостроительной отросли в Республике Узбекистан. Позволить применять только высококачественные конструкции лифтов, что обеспечит высокую степень безопасности населения в Республике.
                                </p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

            <div className="section7">
                <div className="d-flex justify-content-center">
                    <div className="quti2">
                        <h1>Кабины лифтов</h1>
                    </div>
                </div>
                <Example></Example>

                <div className="text-center m-3">
                    <button className='btn ta'>ВСЯ ПРОДУКЦИЯ</button>
                </div>
            </div>


            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm12">
                            <div className='footers'>
                                <p className='fs-4'>О НАС</p>
                                <p>«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии Компания «Osten» была основана в 2019 году!</p>
                                <p className='fs-4'>МЫ В СОЦ.СЕТЯХ:</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm12">
                            <div className='footers'>
                                <p><a href="#">Построен новый лифт</a></p>
                                <p><a href="#">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</a></p>
                                <p><a href="#">ДИСПЕТЧЕРИЗАЦИЯ</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm12">
                            <div className='footers'>
                                <p className='fs-4'>КОНТАКТЫ</p>
                                <p>Номер телефона:  +998 (93) 511-11-17; +998 (91) 791-51-15</p>
                                <p>Электронная почта: <a href="#">info@uzlift.uz</a></p>
                                <p >Адрес:  100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
