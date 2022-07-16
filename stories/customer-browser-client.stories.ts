import { html, TemplateResult } from 'lit';
import '../src/customer-browser-client.js';

export default {
  title: 'CustomerBrowserClient',
  component: 'customer-browser-client',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <customer-browser-client style="--customer-browser-client-background-color: ${backgroundColor}" .title=${title}></customer-browser-client>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
