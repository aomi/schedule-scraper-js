import * as cheerio from 'cheerio'

export function extractSections($: cheerio.Root): cheerio.Cheerio {
    const sectionEntries = $(
        `table[summary="This layout table is used to present the sections found"]>tbody>tr`
    )
    return sectionEntries
}

export function extractSection(
    $: cheerio.Root,
    sectionEntries: cheerio.Cheerio
): string[] {
    const descriptions: string[] = []
    for (
        let sectionIdx = 0;
        sectionIdx < sectionEntries.length;
        sectionIdx += 2
    ) {
        // Parse Title block e.g. "Algorithms and Data Structures I - 30184 - CSC 225 - A01"
        const title = $('a', sectionEntries[sectionIdx])
        const description = title.text().replace(/\s+/g, ' ')
        descriptions.push(description)
    }
    return descriptions
}
