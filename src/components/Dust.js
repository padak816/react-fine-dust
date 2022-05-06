import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import Contents from "./Contents";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 1200px;
  height: 900px;
  padding: 30px;
  border: 3px solid #dee2ec;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 60px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  row-gap: 5px;
  padding-left: 150px;
`;
const SubTitle = styled.span`
  font-size: 18px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const defaultParams = {
  serviceKey: process.env.REACT_APP_API_KEY,
  returnType: "json",
  numOfRows: "100",
  pageNo: 1,
  dataTerm: "DAILY",
  stationName: "도봉구",
  ver: "1.0",
};

const Weather = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState(defaultParams);
  useEffect(() => {
    callApi();
  }, [params]);
  const callApi = async () => {
    const resp = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?${new URLSearchParams(
        params
      ).toString()}`
    );
    if (!resp) return;
    setData(resp.data.response.body.items[0]);
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          <span>🌎 서울시 {params.stationName} 미세먼지</span>
          <SubTitle>측정일시 : {data.dataTime}</SubTitle>
        </Title>
        <SearchForm params={params} setParams={setParams} />
      </Header>
      <Body>
        {data && <Contents data={data} station={params.stationName} />}
      </Body>
    </Wrapper>
  );
};

export default Weather;
