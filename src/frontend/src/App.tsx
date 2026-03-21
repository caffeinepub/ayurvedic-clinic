export default function App() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root {
          height: 100%;
          width: 100%;
          overflow: hidden;
          background: black;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          background: "black",
          color: "white",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.4,
          }}
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
        </video>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "20px",
            animation: "fadeIn 3s ease-in-out",
            maxWidth: "700px",
          }}
        >
          <h1 style={{ fontSize: "28px", color: "gold" }}>
            Lord Krishna Message
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              marginTop: "20px",
              animation: "slideUp 5s ease-in-out",
            }}
          >
            Education is not the amount of information that is put into your
            brain.
            <br />
            <br />
            It must be life-building, man-making, character-making.
            <br />
            <br />
            It is the assimilation of ideas that brings real growth in life.
            <br />
            <br />
            Through true education, something meaningful can be achieved in the
            world.
            <br />
            <br />
            This is what many students remain unaware of.
          </p>
        </div>
      </div>
    </>
  );
}
