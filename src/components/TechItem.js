import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
    {tech}
    <button onClick={onDelete} type="button">Apagar Tech</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "defaultProps"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;