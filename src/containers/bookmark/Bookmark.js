import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useViewport from '../../hooks/useViewport';
import RepoDataList from '../../components/repository/RepoDataList';

const Bookmark = (props) => {
  const { bookmarks, setBookmarks } = props;

  const handleBookmarkRemove = useCallback((res) => {
    const removeData = bookmarks.filter((e) => e.id !== res.id);

    setBookmarks(removeData);
  }, [bookmarks]);

  const { isMobile } = useViewport();

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
  bookmarks: PropTypes.arrayOf({
    id: PropTypes.number, // repo 고유 Id
    name: PropTypes.string, // repoName
    full_name: PropTypes.string, // {owner}/{repoName}
  }),
  setBookmarks: PropTypes.func.isRequired,
};

Bookmark.defaultProps = {
  bookmarks: [],
};

export default Bookmark;

const BookmarkBox = styled.div`
  width: ${(props) => (props.isMobile ? '' : '50%')};
  border-radius: 16px;
  background: white;
  padding: 12px;
`;
