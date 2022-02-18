import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import BasicButton from 'components/BasicButton';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image-container">
          <MainImage />
        </div>
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
      <div className="home-button-container">
        <div>
          <Link to="/products">
            <BasicButton />
          </Link>
        </div>
        <div className="home-button-container-text">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
