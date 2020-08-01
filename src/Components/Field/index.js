import React from 'react';
import PropTypes from 'prop-types';

function Field({
  value, name, type, label, onChange,
}) {
  const filedId = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={filedId}
      >
        {label}
        :
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
Field.defaultProps = {
  type: 'text',
  value: 'text',
  onChange: () => {},
};

Field.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Field;
