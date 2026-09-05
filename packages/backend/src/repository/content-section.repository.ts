import type { ContentSection } from '../types/content-section.js';

export interface ContentSectionRepository {
    getSections(): Promise<ContentSection[]>;
}
