import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={`/video/${videoId}`}>
      <CardMedia image={snippet?.thumbnails?.high?.url } alt={snippet?.title} 
        sx={{width:{xs: '100%', sm: '358px', md: "320px"}, height:180}}
      />  
    </Link> 
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={`/video/${videoId}`} >
        <Typography variant="subtitle1" fontWeight={'bold'} color={'#fff'}>
        {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`} >
        <Typography variant="subtitle12" color={'gray'}>
        {snippet?.channelTitle}        
        </Typography>
        <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }}  />
      </Link>
    </CardContent>
    </Card>
  )


export default VideoCard
