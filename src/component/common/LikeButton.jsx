import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { interactionWithDatabase } from "../../api/firebase-api";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../redux/selectors/authorizationSelector";
import React from "react";

const LikeButton = ({ audioId, trackList }) => {
  const userProfile = useSelector((state) => selectUserProfile(state));
  const audio = trackList.find((audio) => audio.audioId === audioId);
  const like = audio.liked.includes(userProfile.userId);

  const likeAudio = () => {
    if (like) {
      interactionWithDatabase.removeFromFavorites(
        audio.audioId,
        userProfile.userId
      );
    } else {
      interactionWithDatabase.likeAudio(audio.audioId, userProfile.userId);
    }
  };

  const handleClick = () => {
    likeAudio();
  };

  return (
    <IconButton sx={{ zIndex: "25" }} onClick={handleClick}>
      {!like ? (
        <FavoriteBorderIcon sx={{ color: "#fff", fontSize: "20px" }} />
      ) : (
        <FavoriteIcon sx={{ color: "#fff", fontSize: "20px" }} />
      )}
    </IconButton>
  );
};

export default React.memo(LikeButton);
