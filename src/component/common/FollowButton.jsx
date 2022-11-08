import Button from "@mui/material/Button";
import { interactionWithDatabase } from "../../api/firebase-api";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../redux/selectors/authorizationSelector";
import React from "react";

const FollowButton = ({ artist }) => {
  const userProfile = useSelector((state) => selectUserProfile(state));

  const followed = artist.followers.includes(userProfile.userId);

  const followArtist = () => {
    if (followed) {
      interactionWithDatabase.followArtist(
        artist.artistId,
        userProfile.userId,
        followed
      );
    } else {
      interactionWithDatabase.followArtist(
        artist.artistId,
        userProfile.userId,
        followed
      );
    }
  };

  const handleClick = () => {
    followArtist();
  };

  return (
    <>
      {followed ? (
        <Button
          size="small"
          onClick={handleClick}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            ":hover": {
              background: "#ffffff30",
              borderColor: "#fff",
            },
          }}
          variant="outlined"
        >
          unfollow
        </Button>
      ) : (
        <Button
          size="small"
          onClick={handleClick}
          sx={{
            color: "#c62137",
            background: "#fff",
            ":hover": {
              background: "#ffffffbd",
            },
          }}
          variant="contained"
        >
          follow
        </Button>
      )}
    </>
  );
};

export default React.memo(FollowButton);
