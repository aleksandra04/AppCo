import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import '../styles/pagination.scss'
import { connect } from 'react-redux';
import { seleсtPaginationButtons } from '../store/selectors'


const Pagination = ({ paginationButtons }) => {
  const history = useHistory()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPage = searchParams.get('page');

  const [groupPagesNumber, setGroupPagesNumber] = useState(selectedPage ? Math.ceil(selectedPage / 5) - 1 : 0);

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

  return (<div>
    <span className='arrow-gray' onClick={handleClickLeftArrow}></span>

    {paginationButtons.length && paginationButtons[groupPagesNumber].map(but =>
      <button onClick={handleChangeCurrPage}>{but}</button>
    )}
    <span className='arrow-blue' onClick={handleClickRightArrow}></span>
  </div>
  )
}

const mapStateToProps = state => ({
  paginationButtons: seleсtPaginationButtons(state)
});

export default connect(
  mapStateToProps
)(Pagination);
