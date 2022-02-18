import ButtonSearch from 'components/ButtonSearch';
import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="search-container">
        <ButtonSearch />
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="col-product">
            <ProductCard />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="col-product">
            <ProductCard />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="col-product">
            <ProductCard />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="col-product">
            <ProductCard />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="col-product">
            <ProductCard />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="col-product">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
