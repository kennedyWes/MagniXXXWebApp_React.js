import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: .3px solid #888888;
  background: linear-gradient(#888888, #FFFFFF);
  padding: 1rem;
`;

const AreaSearch = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  /* height: 80%; */
  /* margin-bottom: 4rem; */
`;

const Search = styled.input`
  width: 40%;
  height: 40px;
  background-color: #fff;
  border-radius: 9px;
  border: .8px solid #CCCCCC;
  text-align: left;
  font-size: .85rem;
  padding-left: 2.8rem;
  background: linear-gradient(#888888, #FFFFFF);
`;

const TitleHeader = styled.div`
  position: absolute;
  margin-top: 7rem;
  text-decoration: none;
  font-size: 17px;
  color: #878787;

  & > a{
        color: #878787;
        text-decoration: none;
      }
        & > a:hover {
          transform: scale(1.1);
          color: #C78C19;
        }
        & > a:active {
          color: #C78C19;
          text-decoration: underline;
`

const Nav = styled.nav`
    color: #000;
    list-style: none;
      & > a{
        display: inline-block;
        color: #000;
        text-decoration: none;
      }
        & > a:last-child {
          background: #a51b0b;
          color: white;
          padding: .8rem;
          border-radius: 12px;
          border: none;
          box-shadow: 7px 7px 7px #373737;
        }
        & > a:hover {
          transform: scale(1.1);
          color: white;
        }
        & > a:active {
          background-color: #C78C19;
          color: white;
        }
`;

export { Container, Nav, AreaSearch, Search, TitleHeader};
