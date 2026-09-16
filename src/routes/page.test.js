import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, cleanup } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('Home Page (+page.svelte)', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(async () => {
		await act(() => {
			vi.advanceTimersByTime(4000);
		});
		cleanup();
		vi.useRealTimers();
	});

	it('renders without crashing initial state', () => {
		const { container } = render(Page);
		expect(container).toBeDefined();
	});

	it('renders name, title, and social links while hiding resume link after mount', async () => {
		const { container } = render(Page);

		await act(() => {
			vi.advanceTimersByTime(3500);
		});

		expect(screen.getByText('Muhammad Zeeshan')).toBeDefined();
		expect(screen.getByText('Software Engineer')).toBeDefined();

		// Verify resume link is hidden
		expect(screen.queryByText('Resume')).toBeNull();

		const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
		expect(linkedinLink).toBeDefined();

		const githubLink = container.querySelector('a[href*="github.com"]');
		expect(githubLink).toBeDefined();
	});
});
