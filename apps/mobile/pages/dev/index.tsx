import type { NextPage } from "next";
import { SwiperExample } from 'ui/components/swiper-example'

const DevPage: NextPage = () => {
  const text = process.env.NEXT_PUBLIC_API_HOST

  return (
    // <SwiperExample />
    <span>{text}</span>
  );
};

export default DevPage;
