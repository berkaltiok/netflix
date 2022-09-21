import type { NextPage } from 'next'

const Watch: NextPage = () => {
  return (
    <div style={{
      height: "100%",
      display: "flex",
      backgroundColor: "black",
    }}>
      <video controls src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/1080/Big_Buck_Bunny_1080_10s_5MB.mp4" width="100%" height="100%" />
    </div>
  )
}

export default Watch
