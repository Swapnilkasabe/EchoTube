import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({videos, direction}) => {
  if (!videos || !videos.length) {
    return (
      <Typography variant="h6">
        No videos available.
      </Typography>
    );
  }
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;