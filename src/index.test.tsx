import * as React from 'react';
import {cleanup, render} from '@testing-library/react';

import {renderWhen, renderUnless} from '.';

interface IShouldRender {
	shouldRender: boolean
}

afterEach(cleanup);

describe('renderWhen', () => {
	test('works', () => {
		const Component = renderWhen(() => true, () => 'I rendered');
		const wrapper: any = render(<Component />);

		expect(() => wrapper.getByText('I rendered')).not.toThrow();
	});

	test('does not render when negative', () => {
		const Component = renderWhen(() => false, () => 'I rendered');
		const wrapper: any = render(<Component />);

		expect(() => wrapper.getByText('I rendered')).toThrow();
	});

	test('props are passed correctly', () => {
		const Component = renderWhen(
			({shouldRender}: IShouldRender) => shouldRender,
			({shouldRender}: IShouldRender) =>
				shouldRender 
					? `I rendered correctly`
					: 'Nope',
		);
		const wrapper: any = render(<Component shouldRender />);

		expect(() => wrapper.getByText('I rendered correctly')).not.toThrow();
	});
});

describe('renderUnless', () => {
	test('works', () => {
		const Component = renderUnless(() => false, () => 'I rendered');
		const wrapper: any = render(<Component />);

		expect(() => wrapper.getByText('I rendered')).not.toThrow();
	});

	test('does not render when negative', () => {
		const Component = renderUnless(() => true, () => 'I rendered');
		const wrapper: any = render(<Component />);

		expect(() => wrapper.getByText('I rendered')).toThrow();
	});

	test('props are passed correctly', () => {
		const Component = renderUnless(
			({shouldRender}: IShouldRender) => !shouldRender,
			({shouldRender}: IShouldRender) =>
				shouldRender 
					? `I rendered correctly`
					: 'Nope',
		);
		const wrapper: any = render(<Component shouldRender />);

		expect(() => wrapper.getByText('I rendered correctly')).not.toThrow();
	});
});
