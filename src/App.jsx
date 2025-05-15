import { useEffect, useState } from 'react';
import JournalInput from './components/JournalInput';
import MoodResult from './components/MoodResult';
import PlaylistEmbed from './components/PlaylistEmbed';
import Header from './components/Header';
import FeelingCard from './components/FeelingCard';

function App() {
  const [entry, setEntry] = useState("");
  const [moodData, setMoodData] = useState(null);
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [showInput, setShowInput] = useState(true)

  useEffect(() => {
    if (playlistUrl) {
      setShowInput(false)
    }

  }, [playlistUrl])


  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-blue-400 to-blue-800 flex flex-col items-center px-4 ">
      <Header />

      <div className='flex flex-col mt-5 border-b-2 pb-4'>
        <div className='text-3xl md:text-6xl'>Every feeling deserves a soundtrack.</div>
        <div className='mt-4 max-w-2xl hidden md:block'>MoodMate turns your emotions into personalized Spotify playlists through simple journaling — just write how you feel and let AI handle the rest.
        </div>
      </div>

      {showInput ? <JournalInput
        entry={entry}
        setEntry={setEntry}
        moodData={moodData}
        setMoodData={setMoodData}
        playlistUrl={playlistUrl}
        setPlaylistUrl={setPlaylistUrl}
      /> :
        <PlaylistEmbed url={playlistUrl} />}

      {!showInput ? <div className='bg-[#3ab757] rounded-md p-2 mt-4 cursor-pointer' onClick={() => setShowInput(true)} >Analyze again</div> : null}


    </div>
  );
}

export default App;