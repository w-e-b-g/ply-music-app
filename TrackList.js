import React from 'react';
import TrackCard from './TrackCard';

const TrackList = ({ tracks }) => (
  <section>
    <h2 className="text-2xl mb-4">My Tracks</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tracks.map(track => <TrackCard key={track.id} track={track} />)}
    </div>
  </section>
);

export default TrackList;