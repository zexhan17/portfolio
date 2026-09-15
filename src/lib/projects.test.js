import { describe, it, expect } from 'vitest';
import { projects } from './projects.js';

describe('Projects Data', () => {
	it('should contain a valid list of projects', () => {
		expect(Array.isArray(projects)).toBe(true);
		expect(projects.length).toBeGreaterThan(0);
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
		}
	});

	it('should not have duplicate project titles', () => {
		const titles = projects.map((p) => p.title);
		const uniqueTitles = new Set(titles);
		expect(uniqueTitles.size).toBe(titles.length);
	});
});

