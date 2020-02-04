import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom'
import '../styles/pagination.scss'
import { connect } from 'react-redux';
import { seleсtPaginationButtons } from '../store/selectors'


const Pagination = ({ paginationButtons }) => {
  const history = useHistory()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPage = searchParams.get('page');

  const [groupPagesNumber, setGroupPagesNumber] = 
    useState(selectedPage ? Math.ceil(selectedPage / 5) - 1 : 0);

  const handleChangeCurrPage = (event) => {
    searchParams.set('page', event.target.innerText);
    history.push({ search: searchParams.toString() })
  }

  const handleClickRightArrow = () => {
    let currNum = groupPagesNumber === paginationButtons.length - 1
      ? groupPagesNumber
      : groupPagesNumber + 1
    setGroupPagesNumber(currNum)
  }
  const handleClickLeftArrow = () => {
    let currNum = groupPagesNumber === 0
      ? groupPagesNumber
      : groupPagesNumber - 1
    setGroupPagesNumber(currNum)
  }

  return (
    <div className='pagination'>
      <span
        className={(groupPagesNumber === 0
          ? 'arrow-gray'
          : 'arrow-gray arrow-gray--translate'
          )}
        onClick={handleClickLeftArrow}
      >
        </span>

      {paginationButtons.length
        && paginationButtons[groupPagesNumber]
          .map(but =>
            <button
              onClick={handleChangeCurrPage}
              className={(but === +selectedPage
                ? 'pagination__button pagination__button--active'
                : 'pagination__button')}
            >
              {but}
            </button>
          )}
      <span
      className={(groupPagesNumber === paginationButtons.length -1
        ? 'arrow-blue arrow-blue--translate'
        : 'arrow-blue'
        )}
      onClick={handleClickRightArrow}></span>
    </div>
  )
}

const mapStateToProps = state => ({
  paginationButtons: seleсtPaginationButtons(state)
});

export default connect(
  mapStateToProps
)(Pagination);

Pagination.propTypes = {
  paginationButtons: PropTypes.arrayOf(PropTypes.shape([])),
};

Pagination.defaultProps = {
  paginationButtons: [],
};
