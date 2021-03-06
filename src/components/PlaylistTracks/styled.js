import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background-image: linear-gradient(rgb(70, 76, 82), rgb(7, 7, 8) 85%);
  background-color: var(--black);
  color: var(--white);
  height: 100vh;
  width: 100%;
  padding: 3rem 3rem 3rem 33rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('medium')`
    padding 3rem;
  `}

  ${media.lessThan('small')`
    padding 0.3rem;
  `}
`

export const GoBackButton = styled.button`
  outline: none;
  border: none;
  text-decoration: none;
  background: none;
  cursor: pointer;
  align-self: flex-start;
  padding: 0 3rem;
`

export const IconWrapper = styled.div`
  color: var(--white);
  width: 3rem;
  height: 3rem;
  transition: color 0.3s;

  &:hover {
    color: var(--gray);
  }
`
