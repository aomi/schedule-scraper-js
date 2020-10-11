import { extractSections, extractSection } from "../src/main";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

describe("extractSections works with ECE260", (): void => {
    const filePath = path.join(__dirname, "./ECE260_202009.html");
    const $ = cheerio.load(fs.readFileSync(filePath));
    it("extracts the descriptions from the sections", (): void => {
        const s = extractSections($);
        const descriptions = extractSection($, s);
        console.log(descriptions);
        expect(descriptions[0]).toBe(
            "Continuous-Time Signals and Systems - 10953 - ECE 260 - A01"
        );
        expect(descriptions[1]).toBe(
            "Continuous-Time Signals and Systems - 10954 - ECE 260 - A02"
        );
        expect(descriptions[2]).toBe(
            "Continuous-Time Signals and Systems - 10955 - ECE 260 - T01"
        );
        expect(descriptions[3]).toBe(
            "Continuous-Time Signals and Systems - 10956 - ECE 260 - T02"
        );
        expect(descriptions[4]).toBe(
            "Continuous-Time Signals and Systems - 10957 - ECE 260 - T03"
        );
    });
});

describe("extractSections works with PAAS138 (PAAS)", (): void => {
    const filePath = path.join(__dirname, "./PAAS138_202009.html");
    const $ = cheerio.load(fs.readFileSync(filePath));
    it("extracts the descriptions from the sections", (): void => {
        const s = extractSections($);
        const descriptions = extractSection($, s);
        console.log(descriptions);
        expect(descriptions[0]).toBe(
            "Intensive Beginner Japanese I - 12407 - PAAS 138 - A01"
        );
        expect(descriptions[1]).toBe(
            "Intensive Beginner Japanese I - 12408 - PAAS 138 - A02"
        );
        expect(descriptions[2]).toBe(
            "Intensive Beginner Japanese I - 12409 - PAAS 138 - A03"
        );
        expect(descriptions[3]).toBe(
            "Intensive Beginner Japanese I - 12410 - PAAS 138 - A04"
        );
        expect(descriptions[4]).toBe(
            "Intensive Beginner Japanese I - 13783 - PAAS 138 - A05"
        );
    });
});
