import expect from 'expect';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import CourseForm from './CourseForm';

function setup() {
    let props = {
        course: {}, 
        saving: 
        false, 
        errors: {}, 
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();

    return { // will use these within the tests
        props,
        output, 
        renderer
    };
}


describe('#CourseForm', () => {
    it('renders the form and h1', () => {
        const {output} = setup();
        expect (output.type).toBe('form');
    });
});