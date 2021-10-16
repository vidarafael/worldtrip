import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/styles.module.css';


const Slide = (): JSX.Element => {
  return (
    <Box maxWidth="1080px" mx="auto" my="30px">
      <Swiper
      // install Swiper modules
        className={styles['swiper-button-prev']}
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
  )
}

export { Slide }