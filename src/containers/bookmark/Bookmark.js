import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RepoDataList from '../../components/repository/RepoDataList';

const Bookmark = (props) => {
  const { bookmarks, setBookmarks, isMobile } = props;

  const handleBookmarkRemove = useCallback((res) => {
    const removeData = bookmarks.filter((e) => e.id !== res.id);

    setBookmarks(removeData);
  }, [bookmarks]);

  return (
    <BookmarkBox isMobile={isMobile}>
      <h3>북마크</h3>
      <RepoDataList
        dataList={bookmarks}
        handleClick={handleBookmarkRemove}
        btnName="삭제"
      />
    </BookmarkBox>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isMobile: PropTypes.bool,
  setBookmarks: PropTypes.func.isRequired,
};

Bookmark.defaultProps = {
  bookmarks: [],
  isMobile: false,
};

export default Bookmark;

const BookmarkBox = styled.div`
  width: ${(props) => (props.isMobile ? '' : '50%')};
  border-radius: 16px;
  background: white;
  padding: 12px;
`;
