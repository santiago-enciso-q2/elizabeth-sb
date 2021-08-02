import React from 'react';
import { Welcome as Intro } from '../components/Welcome'
import mdx from './Welcome.mdx';

export default {
    title: 'Intro/Welcome',
    component: Intro,
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

export const Welcome = () => <Intro />;
