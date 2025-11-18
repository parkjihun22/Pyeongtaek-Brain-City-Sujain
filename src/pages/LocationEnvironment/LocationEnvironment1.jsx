import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "브레인시티 개발 호재 중심지<br />탄탄한 미래가치 입지",
    contentText:
      "삼성전자 평택캠퍼스 인접<br />KAIST·아주대병원 등 미래형 자족도시로 개발 중",
  },
  {
    img: section2Image2,
    titleText: "광역 교통망 프리미엄<br />서울까지 30분대 생활권",
    contentText:
      "SRT 평택지제역 인접, 송탄 IC 초근접<br />GTX·KTX 연장 검토로 수도권 접근성 강화",
  },
  {
    img: section2Image3,
    titleText: "직주근접 입지 경쟁력<br />안정적 실거주 수요",
    contentText:
      "삼성 평택캠퍼스·고덕산단 차량 약 10분대<br />브레인시티 산업단지 내 수요 직결",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 확충 중<br />원스톱 라이프 기대",
    contentText:
      "초등학교 예정지 앞 위치<br />쇼핑·교육·의료 인프라 단계별 조성 중",
  },
  {
    img: section2Image5,
    titleText: "브랜드 대단지 수자인<br />889세대 프리미엄 주거지",
    contentText:
      "지하 2층~지상 34층, 총 6개동 구성<br />드레스룸·김치냉장고장 등 무상 옵션 제공",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 자연과 조경 설계<br />공원 같은 단지 환경",
    contentText:
      "지상차 없는 단지 설계<br />산책로·녹지공간으로 여유로운 일상 구현",
  },
];





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
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>평택 브레인시티 수자인 - 입지환경</title>
  <meta
    name="description"
    content="삼성 평택캠퍼스와 브레인시티 산업단지 인접, 평택 브레인시티 수자인의 미래가치를 확인하세요. SRT·고속도로·IC 등 광역 교통망과 주변 개발 호재까지 갖춘 입지환경."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.vaaclubs.com/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="평택 브레인시티 수자인" />
  <meta property="og:title" content="평택 브레인시티 수자인 - 입지환경" />
  <meta
    property="og:description"
    content="SRT 평택지제역, 송탄 IC, 삼성 평택캠퍼스 인접 입지. 교통·산업·교육 인프라와 개발 모멘텀을 갖춘 평택 브레인시티 수자인의 미래가치를 확인하세요."
  />
  <meta property="og:url" content="https://www.vaaclubs.com/LocationEnvironment/intro" />
  <meta property="og:image" content="https://www.vaaclubs.com/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="평택 브레인시티 수자인 - 입지환경" />
  <meta
    name="twitter:description"
    content="SRT·IC·산업단지·교육시설 인접 입지. 직주근접과 개발 잠재력이 공존하는 평택 브레인시티 수자인의 입지환경을 확인하세요."
  />
  <meta name="twitter:image" content="https://www.vaaclubs.com/img/og/location.jpg" />
  <meta name="twitter:url" content="https://www.vaaclubs.com/LocationEnvironment/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "평택 브레인시티 수자인 - 입지환경",
      "url": "https://www.vaaclubs.com/LocationEnvironment/intro",
      "description":
        "삼성 평택캠퍼스와 브레인시티 산업단지, SRT 지제역, 송탄 IC 등 인접한 교통·산업 복합 입지. 평택 브레인시티 수자인의 핵심 입지환경 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.vaaclubs.com/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.vaaclubs.com/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.vaaclubs.com/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  평택 브레인시티 수자인 - 입지안내
</h1>
<p className={styles.screenReaderOnly}>
  평택 브레인시티 수자인의 입지 정보를 확인하세요. 삼성 평택캠퍼스와 산업단지 인접,
  SRT·IC·고속도로 이용이 편리한 교통환경과 교육·생활 인프라까지 갖춘 미래형 입지입니다.
</p>

<div className={styles.textBox}>
  <div>브레인시티 핵심에 자리한</div>
  <div>미래가치를 누리는 수자인</div>
  <div>입지부터 남다른 프리미엄을 확인하세요</div>
</div>



      <img
        src={page1}
        className={styles.image2}
        alt="평택 브레인시티 수자인입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 평택 브레인시티 수자인사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
