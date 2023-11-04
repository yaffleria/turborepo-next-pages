import type { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
  border: 1px solid red;
  background-color: white;
  color: blue;
`
// const CustomSlide = styled(SwiperSlide)`
//   box-sizing: border-box;
//   border: 1px solid green;
// `

export function SwiperExample(): ReactElement {
  return (
    <CustomSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1156&q=80" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://images.unsplash.com/photo-1561152092-12f18f8a222a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </CustomSwiper>  
  )
}
