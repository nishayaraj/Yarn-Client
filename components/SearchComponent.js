import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
      />
      <Button type="submit" variant="outline-dark">Search</Button>
    </Form>

  );
}

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchComponent;
