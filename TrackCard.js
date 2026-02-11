import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactPlayer from 'react-player/youtube';

const TrackCard = ({ track }) => (
  <Card className="bg-gray-800 border-gray-700">
    <CardHeader>
      <CardTitle>{track.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ReactPlayer url={track.url} width="100%" height="200px" controls />
    </CardContent>
  </Card>
);

export default TrackCard;