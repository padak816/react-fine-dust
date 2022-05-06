import React, { useState } from "react";
import styled from "styled-components";

const Filter = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

const Select = styled.select`
  width: 120px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  padding: 0px 3px;
`;

const Button = styled.button`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  background: #0d6efd;
  color: #ffffff;
  :hover {
    background: #025ce2;
  }
  padding: 5px;
  width: 70px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;

const selectOptions = [
  "도봉구",
  "은평구",
  "서대문구",
  "마포구",
  "신촌로",
  "강서구",
  "공항대로",
  "구로구",
  "영등포구",
  "영등포로",
  "동작구",
  "동작대로 중앙차로",
  "관악구",
  "강남구",
  "서초구",
  "도산대로",
  "강남대로",
  "송파구",
  "강동구",
  "천호대로",
  "금천구",
  "시흥대로",
  "강북구",
  "양천구",
  "노원구",
  "화랑로",
  "중구",
  "한강대로",
  "종로구",
  "청계천로",
  "종로",
  "용산구",
  "광진구",
  "성동구",
  "강변북로",
  "중랑구",
  "동대문구",
  "홍릉로",
  "성북구",
  "정릉로",
];

const SearchForm = ({ params, setParams }) => {
  const [type, setType] = useState(params.stationName);
  function onClickSearch() {
    setParams({ ...params, stationName: type });
  }
  return (
    <Filter>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        {selectOptions.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </Select>
      <Button onClick={onClickSearch}>검색</Button>
    </Filter>
  );
};

export default SearchForm;
