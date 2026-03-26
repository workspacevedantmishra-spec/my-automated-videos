import { Audio, Video, AbsoluteFill, getInputProps } from 'remotion';

export const MyVideo = () => {
  // These are the inputs sent from Make.com
  const { script, video_url, audio_url } = getInputProps();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* 1. The Background Video from Dropbox */}
      <Video src={video_url} />

      {/* 2. The Voiceover Audio */}
      <Audio src={audio_url} />

      {/* 3. The Captions (Script) */}
      <AbsoluteFill style={{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '60px',
        textAlign: 'center',
        padding: '40px',
        fontWeight: 'bold',
        textShadow: '2px 2px 10px black'
      }}>
        {script}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
