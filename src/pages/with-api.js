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

const WithAPI = ({ foo }) => (
  <Page>
    <Header>
      <p>Hello</p>
    </Header>
    <Body>
      <p>{foo}</p>
    </Body>
    <Footer>
      <p>Next</p>
    </Footer>
  </Page>
)
// pretend we go ask some API/DB a question
const sleep = ms => new Promise(res => setTimeout(res, ms))

// https://nextjs.org/docs/basic-features/data-fetching
export const getServerSideProps = async context => {
  await sleep(500)
  return {
    props: {
      foo: 'bar'
    }
  }
}

export default WithAPI
