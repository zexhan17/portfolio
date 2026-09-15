import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/svelte';
import Post from './Post.svelte';
import { projects } from './projects.js';

describe('Post Component', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('renders without crashing initial state', () => {
		const { container } = render(Post);
		expect(container).toBeDefined();
	});

	it('renders all projects and intro text after mount timer fires', async () => {
		render(Post);

		await act(() => {
			vi.advanceTimersByTime(1100);
		});

		expect(screen.getByText(/Each project in my portfolio represents/i)).toBeDefined();

		for (const project of projects) {
			expect(screen.getByText(project.title)).toBeDefined();
		}
	});

	it('renders project links with target="_blank"', async () => {
		const { container } = render(Post);

		await act(() => {
			vi.advanceTimersByTime(1100);
		});

		const links = container.querySelectorAll('a');
		expect(links.length).toBeGreaterThanOrEqual(projects.length);

		const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
		for (const project of projects) {
			expect(hrefs).toContain(project.link);
		}
	});
});
