// import the default class contructor from the package
import path from 'path'
import NextI18Next from 'next-i18next'

const i18nInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pl'],
  localePath: path.resolve('./public/static/locales')
})

export const { withTranslation, appWithTranslation, i18n } = i18nInstance
