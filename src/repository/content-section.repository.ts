import type { ContentSection } from '@/types/content-section';

export interface ContentSectionRepository {
    getSections(): Promise<ContentSection[]>;
}
