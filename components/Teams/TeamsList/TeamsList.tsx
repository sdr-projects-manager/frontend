import Column from 'antd/lib/table/Column'
import { Table, Spin } from 'antd'
import { isError, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { withTranslation } from 'locale/i18n'
import Teams from 'services/Api/endpoints/Teams'
import { TeamsQuery, TEAM_MEMBERS } from 'types/IQuries'
import FormModal from '@components/FormModal'
import { ITeam } from 'types/ITeams'
import Link from 'next/link'
import { IUser } from 'types/IUsers'
import { useEffect, useState } from 'react'
import TeamForm from '../TeamForm'

interface ITeamsList {
  t: (text: string) => string
}

const TeamsList: React.FC<ITeamsList> = ({ t }) => {
  const { isLoading, error, data } = useQuery(TeamsQuery, () =>
    new Teams().get().then((res) => res.data)
  )

  if (isError(error)) toast.error(t(error.message))

  return (
    <>
      <div>
        <FormModal FormComponent={<TeamForm />} type="add" />
      </div>
      {isLoading && <Spin />}
      {data && (
        <Table dataSource={data} rowKey="id">
          <Column title={t('name')} dataIndex="name" key="name" />
          <Column
            title={t('Max people')}
            dataIndex="maxPeople"
            key="maxPeople"
          />
          <Column
            title={t('Edit')}
            key="edit"
            render={(values: ITeam) => {
              const teamMembers = useQuery(`${TEAM_MEMBERS}:${values.id}`, () =>
                new Teams()
                  .getMembers(values.id)
                  .then((res) => res.data.instance)
              )
              return (
                <FormModal
                  FormComponent={
                    <TeamForm
                      initialValues={{
                        ...values,
                        users:
                          teamMembers &&
                          teamMembers.data &&
                          teamMembers.data.length > 0 &&
                          teamMembers.data.map((user: IUser) => user.id)
                      }}
                    />
                  }
                  type="edit"
                />
              )
            }}
          />
          <Column
            title={t('See more')}
            dataIndex="more"
            key="more"
            render={(_, values: ITeam) => (
              <Link href={`/teams/${values.id}`}>{t('See more')}</Link>
            )}
          />
        </Table>
      )}
    </>
  )
}

export default withTranslation('common')(TeamsList)
