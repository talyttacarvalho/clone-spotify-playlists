import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

export const SearchWrapper = styled.section`
  background-image: linear-gradient(rgb(70, 76, 82), rgb(7, 7, 8) 85%);
  background-color: var(--black);
  color: var(--white);
  height: 100%;
  width: 80%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`

export const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: var(--white);
  line-height: 3rem;
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 3rem;
  flex-grow: 1;

  :focus {
    border-bottom: solid 1px var(--green);
  }
`

export const SearchButton = styled.button`
  background-color: var(--green);
  border-radius: 30px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  color: var(--white);
  line-height: 3rem;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 5px 10px;
  width: 20rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: var(--dark-green);
  }
`
