import type { Meta, StoryObj } from '@storybook/vue3'
import BottomNavigation from './BottomNavigation.vue'

type Story = StoryObj<typeof BottomNavigation>

const meta: Meta<typeof BottomNavigation> = {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  argTypes: {},
  render: args => ({
    components: { BottomNavigation },
    setup () {
      return { args }
    },
    template: '<BottomNavigation v-bind="ars">'
  })
}

export const Default: Story = {
  args: {}
}

export default meta
