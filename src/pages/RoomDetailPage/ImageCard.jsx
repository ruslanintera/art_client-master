import React from 'react';
// import ReactPlayer from 'react-player';
import styled from 'styled-components';
import EmptyImg from './avatar-plug.png';

export const CardRealImage = styled.img`
  width: 100%;
`;

export const CardImageInner = styled.div`
  width: 100%;
`;

export const CardVideo = styled.video`
`;

const ImageContainer = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
`;
const VideoWrapper = styled.div`
  width: 100%;
  color: #fff;
  overflow: hidden;
  position: relative;
  background-size: 60% !important;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${EmptyImg});
  & video {
    object-fit: cover;
  }
`;


const ImageCard = (props) => {
  const { isImage, media, className, children, preview } = props;

  if (preview) {
    return (
      <CardImageInner className={className}>
        {
          isImage
            ? <CardRealImage src={media} alt="" />
            : <CardVideo src={media} />
        }
      </CardImageInner>
    );
  }

  return (
    <div>
      {!isImage ? (
        <VideoWrapper className={className}>
          {/* <ReactPlayer
            url={media}
            muted={true}
            width={`${100}%`}
            height={`${100}%`}
            style={{
              left: `${0}%`,
              top: `${0}%`,
              bottom: `${0}%`,
              position: "absolute",
            }}
            playing={true}
            controls={false}
            loop={true}
          /> */}
          {children}
        </VideoWrapper>
      ) : (
        <ImageContainer
          className={className}
          style={{ backgroundImage: `url(${media})` }}
        >
          {children}
        </ImageContainer>
      )}
    </div>
  );
};

export default ImageCard;
