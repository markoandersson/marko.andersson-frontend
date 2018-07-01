import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai';
import GenericInfo from './GenericInfo.vue';

describe('Test GenericInfo', () => {
  it('Should include my name', () => {
    const wrapper = shallowMount(GenericInfo);

    expect(wrapper.text()).to.include('Marko Andersson');
  });
});
