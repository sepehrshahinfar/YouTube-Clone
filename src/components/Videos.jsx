import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './'
const Videos = ({ videos, direction }) => {
  if(!videos?.length) return "Loading...";
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent={{xs: 'center', md: 'start', sx: 'center'}} gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx} display={(item.id.videoId || item.id.channelId) ? 'block' : 'none'}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))}
    </Stack>
  )
}

export default Videos
