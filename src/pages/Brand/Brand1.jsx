import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>평택 브레인시티 수자인 - 브랜드 소개</title>
  <meta
    name="description"
    content="한양 수자인(SUJAIN)의 브랜드 철학과 가치를 소개합니다. 기술, 환경, 사람의 균형을 고려한 주거철학으로 프리미엄 라이프를 완성하는 평택 브레인시티 수자인."
  />
  <link rel="canonical" href="https://sinbiapt.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="평택 브레인시티 수자인" />
  <meta property="og:title" content="평택 브레인시티 수자인 - 브랜드 소개" />
  <meta
    property="og:description"
    content="한양 수자인 브랜드 소개: 사람과 환경, 기술의 균형을 담은 수자인만의 철학으로 더 나은 일상을 제시하는 프리미엄 아파트, 평택 브레인시티 수자인."
  />
  <meta property="og:url" content="https://sinbiapt.co.kr/Brand/intro" />
  <meta property="og:image" content="https://sinbiapt.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>평택 브레인시티 수자인 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  평택 브레인시티 수자인은 기술, 환경, 사람의 균형을 고려한 한양 수자인(SUJAIN) 브랜드를 적용했습니다.
  스마트 설계와 친환경 자재, 고품질 마감으로 더 안전하고 쾌적한 생활을 실현합니다. 균형 있는 삶을 위한
  브랜드 철학과 함께, 미래 지향적 주거가치를 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>균형 잡힌 삶의 시작</div>
  <div>한양 수자인, 브레인시티의 중심에서</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="평택 브레인시티 수자인brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
