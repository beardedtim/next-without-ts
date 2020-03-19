import styled from '@emotion/styled'

const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /*
    https://github.com/jonathantneal/precss
  */
  > * {
    padding: 1rem;
  }
`

const Header = styled.header``

const Body = styled.main`
  flex-grow: 2;
`

const Footer = styled.footer``

const HomePage = () => (
  <Page>
    <Header>
      <p>Hello</p>
    </Header>
    <Body>
      <p>From</p>
    </Body>
    <Footer>
      <p>Next</p>
    </Footer>
  </Page>
)

export default HomePage
