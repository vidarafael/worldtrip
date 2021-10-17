import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slide = (): JSX.Element => {
  const css = `
    div.swiper-button-prev,
    div.swiper-button-next {
      color: #FFBA08;
    }

    span.swiper-pagination-bullet {
      background: #999999;
      opacity: 1;
    }

    span.swiper-pagination-bullet-active {
      background: #FFBA08;
    }

  `

  return (
    <>
      <style>
        {css}
      </style>
      <Box maxWidth="1080px" mx="auto" my="30px">
        <Swiper
        // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Image src="/images/continents/europacontinent.png" alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/continents/europacontinent.png" alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/continents/europacontinent.png" alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/continents/europacontinent.png" alt="logo" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  )
}

export { Slide }