import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평택 브레인시티 수자인-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '수자인' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '평택 브레인시티 수자인') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          미래를 품은 브레인시티, 수자인이 프리미엄 라이프를 완성합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          초등학교 예정지 인접, 송탄 IC와 평택지제역으로 연결되는 스마트 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          한양 수자인 브랜드와 함께하는 889세대 중대형 아파트.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 브레인시티 중심에 새로 들어서는 주거의 기준.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          59㎡·84㎡ 전용, 실속 있는 평면과 무상 옵션으로 채운 생활공간.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          계약금 500만원, 분양가 상한제 적용으로 부담은 낮추고 혜택은 더했습니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 브레인시티 수자인
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          삼성 평택캠퍼스와 가까운 직주근접, 서울까지 30분대 SRT 생활권.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          초·중·고 인접한 학세권, 예정된 아주대병원과 상업시설까지 모두 가까이.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주 배치, 공원형 설계와 넓은 동간 거리로 여유로운 일상.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          드레스룸, 김치냉장고장 등 11종 무상 제공 풀옵션 기본화.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          수자인의 스마트 주거기술로 더 쾌적하고 안전한 공간을 누리세요.
        </div>
      </>
    );
  }
};

  
