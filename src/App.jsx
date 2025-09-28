import { useState } from 'react'
import './App.css'
import hellsing from './assets/hellsing.jpg'
import HP from './assets/hp.jpg'
import HxH from './assets/HxH.jpg'

import slider1 from './assets/1.jpg'
import slider2 from './assets/2.jpg'
import slider3 from './assets/3.jpg'
import slider4 from './assets/4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'


import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
         <header>
          <Swiper
     modules={[Autoplay]}
     spaceBetween={0}
     slidesPerView={1}
     autoplay={{
      delay: 3000,
      disableOnInteraction: false,
     }}
     loop={true}
     className="mySwiper"
    >
      <SwiperSlide>
        <img src={slider1} alt="Slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="Slider 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="Slider 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="Slider 4" />
      </SwiperSlide>
      </Swiper>
      </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={hellsing} alt="" className="img-card" />
              <h2 className="titulo-card">Coleção completa Hellsing</h2>
              <p className="desc">Coleção de 1 á 10 (todos os volumes) / É uma história de ação sobrenatural com terror, humor negro e violência, focada na Agência Hellsing, uma organização secreta que protege o Império Britânico de ameaças sobrenaturais.</p>
              <p className="preco">R$(̶6̶0̶0̶) 479,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
              <div className="off">- 20%</div>
             
            </div>
          </a>

          {/* Produto 2 */}
          <a header="#" className="img-card">
          <div className="card">
            <img src={HP} alt="" className="img-card" />
            <h2 className="titulo-card">Coleção completa Hell's paradise</h2>
            <p className="desc">todos os volume 1 a 13  / Temido como o mais forte dentre os shinobis, Gabimaru torna-se um renegado e é capturado, sendo condenado à morte por decapitação.</p>
            <p className="preco">R$(̶3̶0̶0̶)  270,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★</div>
            <div className="off">- 10%</div>
            
          </div>
          </a>
          {/* Produto 3 */}
          <a header="#" className="link-card">
            <div className="card">
              <img src={HxH} alt="" className="img-card" />
              <h2 className="titulo-card">coleção semi-nova Hunter x Hunter</h2>
              <p className="desc">Coleçao usada com "1 ano de vida" (estão como novos) / Narra a jornada de Gon Freecss, um garoto que quer se tornar um Hunter para encontrar o pai desaparecido.</p>
              <p className="preco">R$(2̶.̶2̶5̶0̶,̶0̶0̶) 2.025,00</p>
              <div className="avaliacao"> ★ ★ ★ ☆ ☆</div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/BGgWl2DSRVg?autoplay=1&mute=1&controls=0&loop=1&playlist=BGgWl2DSRVg&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        <footer>
<img src="" alt="" className="logo footer" />

<div className="social-icons">

  <div className="icon">
    <img src="" alt="" id="instagran" />
  </div>

  <div className="icon">
    <img src="" alt="" id="discord" />
  </div>

  <div className="icon">
     <img src="" alt="" id="X" />
  </div>
  
  <div className="icon"></div>
  <img src="" alt="" id="youtube  " />
</div>
        </footer>
      </main>
    </>
  )
}

export default App
