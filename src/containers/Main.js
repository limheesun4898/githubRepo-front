import React from 'react';
import styled from 'styled-components';
import Color from '../style/ColorTheme';
import useLocalStorage from '../hooks/useLocalStorage';
import useViewport from '../hooks/useViewport';
import RepoSearch from './search/RepoSearch';
import Bookmark from './bookmark/Bookmark';
import IssueCollect from './issue/IssueCollect';

const Main = () => {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', []);
  const { width, isMobile } = useViewport();

  return (
    <MainContainer width={width}>
      <Container type="top" isMobile={isMobile}>
        <RepoSearch bookmarks={bookmarks} setBookmarks={setBookmarks} />
        <Bookmark bookmarks={bookmarks} setBookmarks={setBookmarks} />
      </Container>
      <Container type="issue" isMobile={isMobile}>
        <IssueCollect bookmarks={bookmarks} />
      </Container>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: ${(props) => (props.width < 1200 ? '100%' : '1200px')};
  height: 100%;
  display: block;
  margin: 0 auto;
`;

const Container = styled.div`
  background: ${Color.grayMainBg};
  border-radius: 16px;
  padding: ${(props) => (props.isMobile ? '12px' : '36px')};
  display: ${(props) => (props.type === 'issue' || props.type === 'top' && props.isMobile ? 'block' : 'flex')};
  margin: ${(props) => (props.type === 'issue' ? '' : '28px 0')};
`;
