import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="src/assets/assets/images/icon-star.svg" />
          <p className="title">FAQs</p>
        </div>

        <div className="QA">
          <div className="subtitle">
            <p className="question">
              What is Frontend Mentor, and how will it help me?
            </p>
            <img src="src/assets/assets/images/icon-minus.svg" />
          </div>

          <p className="answer">
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </p>
        </div>

        <div>Is Frontend Mentor free?</div>

        <div>
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </div>

        <div>Can I use Frontend Mentor projects in my portfolio?</div>

        <div>
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!
        </div>

        <div>
          How can I get help if I'm stuck on a Frontend Mentor challenge?
        </div>

        <div>
          The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members.
        </div>
      </div>
    </>
  );
}

export default App;
