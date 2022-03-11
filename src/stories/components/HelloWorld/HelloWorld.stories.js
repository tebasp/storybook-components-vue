import HelloWorld from '../../../components/HelloWorld'

export default {
  title: 'UI/HelloWorld',
  component: HelloWorld,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HelloWorld },
  template: '<HelloWorld v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
  msg: 'Hello World',
}
