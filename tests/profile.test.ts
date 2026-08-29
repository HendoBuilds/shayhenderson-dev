import { describe, expect, it } from 'vitest';
import { identity, projects } from '../src/data/profile';

function isValidHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

describe('profile data invariants', () => {
  it('has exactly one featured project', () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured).toHaveLength(1);
  });

  it('gives every project a non-empty name and blurb', () => {
    for (const project of projects) {
      expect(project.name.trim()).not.toBe('');
      expect(project.blurb.trim()).not.toBe('');
    }
  });

  it('gives every project href a valid https URL', () => {
    for (const project of projects) {
      if (project.href !== undefined) {
        expect(isValidHttpsUrl(project.href)).toBe(true);
      }
    }
  });

  it('gives identity its core, non-empty fields', () => {
    expect(identity.name.trim()).not.toBe('');
    expect(identity.role.trim()).not.toBe('');
    expect(identity.email.trim()).not.toBe('');
    expect(identity.site.trim()).not.toBe('');
  });

  it('gives identity valid https links', () => {
    expect(isValidHttpsUrl(identity.site)).toBe(true);
    expect(isValidHttpsUrl(identity.github)).toBe(true);
    expect(isValidHttpsUrl(identity.linkedin)).toBe(true);
  });
});
