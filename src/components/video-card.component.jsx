import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: '320px', xs: '100%' },
        boxShadow: 'none',
        borderRadius: '0',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{ width: '358px', height: '180px' }}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.length > 60
              ? `${snippet?.title.slice(0, 60)}...`
              : snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant='subtitle2' fontWeight='bold' color='grey'>
            {snippet?.channelTitle.length > 60
              ? `${snippet?.channelTitle.slice(0, 60)}...`
              : snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'grey', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
export default VideoCard
