import styled from 'styled-components';
import ButtonRound from './ButtonRound';
import ImageCard from './ImageCard';
import ContainerPadding from './ContainerPadding';

export const WideContainerPadding = styled(ContainerPadding)`
  width: 100%;
  font: 400 18px 'DM Sans', sans-serif;
  padding: 0 30px;
  box-sizing: border-box;
  @media screen and (min-width: 1549px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export const ContainerItem = styled.div`
  flex: 0 0 40%;

  &:last-child {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 46px;
  position: relative;
  width: 100%;
  height: 70vh;
  margin-top: 62px;
`;

export const CardImg = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: #d6e1cf54;
  width: 100%;
  height: 100%;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(30 30 30 / 15%);
  z-index: 1;
`;

export const ButtonRoundModal = styled(ButtonRound)`
  margin: 10px 0;
`;

export const About = styled.div`
  border: 2px solid #000000;
  border-radius: 46px;
  padding: 40px 30px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const RoomDetailWrap = styled.div`
  /* width: 100%; */
  margin: 50px auto;
  text-align: center;
`;



export const AboutImg = styled(ImageCard)`
  border-radius: 46px;
  height: 332px;
  flex: 0 0 50%;
  background-color: #ccc;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex: 0 1 auto;
    margin-top: 20px;
  }

  @media screen and (max-width: 940px) {
    height: 250px;
  }

  @media screen and (max-width: 414px) {
    height: 220px;
  }
`;

export const AboutText = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #191919;
  padding-bottom: 64px;
  margin-bottom: 64px;
`;

export const RoomDetailContent = styled.div`
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;


  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;


export const RoomName = styled.div`
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  max-width: 53%;
  word-break: break-word;
  margin: 16px 0;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin-top: 10px;
  }
`

export const RoomInfo = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin: 2px 0;
`

export const RoomProfitsTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  margin: 20px 0;
`

export const RoomProfit = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin: 2px 0;
`

export const RoomProfits = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const RoomBtn = styled(ButtonRound)`
  background: black;
  color: white;
  margin: 20px 0 16px;
  
  span {
    padding: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }
`

export const RoomInsideBtn = styled(ButtonRound)`
  background: black;
  color: white;
  position: absolute;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
  
  span {
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`


export const RoomDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  flex: 0 0 45%;
`

export const RoomDetailText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  
  @media screen and (max-width: 740px) {
    margin-top: 20px;
  }
`

export const RoomArtists = styled.div`
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  /* height: 50px; */
  /* white-space: nowrap; */
  /* width: 50%; */
  /* text-overflow: ellipsis; */
`

export const Title = styled.div`
  margin-bottom: 66px;
  font-weight: 400;
  font-size: 48px;
  line-height: 62px;
  text-align: center;
`


export const RoomImg = styled.div`
  height: 80vh;
  position: relative;

  img {
    object-fit: contain;
    padding: 0 150px;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 740px) {
    img {
      padding: 0; 
    }

    height: auto;
  }

  @media screen and (min-width: 1520px) {
    img {
      padding: 0 300px; 
    }
  }

`

export const Navigation = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  bottom: 0;
  justify-content: space-between;
  right: 0;
  
  @media screen and (max-width: 740px) {
    bottom: -29px;
`

export const NavigationLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    /* margin-left: 10px; */
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }
`

export const NavigationRight = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: row-reverse;

  span {
    /* margin-right: 10px; */
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }

  svg {
    transform: rotate(180deg);
  }
`

export const RoomPrice = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: right;

  @media screen and (max-width: 740px) {
    font-size: 24px;
  }
`

export const RoomBtnBuy = styled.button`
  background: #191919;
  border-radius: 7px;
  padding: 10px 24px;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  margin-left: 10px;
`


export const RoomButtonEdit = styled.button`
  padding: 10px;
  background: #191919;
  border: 1px solid #191919;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  border-radius: 7px;
  font-weight: 700;
  align-self: flex-end;
  margin: 46px;

  @media screen and (max-width: 740px) {
    align-self: flex-start;
    margin-top: 24px;
    margin-bottom: 0;
  }
`
