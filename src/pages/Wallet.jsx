import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions/currenciesAction';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies, loading } = this.props;
    if (loading) return (<div>Carregando...</div>);
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value-field">
            Valor:
            <input type="number" id="value-field" />
          </label>
          <label htmlFor="description-field">
            Descrição:
            <textarea type="text" id="description-field" />
          </label>
          <label htmlFor="moeda-field">
            Moeda
            <select name="moeda" id="moeda-field">
              {
                Object.keys(currencies).map((key) => (
                  <option
                    key={ key }
                  >
                    { key }
                  </option>))
              }
            </select>
          </label>
          <label htmlFor="payment-method-field">
            Método de pagamento
            <select name="payment-method" id="payment-method-field">
              <option value="money-bills">Dinheiro</option>
              <option value="debt">Cartão de Débito</option>
              <option value="credit">Cartão de Crédito</option>
            </select>
          </label>
          <label htmlFor="tag-field">
            Tag
            <select name="tag" id="tag-field">
              <option value="food">Alimentação</option>
              <option value="work">Trabalho</option>
              <option value="leisure">Lazer</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.object,
  getCurrencies: PropTypes.func,
  loading: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.currenciesReducer.currencies,
  loading: state.currenciesReducer.loading,
  error: state.currenciesReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
