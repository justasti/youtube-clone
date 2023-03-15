import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from '../components'

const Videos = ({ videos, direction = 'row' }) => {
  if (!videos?.length) return 'Loading...'
  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((video, idx) => (
        <Box key={idx}>
          {(video.id.videoId || video.id.playlistId) && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos
