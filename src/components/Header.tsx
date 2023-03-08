import styled from "styled-components"

export default function Header() {
  return (
    <HeaderBody>
      <div>
        <Content>
          <div className="blank"></div>
          <div className="profileBody">
            <div className="content">
              <div className="profile">
                <img src="/a-co.png"></img>
              </div>
              <div className="name">
                <div>아코 (a-co)</div>
              </div>
            </div>
          </div>
          <div className="itemsBody">
            <button className="content">
              <div>
                <a href="http://school.gyo6.net/gbsw">
                  <svg aria-label="대화 상세 정보 보기" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                </a>
              </div>
            </button>
          </div>
        </Content>
      </div>
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: black;
  top: 0;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  width: 100%;
  color: rgb(250, 250, 250);

  > div {
    display: flex;
    border-bottom: 1px solid rgb(54, 54, 54); 
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 600;
    height: 60px;
    padding: 0 20px;
    width: 100%;
    z-index: 2;
  }
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: inherit;
  justify-content: space-between;
  width: 100%;

  .blank {
    flex-basis: 0px;
    margin-right: 8px;
    display: flex;
    flex-direction: row;
  }

  .profileBody {
    align-items: flex-start;
    color: rgb(var(--ig-primary-text));
    display: inline-block;
    flex-basis: 0px;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .profileBody > div.content {
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    align-content: stretch;
    display: flex;
    position: relative;
  }

  .profileBody > div.content > div.profile {
    margin-left: 8px;
    flex: 0 0 auto;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;
    display: flex;
    position: relative;
  }

  .profileBody > div.content > div.profile > img {
    width: 24px;
    height: 24px;
    background-color: rgb(18, 18, 18);
    border-radius: 50%;
    padding: 0 !important;
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-end;
    align-content: stretch;
    display: flex;
    position: relative;
  }

  .profileBody > div.content > div.name {
    min-width: 0px;
    margin-left: 12px;
    flex: 0 1 auto;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;
    display: flex;
    position: relative;
  }

  .profileBody > div.content > div.name > div {
    height: 40px;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    align-content: stretch;
    display: flex;
    position: relative;
    white-space: nowrap;
  }

  .itemsBody {
    justify-content: flex-end;
    margin-left: 8px;
    display: flex;
    flex-basis: 32px;
    flex-direction: row;
  }

  .itemsBody > button.content {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 8px;
  }

  .itemsBody > button.content > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`