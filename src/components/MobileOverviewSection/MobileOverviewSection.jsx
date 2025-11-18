// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
        <strong>사업명</strong>
        <span>평택 브레인시티 수자인</span>
      </li>
      <li>
        <strong>대지위치</strong>
        <span>경기도 평택시 도일동 브레인시티 일반산업단지 공동주택용지 8블록</span>
      </li>
      <li>
        <strong>건축규모</strong>
        <span>지하 2층 ~ 지상 34층, 총 6개동</span>
      </li>
      <li>
        <strong>주택형</strong>
        <span>전용 59㎡ · 84㎡ (중소형 위주)</span>
      </li>
      <li>
        <strong>세대수</strong>
        <span>총 889세대 (전용 59㎡ 232세대, 전용 84㎡ 657세대)</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            브레인시티 생활중심과 학세권을 누리는<br />
            평택 브레인시티 수자인 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "브레인시티 개발 프리미엄",
      desc:
        "산업·교육·의료 인프라 집중 개발 중<br/>KAIST·아주대병원 예정, 삼성 평택캠퍼스 인접<br/>첨단 R&D 중심의 신성장 자족도시 조성",
    },
    {
      img: slide2,
      title: "광역 교통허브 입지",
      desc:
        "SRT 평택지제역 이용, 강남까지 30분대<br/>GTX·KTX 연장 검토 및 송탄 IC 초인접<br/>사통팔달 광역 교통망 수혜지",
    },
    {
      img: slide3,
      title: "직주근접 + 배후수요 탄탄",
      desc:
        "삼성전자 평택캠퍼스 차량 10분 내 거리<br/>브레인시티 산업단지·고덕산단 배후 주거지<br/>안정적인 임대·실거주 수요 확보",
    },
    {
      img: slide4,
      title: "초등학교 예정지 인접 학세권",
      desc:
        "단지 앞 초등학교 예정 부지 확보<br/>도보 통학 가능한 안전한 교육환경<br/>12년 일관 교육 가능한 미래 교육지구",
    },
    {
      img: slide5,
      title: "무상 옵션과 계약 혜택",
      desc:
        "드레스룸, 냉장고장 등 11종 무상 제공<br/>계약금 500만원 정액제, 중도금 대출 가능<br/>분양가 상한제로 가격 부담 ↓ 혜택 ↑",
    },
    {
      img: slide6,
      title: "한양 수자인 브랜드 가치",
      desc:
        "우수 디자인·스마트 기술 결합한 프리미엄<br/>친환경 설계와 첨단 보안 시스템 적용<br/>수자인만의 고품질 주거공간 실현",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
