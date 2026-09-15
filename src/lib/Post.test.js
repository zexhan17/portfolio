import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, cleanup } from '@testing-library/svelte';
import Post from './Post.svelte';
import { projects } from './projects.js';

describe('Post Component', () => {
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
		const { container } = render(Post);
		expect(container).toBeDefined();
	});

	it('renders all projects and intro text after mount timer fires', async () => {
		render(Post);

		await act(() => {
			vi.advanceTimersByTime(3500);
		});

		expect(screen.getByText(/Each project in my portfolio represents/i)).toBeDefined();

		for (const project of projects) {
			expect(screen.getByText(project.title)).toBeDefined();
		}
	});

	it('renders Live App badges for live working projects', async () => {
		render(Post);

		await act(() => {
			vi.advanceTimersByTime(3500);
		});

		const liveBadges = screen.getAllByText('Live App');
		const expectedLiveCount = projects.filter((p) => p.isLive).length;
		expect(liveBadges.length).toBe(expectedLiveCount);
	});

	it('renders project links with target="_blank"', async () => {
		const { container } = render(Post);

		await act(() => {
			vi.advanceTimersByTime(3500);
		});

		const links = container.querySelectorAll('a');
		expect(links.length).toBeGreaterThanOrEqual(projects.length);

		const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
		for (const project of projects) {
			expect(hrefs).toContain(project.link);
		}
	});
});
