import React from "react";
import styled, { css, keyframes } from "styled-components";
import good from "../images/1.jpg";
import soso from "../images/2.jpg";
import bad from "../images/3.jpg";
import worst from "../images/4.jpg";

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px;
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  border: 2px solid #dee2ec;
  border-radius: 5px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  row-gap: 10px;
`;

const Image = styled.img`
  ${({ animation }) =>
    animation &&
    css`
      animation: ${boxFade} 2s 1s infinite linear alternate;
    `}
  ${({ width, height }) =>
    css`
      width: ${width};
      height: ${height};
    `}
`;

const Span = styled.span`
  font-size: 20px;
  ${({ bgcolor }) =>
    bgcolor &&
    css`
      background-color: ${bgcolor};
    `}
  ${({ size }) =>
    css`
      font-size: ${size}px;
    `}
`;

const Grade = {
  text: {
    1: ["좋음", "산책가기 좋아요!"],
    2: ["보통", "산책가기 나쁘지 않아요!"],
    3: ["나쁨", "산책가야 되는데..."],
    4: ["매우나쁨", "..."],
  },
  image: {
    1: good,
    2: soso,
    3: bad,
    4: worst,
  },
};

const Contents = ({ data }) => {
  return (
    <>
      <Main>
        <Image
          src={Grade.image[data.pm25Grade]}
          width="280px"
          height="280px"
          animation
        />
        <Span size="35">{Grade.text[data.pm25Grade][0]}</Span>
        <Span size="25" bgcolor="#fdff8c">
          {Grade.text[data.pm25Grade][1]}
        </Span>
      </Main>
      <Detail>
        <DetailItem>
          <Span> 미세먼지</Span>
          <Image
            src={Grade.image[data.pm10Grade]}
            width="180px"
            height="180px"
          />
          <Span>{Grade.text[data.pm10Grade][0]}</Span>
          <Span>{data.pm10Value}㎍/㎥</Span>
        </DetailItem>
        <DetailItem>
          <Span> 초미세먼지</Span>
          <Image
            src={Grade.image[data.pm25Grade]}
            width="180px"
            height="180px"
          />
          <Span>{Grade.text[data.pm25Grade][0]}</Span>
          <Span>{data.pm25Value}㎍/㎥</Span>
        </DetailItem>
        <DetailItem>
          <Span> 이산화질소</Span>
          <Image
            src={Grade.image[data.no2Grade]}
            width="180px"
            height="180px"
          />
          <Span>{Grade.text[data.no2Grade][0]}</Span>
          <Span>{data.no2Value}ppm</Span>
        </DetailItem>
      </Detail>
    </>
  );
};

export default Contents;
