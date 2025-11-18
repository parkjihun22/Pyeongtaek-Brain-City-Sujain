import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
	{ label: '사업명', value: '평택 브레인시티 수자인' },
	{ label: '사업위치', value: '경기도 평택시 도일동 브레인시티 일반산업단지 공동주택용지 8블록' },
	{ label: '대지면적', value: '21,997.3㎡' },
	{ label: '건축면적', value: '2,915.7㎡' },
	{ label: '연면적', value: '89,295.1㎡' },
	{ label: '용적률', value: '199.97%' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 34층, 총 6개동' },
	{ label: '세대수', value: '총 889세대 (전용 59㎡ 232세대, 전용 84㎡ 657세대)' },
  ];
  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "계약서류안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>평택 브레인시티 수자인 - 사업안내</title>
  <meta
    name="description"
    content="경기 평택시 브레인시티 8블록에 들어서는 평택 브레인시티 수자인의 사업 개요를 확인하세요. 총 889세대(지하 2층~지상 34층, 6개동), 전용 59·84㎡ 구성, 입지·규모·입주 정보 안내."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://sinbiapt.co.kr/BusinessGuide/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="평택 브레인시티 수자인" />
  <meta property="og:title" content="평택 브레인시티 수자인 - 사업안내" />
  <meta
    property="og:description"
    content="경기 평택 브레인시티 내 초입 입지, 총 889세대 프리미엄 대단지. 위치, 평형 구성, 입주 예정일 등 핵심 사업 정보를 한눈에 확인하세요."
  />
  <meta property="og:url" content="https://sinbiapt.co.kr/BusinessGuide/intro" />
  <meta property="og:image" content="https://sinbiapt.co.kr/img/og/business.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="평택 브레인시티 수자인 - 사업안내" />
  <meta
    name="twitter:description"
    content="지하 2층~지상 34층, 6개동 889세대 구성. 전용 59·84㎡ 타입과 특화설계, 초등학교 인접 입지와 입주 예정일을 확인하세요."
  />
  <meta name="twitter:image" content="https://sinbiapt.co.kr/img/og/business.jpg" />
  <meta name="twitter:url" content="https://sinbiapt.co.kr/BusinessGuide/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "평택 브레인시티 수자인 - 사업안내",
      "url": "https://sinbiapt.co.kr/BusinessGuide/intro",
      "description":
        "경기 평택시 브레인시티에 조성되는 평택 브레인시티 수자인의 사업 개요와 위치, 평형 구성, 입주 예정일 등 주요 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://sinbiapt.co.kr/img/og/business.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://sinbiapt.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://sinbiapt.co.kr/BusinessGuide/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>평택 브레인시티 수자인 - 사업안내</h1>
<p className={styles.screenReaderOnly}>
  평택 브레인시티 수자인은 경기도 평택시 브레인시티 내 초입에 위치한 프리미엄 브랜드 대단지입니다.
  이 페이지에서는 889세대 규모와 전용 59·84㎡ 타입 구성, 지하 2층~지상 34층 특화 설계,
  그리고 삼성 평택캠퍼스 인접 입지와 입주 예정일 등 핵심 사업 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>브레인시티를 대표할 새로운 주거 기준</div>
  <div>한양 수자인, 도심과 미래를 연결하다</div>
</div>


			<img className={styles.img3} src={page1} alt="평택 브레인시티 수자인-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
