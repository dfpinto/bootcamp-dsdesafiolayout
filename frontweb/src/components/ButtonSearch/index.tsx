import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="button-search-container">
      <div className="button-search-container-input">
          <input type="text" name="product_name" placeholder='Digite sua busca'/>
      </div>
      <button className="btn">
        <h6>BUSCAR</h6>
      </button>
    </div>
  );
};

export default ButtonSearch;
