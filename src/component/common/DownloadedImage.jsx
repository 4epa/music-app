import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { storage } from "../../api/firebase-api";
import { getDownloadURL, ref } from "firebase/storage";
import { keyframes } from '@emotion/react'

const DownloadedImageStyled = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const skeletonAnimation = keyframes`
  0%   {opacity: 0.3;}
  25%  {opacity: 0.1;}
  50%  {opacity: 0.3;}
  75%  {opacity: 0.1;}
  100% {opacity: 0.3;}
`

const Skeleton = styled.span`
  background-color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  animation: ${skeletonAnimation};
  animation-iteration-count: infinite;
  animation-duration: 4s;
`


const DownloadedImage = ({ src }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, src)).then((url) => {
      setImageURL(url);
    });
    return () => setImageURL(null)
  }, [src]);

  return (
    <>
      {imageURL ? (
        <DownloadedImageStyled src={imageURL} alt="" />
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default DownloadedImage;
