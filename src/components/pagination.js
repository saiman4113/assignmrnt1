import Pagination from 'react-bootstrap/Pagination';

const Pagin = ({ totalPages, currentPage, onPageChange }) => {
  const pageItems = [];

  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev onClick={() => onPageChange(Math.max(currentPage - 1, 1))} />
      {pageItems}
      <Pagination.Next onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
};

export default Pagin;

