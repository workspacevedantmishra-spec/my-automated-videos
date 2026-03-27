import { Composition, Audio, Video, AbsoluteFill, getInputProps } from 'remotion';

// 1. Your Video Component (Exactly as you wrote it)
export const MyVideo = () => {
  const { script, video_url, audio_url } = getInputProps();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* Background Video */}
      <Video src={video_url} />
      
      {/* Voiceover */}
      <Audio src={audio_url} />
      
      {/* Captions */}
      <AbsoluteFill style={{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '120px',
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

// 2. The Required Remotion Wrapper (This is what index.ts was looking for)
export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={900} /* Default duration, 30 seconds at 30fps */
        fps={30}
        width={1080}
        height={1920} /* TikTok/Shorts vertical format */
        defaultProps={{
          script: "Testing",
          video_url: "",
          audio_url: ""
        }}
      />
    </>
  );
};
