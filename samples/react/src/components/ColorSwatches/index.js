import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatches = ({ colors }) => (
    <section className="sg-color-swatches">
        {colors.map((color, index) => <Row key={index} {...color} />)}
    </section >
);

const Row = ({ rowName, swatches }) => (
    <div className="sg-color-swatches__row">
        {rowName && <h2 className="sg-color-swatches__row-heading">{rowName}</h2>}
        <div className="sg-color-swatches__row-items">
            {swatches.map((swatch, index) => <ColorSwatch key={index} {...swatch} />)}
        </div>
    </div>
);

const ColorSwatch = ({ hex, name }) => (
    <div className="sg-color-swatch">
        <div className="sg-color-swatch__square" style={{
            backgroundColor: hex
        }}></div>
        <h2 className="sg-color-swatch__name">{name}</h2>
        <h3 className="sg-color-swatch__hex">{hex}</h3>
    </div>
);

ColorSwatches.propTypes = {
    colors: PropTypes.array.isRequired
};

ColorSwatches.defaultProps = {
    colors: []
};

export default ColorSwatches;
