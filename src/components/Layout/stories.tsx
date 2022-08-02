import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Layout } from '.'

export default {
  title: 'Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default value'
}
