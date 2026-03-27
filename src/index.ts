import { Composition } from "remotion";
import { Y Remotion expects.

### Solution

Verify your `src/index.ts` file contains a proper Remotion composition structure:

```typescript
import { Composition } from "remotion";
import { MyVideo } from "./MyVideo"; // Your video component

export const RemotionRoot = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        script: "",
        video_Url: "",
        audio_Url: "",
      }}
    />
  );
};
