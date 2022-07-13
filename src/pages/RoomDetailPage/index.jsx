import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Moralis from "../../const/moralis";
import {
  RoomDetailContent,
  RoomName,
  RoomDetailWrap,
  RoomInfo,
  RoomProfit,
  RoomProfitsTitle,
  RoomProfits,
  RoomBtn,
  RoomInsideBtn,
  RoomDetailItem,
  RoomDetailText,
  RoomArtists,
  Title,
  RoomButtonEdit,
  RoomImg,
  Navigation,
  NavigationLeft,
  NavigationRight,
  Divider,
  WideContainerPadding,
} from "./styles";
// import IconArrrowCursive from "components/icons/IconArrrowCursive";
// import Model from './Model';

const mock = {"createdAt":"2022-07-05T15:13:32.517Z","updatedAt":"2022-07-11T08:07:42.570Z","artists":["0xe5bd3bb8e16c429b21d31ac31f0dd701aa8fa8e2"],"curator":"0x8b1a32dfd99c2aaad1bcd25a658b2bedc582385b","curator_percentage":150,"curator_username":"elon_musk","description":"A night owl is someone who tends to be awake late into the night. If you're a night owl, you may do your homework at midnight and prefer to sleep late in the morning. A night owl is often contrasted with an \"early bird,\"","end_timestamp":"0","image":"https://multygallery.mypinata.cloud/ipfs/QmNZ1pVPFukbYrvAkF9a1Y8q3NQ42f5YcbzXBAYuP5E3gj","name":"Night Owl","nft_owner_percentage":400,"owner":"0x3b65267a8340e6c848a36a07d597965159235890","owner_username":"monluna","room_owner_percentage":150,"roomer_percentage":270,"start_timestamp":"0","uid":2}

const RoomDetailPage = () => {
  const { uid = 0 } = useParams();
  const { push, go } = useHistory();
  const user = Moralis.User.current();

  //// new
  const [artworks, setArtworks] = useState([]);
  const [LoadingArtworks, setLoadingArtworks] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [roomId, setRoomId] = useState();
  const [roomImage, setRoomImage] = useState();
  const [roomName, setRoomName] = useState();
  const [roomDescription, setRoomDescription] = useState();
  const [roomOwnerShare, setRoomOwnerShare] = useState();
  const [curatorShare, setCuratorShare] = useState();
  const [NFTOwnerShare, setNFTOwnerShare] = useState();
  const [roomersShare, setRoomersShare] = useState();
  const [roomOwner, setRoomOwner] = useState();
  const [roomCurator, setRoomCurator] = useState();
  const [roomArtists, setRoomArtists] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [isCurator, setIsCurator] = useState(false);
  const [recPrice, setRecPrice] = useState(0);

  useEffect(() => {
    loadDetails();
  }, []);

  useEffect(() => {
    loadArtworks();
  }, [roomId]);

  // const approveAuciton = async () => {
  //   console.log(toWei(recPrice));
  //   await RoomContract.methods
  //     .approveRoomAuction(uid, toWei(recPrice))
  //     .send({ from: user.get("ethAddress") });
  // };

  const loadDetails = async () => {
    // const roomDetails = await Moralis.Cloud.run("getRoomDetails", {
    //   room_id: uid,
    // });
    const roomDetails = mock;
    setRoomId(roomDetails?.uid?.toString());
    setRoomImage(roomDetails?.image);
    setRoomName(roomDetails?.name);
    setRoomDescription(roomDetails?.description);
    setRoomOwnerShare(parseInt(roomDetails?.room_owner_percentage) / 10);
    setRoomersShare(parseInt(roomDetails?.roomer_percentage) / 10);
    setNFTOwnerShare(parseInt(roomDetails?.nft_owner_percentage) / 10);
    setCuratorShare(parseInt(roomDetails?.curator_percentage) / 10);
    setRoomOwner(roomDetails?.owner_username);
    setRoomCurator(roomDetails?.curator_username);
    // const artistsUsernames = await Moralis.Cloud.run("getNameByAddressBulk", {
    //   ethAddresses: roomDetails?.artists,
    // });
    setRoomArtists([]); //artistsUsernames
    if (user) {
      // setIsOwner(user.get("ethAddress") === roomDetails?.owner);
      // setIsCurator(user.get("ethAddress") === roomDetails?.curator);
    }
  };

  const loadArtworks = async () => {
    if (roomId) {
      const _artworks = await Moralis.Cloud.run("getRoomArtworks", {
        room_id: roomId.toString(),
      });
      setLoadingArtworks(false);
      setArtworks(_artworks);
      console.log(`artworks:`, _artworks);
    }
  };

  const modalContent = null;

  return (
    <WideContainerPadding
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <RoomDetailWrap>
        <RoomImg>
          <img src={roomImage} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Model /> */}
          </div>
        </RoomImg>
      </RoomDetailWrap>
      <RoomDetailContent>
        <RoomDetailItem>
          <RoomName>{roomName}</RoomName>
          <RoomInfo
            // onClick={() => push(`../profile/${roomCurator}`)}
          >{`Curator: @${roomCurator}`}</RoomInfo>
          <RoomInfo
            // onClick={() => push(`../profile/${roomOwner}`)}
          >{`Owner: @${roomOwner}`}</RoomInfo>
          <RoomProfitsTitle>Profit split:</RoomProfitsTitle>
          <RoomProfits>
            <RoomProfit>Owner: {roomOwnerShare}%</RoomProfit>
            <RoomProfit>Curator: {curatorShare}%</RoomProfit>
            <RoomProfit>Artist: {NFTOwnerShare}%</RoomProfit>
            <RoomProfit>Roomers: {roomersShare}%</RoomProfit>
          </RoomProfits>
          <RoomBtn onClick={() => setIsOpen((old) => !old)}>
            {isOpen ? "Hide Artists" : "Show Artists"}
          </RoomBtn>
          <RoomArtists>
            {isOpen
              ? roomArtists.map((item, index) => (
                  <span
                    onClick={() => push({ pathname: `/profile/${item}` })}
                  >{`@${item}${
                    index === roomArtists.length - 1 ? "" : ", "
                  }`}</span>
                ))
              : ""}
          </RoomArtists>
        </RoomDetailItem>
        <RoomDetailItem style={{ justifyContent: "space-between" }}>
          <RoomDetailText>{roomDescription}</RoomDetailText>
          <RoomButtonEdit
            style={{margin: '20px 0 0'}}
          >
            {isOwner
              ? "Edit"
              : isCurator
              ? "Approve auction"
              : "Submit artwork"}
          </RoomButtonEdit>
        </RoomDetailItem>
      </RoomDetailContent>
      <Divider />
      {/* <Title>In the room</Title> */}
    </WideContainerPadding>
  );
};

export default RoomDetailPage;
