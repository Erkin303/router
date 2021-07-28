import './Home.css';


import React from 'react'

const menu = [
    { to: "ПРОЕКТИРОВАНИЕ", name: "Подробно про проектирование" },
    { to: "ПРОЕКТИРОВАНИЕ", name: "Подробно про проектирование" },
    { to: "ПРОЕКТИРОВАНИЕ", name: "Подробно про проектирование" },
    { to: "ПРОЕКТИРОВАНИЕ", name: "Подробно про проектирование" }
]

export const Service = () => {
    return (
        <div className="row">
            {menu.map((menu, i) => {
                return <div className="col-lg-3 col-md-6 col-sm-12">
                    <i class="fas fa-book    "></i>
                    <div className="smallCard">
                        <p className=' fw-bold fs-4 ms-1 me-1'>{menu.to}</p>
                        <p className=' fs-5 '>{menu.to}</p>
                    </div>
                </div>

            })}

        </div>
    )
}


export const Home = () => {
    return (
        <div>
            <div className="home">

                <div className="container fgh">
                    <p className='osten'>«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии</p>

                    <p className='osten2'>Компания «Osten» была основана в 2019 году!</p>
                    <button className='btn btnOrange'>ПОДРОБНЕЕ</button>
                </div>

            </div>

            <div className="container pt-5 pb-5">
                <div className="d-flex justify-content-center">
                    <div className="quti">
                        <h1>Наши услуги</h1>
                    </div>
                </div>

                <Service></Service>
            </div>

            <div className="section section3">
                <div className="container pb-5">
                    <div className="d-flex justify-content-center">
                        <div className="quti2">
                            <h1>Результаты</h1>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-4 col-sm-12">
                            <div className="samllcard2">
                                <p className='raqam'>300</p>
                                <p className='lift'>лифтов в год</p>
                            </div>


                        </div>
                        <div className="col-lg-4 col-sm-12">

                            <div className="samllcard2">
                                <p className='raqam'>2</p>
                                <p className='lift'>года на рынке</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-12">

                            <div className="samllcard2">
                                <p className='raqam'>200</p>
                                <p className='lift'>эскалаторов в год</p>
                            </div>

                        </div>
                    </div>
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




