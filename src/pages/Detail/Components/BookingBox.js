import React, { useState } from 'react';
import styled from 'styled-components';
import Datepicker from './Datepicker';
import SelectPeople from './DetailBooking/SelectPeople';

export default function BookingBox({ item }) {
  const [isTrue, setIsTrue] = useState(false);
  const [dates, setDates] = useState([]);

  const arr = item[0];
  const period = NewDates => {
    setDates(NewDates);
  };

  const onChange = boolean => {
    setIsTrue(boolean);
  };

  const nights =
    (new Date(dates[1]).getTime() - new Date(dates[0]).getTime()) /
    (24 * 60 * 60 * 1000);

  return (
    <BookinDiv>
      <BookingContainer>
        <FlexDiv>
          {isTrue ? (
            <h1>₩{parseInt(arr.price).toLocaleString()}/박</h1>
          ) : (
            <h1>요금을 확인하려면 날짜를 입력하세요.</h1>
          )}
        </FlexDiv>
        <div>
          <Datepicker change={onChange} period={period} />
          <SelectPeople item={item} />
        </div>

        <Button>예약하기</Button>
        {isTrue ? (
          <PriceDiv>
            <DetailPrice>
              <Underbar>
                ₩{parseInt(arr.price).toLocaleString()} x {nights}박
              </Underbar>
              <span> ₩{(arr.price * nights).toLocaleString()}</span>
            </DetailPrice>

            <DetailPrice>
              <Underbar>청소비</Underbar>
              <span> ₩30,000</span>
            </DetailPrice>
            <DetailPrice>
              <Underbar>서비스 수수료</Underbar>
              <span> ₩{arr.price * 0.1}</span>
            </DetailPrice>
            <TotalPrice>
              <div>총 합계</div>
              <span>
                ₩
                {(
                  arr.price +
                  arr.price * 0.1 +
                  arr.price * nights
                ).toLocaleString()}
              </span>
            </TotalPrice>
          </PriceDiv>
        ) : (
          ''
        )}
      </BookingContainer>
    </BookinDiv>
  );
}

const TotalPrice = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  left: 15px;
  padding: 24px 0;
  border-top: 1px solid #ddd;
  span {
    font-weight: bolder;
  }
`;

const Underbar = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 0px;
  font-weight: 200;
  span {
    font-size: 24px;
    font-weight: 600;
    border-style: none;
  }
`;
const DetailPrice = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 254px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 400;
  }
`;

const BookinDiv = styled.div`
  width: 33%;
  margin-top: 20px;
`;

const PriceDiv = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const BookingContainer = styled.div`
  height: 496px;
  display: flex;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px 10px rgba(255, 99, 71, 0.1);
  flex-direction: column;
  align-items: center;
  border: 1px solid #dddd;
  position: sticky;
  top: 4px;
`;

const Button = styled.button`
  background-color: tomato;
  border-style: none;
  border-radius: 12px;
  margin-top: 15px;
  width: 254px;
  height: 56px;
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin-bottom: 13px;
  h1 {
    font-size: larger;
  }
  span {
    font-weight: 300;
  }
`;