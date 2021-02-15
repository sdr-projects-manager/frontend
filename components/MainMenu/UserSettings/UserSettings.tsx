import styled from 'styled-components'
import { Menu, Dropdown } from 'antd'
import { SettingFilled } from '@ant-design/icons'
import { withTranslation, i18n } from 'locale/i18n'
import availableLanguages from 'data/availableLanguages'
import { useDispatch } from 'react-redux'
import { logout } from '@store/slices/authorisationSlice'
import Link from 'next/link'

interface IUserSettingsProps {
  t: (text: string) => string
}

const UserSettingsStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;

  .anticon {
    margin: 0;
  }
`

const UserSettings: React.FunctionComponent<IUserSettingsProps> = ({ t }) => {
  const dispatch = useDispatch()

  return (
    <Dropdown
      overlay={
        <Menu selectable defaultSelectedKeys={[i18n.language]}>
          <Menu.Item key="profile">
            <Link href="/profile">{t('Profile')}</Link>
          </Menu.Item>
          <Menu.ItemGroup title={t('languages')}>
            {Object.keys(availableLanguages).map((key) => (
              <Menu.Item onClick={() => i18n.changeLanguage(key)} key={key}>
                {t(availableLanguages[key])}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
          <Menu.Item onClick={() => dispatch(logout())} key="logout">
            {t('Logout')}
          </Menu.Item>
        </Menu>
      }
    >
      <UserSettingsStyled>
        <SettingFilled />
      </UserSettingsStyled>
    </Dropdown>
  )
}
export default withTranslation('common')(UserSettings)
