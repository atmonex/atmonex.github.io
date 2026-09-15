# Design QA

Status: passed.

Target: user-selected option 1, dark city airflow hero with asymmetric workflow and robot-twin features.
Reference: ../atmonex-design/option-1.png (1435 × 1096).

Review date: 2026-09-15. Implementation preview: http://127.0.0.1:4180/.

## Visual comparison

Compared fresh Chromium screenshots at the reference viewport (1435 × 1096, device scale 1) with the selected design. Hero height, two-line headline, dark city/airflow composition, navigation alignment, light expertise band, asymmetric image widths, typography hierarchy, and section spacing match the selected direction.

First review found two P2 issues: headline scale was smaller than the reference, and the scrolled navigation allowed text to faintly show through. Corrected the desktop typography and made the scrolled header opaque. Fresh screenshots confirm both fixes. No remaining P0, P1, or P2 findings.

Inspected desktop, full-page, mobile hero, mobile menu, mobile workflow, capability, contact, business, and terms screenshots. Mobile stacks the image features and uses a collapsible navigation. Images remain intelligible at the responsive crops; text and controls are readable without clipping. Contact and business sections retain clear separation. Footer and commercial terms are legible.

Intentional differences: generated illustrations are separate production assets rather than exact duplicates of the mockup; blue buttons use a solid fill; existing brand icon is retained; lower-page capability disclosures and business sections extend the reference beyond its pictured viewport. Interface labels remain editable HTML, and scientific imagery is marked conceptual.

## Functional verification

`../.investment-build/verify-atmonex.cjs` completed successfully after the final CSS correction, using local Chromium 1228 through Playwright.

- All internal navigation targets exist; capability links open the target disclosure below the fixed header, including incoming URL fragments.
- Capability disclosures respond to both click and keyboard interaction.
- Mobile menu opens and closes, including Escape and link selection.
- Existing business/terms headings, paragraphs, labels, and values match the original page after whitespace normalization.
- All email links use `blueingel@hotmail.com`; no messages were sent.
- Email copy works, and clipboard denial gives a readable manual-copy fallback.
- No horizontal overflow at widths 320, 390, 768, 1024, 1435, or 1920 px.
- All image and font requests succeed; no browser console errors or failed requests.

## Local evidence

Evidence lives alongside this checkout in `../atmonex-design/`: `option-1.png`, `design-comparison.png`, `implementation-desktop.png`, `implementation-full.png`, `implementation-mobile.png`, `implementation-mobile-menu.png`, `implementation-mobile-work.png`, `implementation-mobile-capability.png`, `implementation-capability.png`, `implementation-contact.png`, `implementation-business.png`, `implementation-terms.png`, and `browser-verification.json`.

These local review artifacts are not part of the public website. Browser checks cover Chromium, not Safari/Firefox or a full accessibility certification. No live deployment is claimed by this review.
