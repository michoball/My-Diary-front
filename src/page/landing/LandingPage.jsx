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
import calendarDnD from "../../assets/jpg/calendarDnD.jpg";
import calendarDaliy from "../../assets/jpg/calendarDaliy.jpg";
import calendarRecurr from "../../assets/jpg/calendarRecurr.jpg";
import memoPage from "../../assets/jpg/memoPage.jpg";
import memoColor from "../../assets/jpg/memoColor.jpg";
import memoSearch from "../../assets/jpg/memoSearch.jpg";
import calendarWeek from "../../assets/jpg/calendarWeek.jpg";
import labelAdd from "../../assets/jpg/labelAdd.jpg";
import homeImg from "../../assets/jpg/mainPage.jpg";
import halidayImg from "../../assets/jpg/holidayImg.jpg";
import memoEditPage from "../../assets/jpg/memoEditPage.jpg";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../UI/button/button";
import { useRef, useState, useEffect } from "react";
import Slider from "../../UI/slider/Slider";

const calendarSwiperImg = [
  calendarPage,
  calendarWeek,
  calendarDaliy,
  calendarRecurr,
];

const memoSwiperImg = [memoPage, memoColor, memoSearch, memoEditPage];

function LandingPage() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef();
  const startNav = () => {
    if (window.scrollY > 468) {
      setIsScrolling(true);
    } else if (window.scrollY < 460) {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", startNav);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", startNav);
    };
  }, []);

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
        <Mydiary className="logo" />
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
          <ContentContainer className="main-content">
            <h3>
              나만의
              <br /> 다이어리를 <br /> 만들어 보세요
            </h3>
          </ContentContainer>
        </SectionContainer>

        <SectionContainer className="section-calendar">
          <ContentContainer className="calendar-content">
            <h3>캘린더</h3>
            <p>
              모드에서는 <br />
              쉽게 일정을 추가하고 <br /> 편집할 수 있습니다.
            </p>
          </ContentContainer>
          <ImgContainer className="calendar-display">
            <Slider imgSorce={calendarSwiperImg} />
          </ImgContainer>
        </SectionContainer>

        <SectionContainer className="section-label" ref={scrollRef}>
          <LabelDisplay>
            <ImgContainer className="label-display">
              <img src={calendarDnD} alt="label-display" />
            </ImgContainer>
            <ContentContainer className="label-content">
              <p>
                만든 일정을 드래그 또는 클릭하여
                <br /> 일정을 변경하세요.
              </p>
            </ContentContainer>
          </LabelDisplay>
          <LabelDisplay>
            <ImgContainer className="label-display">
              <img src={labelAdd} alt="label-display" />
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
              <p>
                휴일지정 버튼으로
                <br /> 휴일도 만들 수 있습니다.
              </p>
            </ContentContainer>
          </LabelDisplay>
        </SectionContainer>

        <SectionContainer className="section-memo">
          <ImgContainer className="memo-display">
            <Slider imgSorce={memoSwiperImg} />
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
            <img src={memoPage} alt="memo-display" />
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
            <img src={memoPage} alt="memo-display" />
          </ImgContainer>
        </SectionContainer>
      </MainAppDisplayContainer>
    </PageContainer>
  );
}

export default LandingPage;
