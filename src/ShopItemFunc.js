import React from 'react';

class UnitProfile extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const {data} = this.props;
    return (
      <div className={"main-content"}>
        <h2>{data.brand}</h2>
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
        <div className={"description"}>{data.descriptionFull}</div>
        <div className={"{highlight-window}"}>
          <div className={"highlight-overlay"}></div>
        </div>
        <div className={"divider"}></div>
        <div className={"purchase-info"}>
          <div className={"price"}>{data.currency}{data.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}
export default UnitProfile;
