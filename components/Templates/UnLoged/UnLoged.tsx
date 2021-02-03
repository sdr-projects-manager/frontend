import Login from '@components/Login'
import styled from 'styled-components'
import { Typography } from 'antd'

const { Title } = Typography

const UnLoggedStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  form {
    width: 100%;
    max-width: 40rem;
  }
`

const UnLoged: React.FunctionComponent = () => (
  <UnLoggedStyled>
    <Title
      level={1}
      style={{
        marginBottom: '3rem'
      }}
    >
      SDR
    </Title>
    <Login />
  </UnLoggedStyled>
)

export default UnLoged
