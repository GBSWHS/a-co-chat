import styled from "styled-components"

export default function Header() {
  return (
    <HeaderBody>
      <CenterIcon src="a-co.png" />
      <CenterIcon src="symbol-only.png" onClick={() => window.location.href = 'https://gbsw.hs.kr'} />
    </HeaderBody>
  )
}

const HeaderBody = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 9%;
  background-color: #B4DAF3;
  text-align: center;
  z-index: 99999;
  display: -webkit-box;
  justify-content: center;
  align-items: center;
`

const CenterIcon = styled.img`
  margin: auto;
  margin-left: 5px;
  height: 55px;
  opacity: 75%;
  background-size: cover;
  cursor: pointer; 
`