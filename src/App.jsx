import "./App.scss";
import ScotiabankLogo from "./assets/logos/Scotiabank.png";

function App() {
  return (
    <>
      <img src={ScotiabankLogo} alt="" />
      <div className="test">BUTTON</div>
      <br />
      <div className="tag-style">Tag</div>
      <p className="card">
        This is just to demonstrate the card border. use @include card-border to
        use. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        doloremque voluptas blanditiis delectus ex amet earum? Quis accusamus
        voluptate dolores quia eos temporibus itaque debitis rerum, provident
        autem? Exercitationem, modi.
      </p>
    </>
  );
}

export default App;
