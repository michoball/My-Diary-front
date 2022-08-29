import {
  PageContainer,
  LandNavBarContainer,
  MainAppDisplayContainer,
  SectionContainer,
  Partition,
  ImgContainer,
  ContentContainer,
  LinkContainer,
  LabelDisplay,
} from "./LandingPage.styles";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";
import calendarPage from "../../assets/jpg/calendarPage.jpg";
import memoMain from "../../assets/jpg/memoMain.jpg";
import labelTool from "../../assets/jpg/labelTool.jpg";
import homeImg from "../../assets/jpg/mainPage.jpg";
import halidayImg from "../../assets/jpg/holiday.jpg";
import labelView from "../../assets/jpg/labelView.jpg";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../UI/button/button";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function LandingPage() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef();
  console.log("isScroll", isScrolling);

  const startNav = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 468) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  window.addEventListener("scroll", startNav);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       console.log("intersect ", entry.isIntersecting);
  //       if (entry.isIntersecting) {
  //         console.log("true");
  //         setIsScrolling(!isScrolling);
  //       }
  //       // console.log(isScrolling);
  //     },
  //     { threshold: 0.5 }
  //   );
  //   if (scrollRef.current) {
  //     observer.observe(scrollRef.current);
  //   }

  //   // return () => observer.disconnect();
  // }, []);

  return (
    <PageContainer>
      <LandNavBarContainer className={isScrolling ? "active" : ""}>
        <Mydiary className="logo"></Mydiary>
        <LinkContainer>
          <Link to="/">체험하기</Link>
          <Link to="/login">회원가입</Link>
          <Link to="/" className="start">
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>시작하기</Button>
          </Link>
        </LinkContainer>
      </LandNavBarContainer>

      <MainAppDisplayContainer>
        <SectionContainer className="section-main">
          <ImgContainer className="main">
            <img src={homeImg} alt="main-display" />
          </ImgContainer>
          <ContentContainer>
            <h3>
              나만의
              <br /> 다이어리를 <br /> 만들어 보세요
            </h3>
          </ContentContainer>
        </SectionContainer>

        <Partition />
        <SectionContainer className="section-calendar">
          <ContentContainer className="calendar-content">
            <h3>캘린더</h3>
            <p>
              모드에서는 <br />
              쉽게 일정을 추가하고 <br /> 편집할 수 있습니다.
            </p>
          </ContentContainer>
          <ImgContainer className="calendar-display">
            <img src={calendarPage} alt="calendar-display" />
          </ImgContainer>
        </SectionContainer>

        <SectionContainer className="section-label" ref={scrollRef}>
          <LabelDisplay>
            <ImgContainer className="label-display">
              <img src={labelTool} alt="label-display" />
            </ImgContainer>
            <ContentContainer className="label-content">
              <p>
                간편하게 정기 일정과 일일 일정을
                <br /> 등록할 수 있습니다.
              </p>
            </ContentContainer>
          </LabelDisplay>
          <LabelDisplay>
            <ImgContainer className="label-display">
              <img src={labelView} alt="label-display" />
            </ImgContainer>
            <ContentContainer className="label-content">
              <p>
                라벨링 기능으로 일정을 미리 만들어 <br /> 간편하게 이용해보세요
              </p>
            </ContentContainer>
          </LabelDisplay>
          <LabelDisplay>
            <ImgContainer className="label-display">
              <img src={halidayImg} alt="label-display" />
            </ImgContainer>
            <ContentContainer className="label-content">
              <p>휴일 선택 버튼으로 휴일도 지정 가능합니다.</p>
            </ContentContainer>
          </LabelDisplay>
        </SectionContainer>

        <SectionContainer className="section-memo">
          <ImgContainer className="memo-display">
            <img src={memoMain} alt="memo-display" />
          </ImgContainer>
          <ContentContainer className="memo-content">
            <h3>메모</h3>
            <p>
              모드에서 <br />
              메모를 작성하고 <br />
              중요표시와 색깔을 남기세요.
            </p>
          </ContentContainer>
        </SectionContainer>
        <Partition />
        <SectionContainer className="section-memo">
          <ContentContainer className="memo-content">
            <h3>메모</h3>
            <p>
              모드에서 <br />
              메모를 작성하고 <br />
              중요표시와 색깔을 남기세요.
            </p>
          </ContentContainer>
          <ImgContainer className="memo-display">
            <img src={memoMain} alt="memo-display" />
          </ImgContainer>
        </SectionContainer>
        <Partition />
        <SectionContainer className="section-memo">
          <ContentContainer className="memo-content">
            <h3>메모</h3>
            <p>
              모드에서 <br />
              메모를 작성하고 <br />
              중요표시와 색깔을 남기세요.
            </p>
          </ContentContainer>
          <ImgContainer className="memo-display">
            <img src={memoMain} alt="memo-display" />
          </ImgContainer>
        </SectionContainer>
      </MainAppDisplayContainer>
    </PageContainer>
  );
}

export default LandingPage;
