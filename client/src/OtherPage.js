import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      im some other page
      <Link to="/">go back home</Link>
    </div>
  )
}
