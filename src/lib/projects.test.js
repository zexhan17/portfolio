import { describe, it, expect } from 'vitest';
import { projects } from './projects.js';

describe('Projects Data', () => {
	it('should contain a valid list of projects', () => {
		expect(Array.isArray(projects)).toBe(true);
		expect(projects.length).toBeGreaterThan(0);
	});

	it('should have Yalgamers.gg as the first top project with full-stack freelance description', () => {
		expect(projects[0].title).toBe('Yalgamers.gg');
		expect(projects[0].isLive).toBe(true);
		expect(projects[0].desc.toLowerCase()).toContain('freelance');
		expect(projects[0].desc.toLowerCase()).toContain('full-stack');
	});

	it('should not contain Lanjut', () => {
		for (const project of projects) {
			expect(project.title.toLowerCase()).not.toContain('lanjut');
			expect(project.link.toLowerCase()).not.toContain('lanjut');
		}
	});

	it('each project should have valid structure and fields', () => {
		for (const project of projects) {
			expect(project.title).toBeDefined();
			expect(typeof project.title).toBe('string');
			expect(project.title.trim().length).toBeGreaterThan(0);

			expect(project.link).toBeDefined();
			expect(typeof project.link).toBe('string');
			expect(project.link).toMatch(/^https?:\/\//);

			expect(project.desc).toBeDefined();
			expect(typeof project.desc).toBe('string');
			expect(project.desc.trim().length).toBeGreaterThan(0);

			expect(Array.isArray(project.tags)).toBe(true);
			expect(project.tags.length).toBeGreaterThan(0);
			for (const tag of project.tags) {
				expect(typeof tag).toBe('string');
				expect(tag.trim().length).toBeGreaterThan(0);
			}

			if (project.badge) {
				expect(typeof project.badge).toBe('string');
			}
			if (project.isLive !== undefined) {
				expect(typeof project.isLive).toBe('boolean');
			}
		}
	});

	it('should not have duplicate project titles', () => {
		const titles = projects.map((p) => p.title);
		const uniqueTitles = new Set(titles);
		expect(uniqueTitles.size).toBe(titles.length);
	});

	it('should place live working projects at the top of the list', () => {
		let seenNonLive = false;
		for (const project of projects) {
			if (!project.isLive) {
				seenNonLive = true;
			} else if (seenNonLive) {
				expect.unreachable(`Live project "${project.title}" found after non-live project`);
			}
		}
	});
});
