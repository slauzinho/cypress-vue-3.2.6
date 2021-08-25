import { mount } from '@cypress/vue';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld);
  cy.get('div').should('exist');
});
