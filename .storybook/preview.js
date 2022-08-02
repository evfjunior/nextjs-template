import * as NextImage from 'next/image'

const customViewports = {
  galaxyS5: {
    name: 'Galaxy S5',
    styles: { width: '360px', height: '640px' },
    type: 'mobile'
  },
  iPhone11Pro: {
    name: 'iPhone 11 Pro',
    styles: { width: '375px', height: '812px' },
    type: 'mobile'
  },
  iPhone13ProMax: {
    name: 'iPhone 13 Pro Max',
    styles: { width: '428px', height: '926px' },
    type: 'mobile'
  },
  iPad: {
    name: 'iPad',
    styles: { width: '810px', height: '1080px' },
    type: 'tablet'
  },
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: { width: '600px', height: '963px' },
    type: 'tablet'
  }
}

const OriginaNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginaNextImage {...props} unoptimized />
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: { current: 'dark' },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'iPhone11Pro'
  },
  layout: 'centered'
}
