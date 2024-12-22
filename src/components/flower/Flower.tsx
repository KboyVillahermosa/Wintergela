import { useEffect } from 'react';
import './Flower.css';

const Flower = () => {
  useEffect(() => {
    // Try to play the audio as soon as the component is loaded
    const audio = document.getElementById('background-audio') as HTMLAudioElement;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Audio is playing');
        })
        .catch((error) => {
          console.log('Failed to play audio:', error);
          // Handle case where autoplay might be blocked
        });
    }
  }, []);

  return (
    <div className="flower">
      {/* Audio player */}
      <audio id="background-audio" autoPlay>
        <source src="./image/duyog.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Flower animation and elements */}
      <div className="container">
        <div className="glass">
          <div className="shine"></div>
        </div>
        <div className="thorns">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="leaves">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="petals">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="deadPetals">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Loader screen */}
      <section>
        <div className="loader-header">
          <div className="loading">
            <svg width="64px" height="48px">
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flower;
