import React from 'react';
import { Pagination } from 'react-bootstrap';

const ComntPagin = ({ currentPage, onPageChange }) => {
  return ( 
    <Pagination className="justify-content-center">
    <Pagination.Item
      
      active={1 == currentPage}
      onClick={() => onPageChange(1)}
      className='gray-active'
      
    >
    1
    </Pagination.Item>

    <Pagination.Item
      
      active={2 == currentPage}
      onClick={() => onPageChange(2)}
    >
    2
    </Pagination.Item>

    <Pagination.Item
      
      active={3 == currentPage}
      onClick={() => onPageChange(3)}
    >
    3
    </Pagination.Item>
    </Pagination>
   );
}
 
export default ComntPagin;

