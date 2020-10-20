import React from 'react';
import './pagination.css';

const  createPagination = (props) => {
  let pages = props.totalPage;
  let page = props.page;

  let str = '<ul>';
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Show the Previous button only if you are on a page other than the first
  if (page > 1) {
    str += '<li className="page-item previous no"><a onClick="createPagination(pages, '+(page-1)+')">Previous</a></li>';
  }
  // Show all the pagination elements if there are less than 6 pages total
  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "no";
      str += '<li className="'+active+'"><a onClick="createPagination(pages, '+p+')">'+ p +'</a></li>';
    }
  }
  // Use "..." to collapse pages outside of a certain range
  else {
    // Show the very first page followed by a "..." at the beginning of the
    // pagination section (after the Previous button)
    if (page > 2) {
      str += '<li className="no page-item"><a onClick="createPagination(pages, 1)">1</a></li>';
      if (page > 3) {
          str += '<li className="out-of-range"><a onClick="createPagination(pages,'+(page-2)+')">...</a></li>';
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
    // Determine how many pages to show before the current page index
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }
    // Output the indexes for pages that fall inside the range of pageCutLow
    // and pageCutHigh
    for (let p = pageCutLow; p <= pageCutHigh; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue
      }
      active = page == p ? "active" : "no";
      str += '<li className="page-item '+active+'"><a onClick="createPagination(pages, '+p+')">'+ p +'</a></li>';
    }
    // Show the very last page preceded by a "..." at the end of the pagination
    // section (before the Next button)
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li className="out-of-range"><a onClick="createPagination(pages,'+(page+2)+')">...</a></li>';
      }
      str += '<li className="page-item no"><a onClick="createPagination(pages, pages)">'+pages+'</a></li>';
    }
  }
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str += '<li className="page-item next no"><a onClick="createPagination(pages, '+(page+1)+')">Next</a></li>';
  }
  str += '</ul>';

  return (
    <>
      {str}
    </>
  )
}

const PaginationComponent = (props) => {
  return (
    <>
      <div className="pagination">
        <createPagination
          totalPage={props.totalPage}
          page={props.page}
        />
      </div>
    </>
  )
} 
export default React.memo(PaginationComponent);
