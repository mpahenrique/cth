import './App.css';
import logo from './logo.svg';
// import readme from '../../../readme.md';

function App() {
  return (
    <div className="App">
      <div>
        <header className="cthWeb-Header">
          <div className="cthWeb-Container">
            <img className="cthWeb-Header-symbol" src={logo} alt={'Crypto True Heroes Symbol'}/> 
            <p className="cthWeb-Header-title">🚀 Crypto True Heroes</p>
            <p className="cthWeb-Header-subtitle">Real Heroes don't wear capes. Let's build a new way to make the world better!</p>
          </div>
          {/* <img src={logo} className="" alt="logo" /> */}
        </header>
        <main className="cthWeb-Container">
          <article>
            <section>
              <p>First of all reading: We need you to make this project a real thing! We are looking for intusiasts, no matter what are your expertise, for contribution. Any idea is welcome. Any critics or questioning is welcome twice.</p>
              <h1>$CTH (Crypto True Heroes)</h1>
              <p>Crypto True Heros is an ERC-20 token, an Ethereum based smart contract, limited to $CTH xxx, xxx, xxx (values under study) focused 100% on safe and guaranteed donations. The main idea of the project is open the opportunities of donate using the mechanism of the free internet on blockchain.</p>
              <p>The main $CTH rule is that only blockchain network verified wallets (possibility current world organizations under study) can exchange $CTH to real world commodities, ensuring that all donated money will have a real destiny, like health, hunger, education and other social activities to make the world better.</p>
              <p>You can transfer $CTH for anyone you want, anytime you want, or to buy any digital stuff. But in real world, all values from $CTH will be used to benefy needy people.</p>
              <p>In current world benefy organizations, there's always a chalenge to keep the biggest % of the donations to the end point, so the middleware stuff is a challenge, like logistics, other companies envolving and losts linked with not optimized procces. (And there's always a risk of corruption when is money envolved).</p>
            </section>
            <section>
              <h2>The "CTH" initials</h2>
              <p>$CTH means "Crypto True Heroes". The name can be explained at the expression "Real Heroes don't wear capes". In a free internet this rule is the same. That's why $CTH based idea is important: No matter who you are, the only thing that metters is how much people you can help.</p>
            </section>
            <section>
              <h2>FAQ. Initial projects questions and challenges:</h2>
              <p>What is your first question? Let's brainstorm together!</p>
            </section>
          </article>
        </main>
      </div>
      <footer>
        <div className="cthWeb-Container">
          <ul>
            <li><h4>Help us with:</h4></li>
            <li><a href="https://github.com/mpahenrique/cth" target="_blank" rel='noreferrer'>{'< Github contribution />'}</a></li>
          </ul>
          <div className="cthWeb-Divider" />
          <h3>Crypto True Heroes - 2021 </h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
