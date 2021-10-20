import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <section>
            <span data-testid="email-field">{ email }</span>
          </section>
          <section>
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </section>
        </header>
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
              <option value="none">Escolha uma alternativa</option>
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
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
