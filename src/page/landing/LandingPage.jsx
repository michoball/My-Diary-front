import {
  PageContainer,
  LandNavBarContainer,
  MainAppDisplayContainer,
  SectionContainer,
  Partition,
  ImgContainer,
  ContentContainer,
  LinkContainer,
} from "./LandingPage.styles";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";
import calendarMain from "../../assets/jpg/calendarMain.jpg";
import sampleimg from "../../assets/jpg/sample.jpg";
import memoMain from "../../assets/jpg/memoMain.jpg";
import labelMain from "../../assets/jpg/labelMain.jpg";
import labelCreate from "../../assets/jpg/labelCreate.jpg";
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
    console.log(window.scrollY);
    if (window.scrollY > 500) {
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
          <Link to="/">
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>시작하기</Button>
          </Link>
        </LinkContainer>
      </LandNavBarContainer>

      <MainAppDisplayContainer>
        <SectionContainer className="section-main">
          <ImgContainer className="main">
            <img src={sampleimg} alt="main-display" />
          </ImgContainer>
          <ContentContainer>
            <h3>
              나만의 <br />
              다이어리를 <br /> 만들어 보세요
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
            <img src={calendarMain} alt="calendar-display" />
          </ImgContainer>
        </SectionContainer>

        <SectionContainer className="section-label" ref={scrollRef}>
          <ImgContainer className="label-display">
            <img src={labelMain} alt="label-display" />
            <img src={labelCreate} alt="label-display" />
          </ImgContainer>
          <ContentContainer className="label-content">
            <h3>라벨링</h3>{" "}
            <p>
              기능으로 간편하게 <br />
              일정을 등록하세요.
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
