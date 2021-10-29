import React, { useState } from 'react';
import styled from 'styled-components';

const RepoBookmark = (props) => {
  const { bookmarks, setBookmarks } = props;

  const handleBookmarkRemove = (name) => {
    const removeData = bookmarks.filter((e) => e !== name);

    setBookmarks(removeData);
  };

  return (
    <RepoBookmarkBox>
      <h3>북마크</h3>
      {bookmarks
        && bookmarks.length === 0 && (
        <div>
          북마크에 저장된 Repo가 없습니다.
        </div>
      )}
      {bookmarks
        && bookmarks.map((res, index) => (
          <BookmarkList>
            {res}
            <button type="button" onClick={() => handleBookmarkRemove(res)}>삭제</button>
          </BookmarkList>
        ))}
    </RepoBookmarkBox>
  );
};

export default RepoBookmark;

const RepoBookmarkBox = styled.div`
  width: 30%;
  border-radius: 16px;
  background: white;
  padding: 0 18px 18px 18px;
`;

const BookmarkList = styled.div`
  display: flex;
  height: 36px;
  margin: 12px;
`;
