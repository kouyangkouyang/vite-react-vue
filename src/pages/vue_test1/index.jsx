import React from 'react';
import VueComponent from './vueIndex.vue';
import { applyVueInReact } from 'vuereact-combined';

let VueComponentInReact = applyVueInReact(VueComponent);

const Page = () => {
  return <VueComponentInReact />;
};

export default Page;
