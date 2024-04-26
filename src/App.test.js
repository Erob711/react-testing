/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  render(<App />);
  expect(screen.getByText('Show hidden content')).not.toBeNull();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  render(<App />);

  fireEvent.click(screen.getByText('Current theme: light'));
  expect(screen.getByText('Current theme: dark')).toBeInTheDocument();
  expect(screen.queryByText('Current theme: light')).not.toBeInTheDocument();

  fireEvent.click(screen.getByText('Current theme: dark'));
  expect(screen.getByText('Current theme: light')).toBeInTheDocument();
  expect(screen.queryByText('Current theme: dark')).not.toBeInTheDocument();

});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  render(<App />);

  fireEvent.click(screen.getByText('Current theme: light'));
  expect(document.body).toHaveStyle('color: #FFF');
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  render(<App />);

  fireEvent.click(screen.getByText('Show hidden content'));
  expect(screen.getByText('Hide hidden content')).toBeInTheDocument();
  expect(screen.getByText('this content is hidden by default')).toBeInTheDocument();

});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
