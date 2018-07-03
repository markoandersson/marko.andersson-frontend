import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai';
import {RotateSquare} from 'vue-loading-spinner';
import GenericInfo from './GenericInfo.vue';

describe('Test GenericInfo', () => {
  it('Should include my name', () => {
    const wrapper = shallowMount(GenericInfo);

    expect(wrapper.text()).to.include('Marko Andersson');
  });

  it('should show loading spinner', () => {
    const wrapper = shallowMount(GenericInfo);

    expect(wrapper.contains(RotateSquare)).to.be.true;
  });
});
