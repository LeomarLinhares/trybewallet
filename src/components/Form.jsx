import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-field">
          Valor:
          <input type="number" id="value-field" />
        </label>
        <label htmlFor="description-field">
          Descrição:
          <textarea type="text" id="description-field" />
        </label>
        <label htmlFor="currency-field">
          Moeda
          <select name="currency" id="currency-field">
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
        <label htmlFor="method-field">
          Método de pagamento
          <select name="method" id="method-field">
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
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.object,
}.isRequired;

export default Form;
