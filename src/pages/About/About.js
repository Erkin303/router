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
                    <p className='kichiikHarf'>?????????????? ?????????????????????????????????? ???????????????? ?? ??????????????????????!</p>
                </div>

            </div>
            <div className="section2">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="quti2">
                            <h1>?? ??????</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="m-2 p-1">
                                <p className='fw-bold text-dark'>
                                    ??????????????????????, ?????????????????? ??????????????????????????, ????????????- ?????? ?????????????????????????? ???????????????????? ????????????????, ?????? ???????? ?????????????????????? ???? ???????????????????????? ?????????????????????? ?????????????????? ?????? ???????? ?????????? ??????????????????.
                                    ??Osten?? ??? ???????????????????? ??????????????????????????, ???????????? ?? ?????????????????????? ?? ?????????????? ????????.
                                </p>
                                <p>
                                    ?? ?????????????????? ?????????? ?? ???????????????? ?????????????????????? ??????????- ?????? ?????????????????? ???????????????????? ???????????????????? ?? ???????????????? ???????????????? ?????????????????????????? ?????????? ???????????????????????? ??????????, ??????????????-?????????????????????????????? ???????????????????? ?? ???????????? ??????????????. ???????????? ?????????? ???? ???????????????????????????? ???????????????????????? ???????????????????? ?????????????????????? ??????????- ???????????? ???????????????????? ?? ???????????????? ????????????????????????.

                                    ???????????????? ???? ???????????????? ??????????????, ?????????????????????? ????????, ?? ?????????? ?? ?????????? ?????????????????????? ???????????????????????? ?????????????????????????????????????? ?????????????????? ?? ???????????????????? ????????- ????????????, ???????????????????????? ???????????????? ???????????????????????? ??????- ?????? ?? ??????????????????????.

                                    ???????? ???????????????????? ?????????????? ?????????????? : ?? ???????????????????????? ?????????????????????????????????????? ??????????????????; ?? ?????????????????????? ???????????????????????? ???????????????? ???????????????? ?? ???????????????????????? ?????????????????? ??????????????????????????; ?? ???????????????? ?????????? ?????????????? ???????? (200 ??.).
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
                                <p>?????? ?????????????????? ?????????????????????? ???? ???????? ?????????????????????? ?????????????????? ???????????????????? ????????????????????????, ???????????????? ?? ???????????????? ????????????????????????:</p>
                                <ul>
                                    <li>???????????????????????? ????????????????</li>
                                    <li>?????????? ???????????? ????????</li>
                                    <li>????????????</li>
                                    <li>????????????????</li>
                                    <li>?????????????????????????????? ????????????????????????</li>
                                </ul>
                                <p>
                                    ?????????????????? ???????????????? ?????????? ???????????????????????? ???????????????? ???????????????????? ???????????????????????? ???????????????????? ??????????????????????, ???????????????????????? ???????????????? ?????????????????????????? ?? ?????????????? ?????????????????????????????? ???? ???????????????? ?????????????????? ?? ?????????????????????????? ??????????????????????. ?????????? ?????????????????? ???????????????? ?????????????????????? ?????????? ?? ?????????????????????? ?????????????????? ?????????? ?? ?????? ???????????????????????? ?????????????????????? ????, ???????? ?? EN.
                                </p>
                                <p>
                                    ???????????????????????? ???????????????? ?????????????????????????? ??????????????????, ?? ?????????????? ?????????????????? ?????????????????????? ?????????????????????????? ?????????????? ?????? ???????????????????????? ?????????????????? ?????????? ?? ?????????????????? ??????????. ?????????? ???????????????????????? ?????????????????? ?????????????? ?????????????????????????? ???????????? ?????? ????, ?????????????? ?????????????????????????? ??????????, ?????????? ?? ???????????? ?????? ??????????????????. ?? ?????????????????????????? ?????????????? ?????????????????????? ?????????????? ????????????????????, ???????????????????????? ?????????????? ?????????????? ???????????????????????? ?????? ???????????????????? ?? ?????????????????? ?????????????? ?? ????????????????????, ?????????? ?????????? ?????????????????????? ?????????????????????? ???????????????????????? ???? ?????????????? ????????????, ???????????????????????? ???????????????? ?? ?????????????????????????? ????????????????????
                                </p>
                                <p>
                                    ???? ???????????? 56 ???????????? ??????????????????????, ?????????? ?????????????? ?? ????????????, ?????????????????? ???????????????????????????????? ?????????????????? ?? ???????????????????????? ?????? ??????????????????????.
                                </p>
                                <p>
                                    ?????????????????????????? ?????????? ???????????? ?????? ?????? ???????????????????????? ????????????, ?????? ?? ?????? ?????????????????????????????????? ???????????? ?? ?????????????????????????????????? ???????????? ???????????????????????? ?????????? ?? ?????????????????? ????????????????????????.
                                </p>
                                <p>
                                    ?????????????????????????? 60-???????????????? ?????????????????????????? ?????????? ???????????????? ?? 2019 ???????? ?? ?????????? ???????????????? ?? ???????????????????? ?????????? ?? ?????????????? 6 ?????????????? ?? 2020 ????????, ?????????????? ?????????????????????????? ?????????? ?? ???????????????????????????????? ?????????????????? ?????? ?????????????????????? ???????? ???????????? ?? ???????????????? ?????????????????????????????????? ?????????????? ?? ???????????????????? ????????????????????. ?????????????????? ?????????????????? ???????????? ???????????????????????????????????? ?????????????????????? ????????????, ?????? ?????????????????? ?????????????? ?????????????? ???????????????????????? ?????????????????? ?? ????????????????????.
                                </p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

            <div className="section7">
                <div className="d-flex justify-content-center">
                    <div className="quti2">
                        <h1>???????????? ????????????</h1>
                    </div>
                </div>
                <Example></Example>

                <div className="text-center m-3">
                    <button className='btn ta'>?????? ??????????????????</button>
                </div>
            </div>


            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm12">
                            <div className='footers'>
                                <p className='fs-4'>?? ??????</p>
                                <p>??Osten?? ??? ???????????????????? ??????????????????????????, ???????????? ?? ?????????????????????? ?? ?????????????? ???????? ???????????????? ??Osten?? ???????? ???????????????? ?? 2019 ????????!</p>
                                <p className='fs-4'>???? ?? ??????.??????????:</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm12">
                            <div className='footers'>
                                <p><a href="#">???????????????? ?????????? ????????</a></p>
                                <p><a href="#">???????????? ?? ???????????????????????? ??????????????????????</a></p>
                                <p><a href="#">??????????????????????????????</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm12">
                            <div className='footers'>
                                <p className='fs-4'>????????????????</p>
                                <p>?????????? ????????????????:  +998 (93) 511-11-17; +998 (91) 791-51-15</p>
                                <p>?????????????????????? ??????????: <a href="#">info@uzlift.uz</a></p>
                                <p >??????????:  100077, ?????????? ??????????????, ?????????? ???????????????? ???????? 1??.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
