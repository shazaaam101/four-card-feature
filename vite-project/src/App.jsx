import "./App.css";
import Card from "./components/Card";
import svgKarma from "./images/icon-karma.svg";
import svgCalculator from "./images/icon-calculator.svg";
import svgSupervisor from "./images/icon-supervisor.svg";
import svgTeamBuilder from "./images/icon-team-builder.svg";
function App() {
  return (
    <div className="App">
      <header className="center">
        <h1>
          <span className="light">Reliable, efficient delivery</span>
          <br />
          Powered by Technology
        </h1>

        <p className="light">
          Our Aritificial Intelligence powerd tools use millions of project data
          <br />
          points to ensure that your project is successful
        </p>
      </header>

      <div className="grid">
        <Card
          title="Supervisor"
          detail="Monitors activity to identify project roadblocks"
          svgSrc={svgSupervisor}
          colorTheme="green"
        />
        <div className="column">
          <Card
            title="Team Builder"
            detail="Scans our talent network to create the optimal team for your project"
            svgSrc={svgTeamBuilder}
            colorTheme="red"
          />
          <Card
            title="Karma"
            detail="Regularly evaluates our talent to ensure quality"
            svgSrc={svgKarma}
            colorTheme="yellow"
          />
        </div>

        <Card
          title="Calculator"
          detail="Uses data from past projects to provide better delivery estimates"
          svgSrc={svgCalculator}
          colorTheme="blue"
        />
      </div>
    </div>
  );
}

export default App;
