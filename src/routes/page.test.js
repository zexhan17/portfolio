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

	it('renders name, title, and social links after mount timer fires', async () => {
		const { container } = render(Page);

		await act(() => {
			vi.advanceTimersByTime(3500);
		});

		expect(screen.getByText('Muhammad Zeeshan')).toBeDefined();
		expect(screen.getByText('Software Engineer')).toBeDefined();
		expect(screen.getByText('Resume')).toBeDefined();

		const resumeLink = screen.getByText('Resume');
		expect(resumeLink.getAttribute('download')).toBeDefined();

		const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
		expect(linkedinLink).toBeDefined();

		const githubLink = container.querySelector('a[href*="github.com"]');
		expect(githubLink).toBeDefined();
	});
});
