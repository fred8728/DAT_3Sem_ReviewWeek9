import React from "react";
import "./App.css";

import Proptypes from 'prop-types'

function Member(props) {
  const { name, phone, isMember } = props;
  const member = isMember ? "Yes" : "False";
  return<p>
      {name} phone: {phone}, isMember:{member}
    </p>
}

Member.propTypes = {
  name : Proptypes.string.isRequired,
  phone : Proptypes.string,
  isMember : Proptypes.bool
}

Member.defaultProps = { 
  isMember : false
}
function App() {
  return (
    <div className="App">
      <Member name="Simone" phone="12345678" isMember={true} />
    </div>
  );
}

export default App;

