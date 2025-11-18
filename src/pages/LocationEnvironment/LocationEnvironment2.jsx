import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>평택 브레인시티 수자인 - 프리미엄</title>
  <meta
    name="description"
    content="평택 브레인시티 수자인의 프리미엄을 확인하세요. 삼성 평택캠퍼스 인접 직주근접 입지, 지상 차 없는 공원형 단지, 특화 커뮤니티와 무상옵션 구성까지 미래가치를 갖춘 브랜드 대단지입니다."
  />
  <link rel="canonical" href="https://www.vaaclubs.com/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  평택 브레인시티 수자인 - 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  평택 브레인시티 수자인의 프리미엄 가치를 만나보세요.
  삼성 평택캠퍼스 인접 입지, 브레인시티 내 산업·교육·의료 기반과
  지상 차 없는 공원형 단지, 무상옵션·특화 커뮤니티까지 갖춘 미래형 브랜드 대단지입니다.
</p>

<div className={styles.textBox}>
  <div>브레인시티의 중심에서</div>
  <div>프리미엄 주거가치를 완성하다</div>
</div>


      <img
        src={page1}
        className={styles.image3}
        alt="평택 브레인시티 수자인-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
