import './News.css';


import React from 'react'

export const News = () => {
    return (
        <div>
            <div className="section">
                <div className="container">
                    <p className='kattaHarf'>News</p>
                    <p className='kichiikHarf'>Крупная лифтостроительная компания в Узбекистане!</p>
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
