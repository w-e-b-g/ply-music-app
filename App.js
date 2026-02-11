import React from 'react';
import { tracks, brandInfo } from './tracks';
import Hero from './Hero';
import TrackList from './TrackList';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold">PLY Music</h1>
      </header>
      <main className="container mx-auto p-4">
        <Hero description={brandInfo.description} />
        <TrackList tracks={tracks} />
      </main>
      <footer className="p-4 text-center">
        <a href="https://www.youtube.com/@PLY" className="text-blue-400">Subscribe on YouTube</a>
      </footer>
    </div>
  );
}

export default App;