import React from 'react';
import { FormattedMessage } from 'react-intl';

const TranslateTing = ({ text, values }) => (
    <FormattedMessage
        id={text}
        defaultMessage={text}
    // values={values}
    />
);

export default TranslateTing;
