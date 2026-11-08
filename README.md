# Safe Space

**Safer Digital Spaces. Stronger Communities.**

A digital-safety education and support-navigation platform, initially focused on Senegal with potential for wider West African use.

## Project goals
- Help individuals understand online harm and practical digital-safety options.
- Connect visitors with carefully verified support and official reporting information.
- Equip NGOs, educators and community facilitators with learning resources.
- Offer English and French content initially, with possible future Wolof support.

## Current prototype
This repository contains an early responsive React/Vite website prototype with:
- Homepage and audience pathways
- English/French interface toggle
- Learning topics and resource placeholders
- Motion design with reduced-motion support
- Bilingual organisation resource centre with four printable resources:
  - 75-minute digital-safety workshop session plan
  - Respectful discussion guide using fictional scenarios
  - Safer session preparation checklist
  - Responsible digital-safety campaign review checklist
- Resource reader with browser print / Save as PDF
- Senegal support directory with 12 resource listings, searchable categories, all 14 administrative-region filters and source notes:
  - Police cybercrime reporting portal and DCSSI Jokkocyber cybersecurity incident portal
  - Commission de Protection des Données Personnelles
  - Centre GINDDI Allo 116 child-helpline information
  - Association des Juristes Sénégalaises legal-information pathway
  - KAYAM women's violence support and Petit Mbao shelter information
  - EDEN listening, psychosocial support and referral office in Guédiawaye; EDEN reports project intervention in eight regions, which is not presented as eight local offices
  - Safe Open Space active-listening and psychosocial referral platform
  - Ministry of Health Mental Health Division information contact
  - AfricTivistes Taxaw Temm online-safety resource and WhatsApp contact
  - JONCTION digital-rights education and advocacy
  - Police 17, Fire & Rescue 18 and SAMU medical emergency 1515
  - AJS regional presence listing is based on an APS report dated 24 October 2026: Dakar, Thiès, Louga, Ziguinchor, Sédhiou, Kolda and Kédougou. Exact active office addresses and opening hours must be confirmed directly.
  - Region filtering distinguishes national phone/online access from a reported physical or programme presence; a programme footprint is not treated as a walk-in office.
  - ANSD's 14-region structure is used for the region selector.
- Privacy and contact information placeholders
- Chatbot interface marked as not connected
- Safety disclaimer and quick-exit control

## Important safety status
This is an educational prototype, not a live support service. Directory entries are based on organisation or government information reviewed on 8 November 2026. A published phone number or website has not necessarily been tested by Safe Space; current intake, response times, capacity, fees and local availability must be confirmed with the provider. A regional project footprint does not mean a local office exists in every listed region. Do not enter personal or sensitive information. The chatbot is not connected to an AI provider and cannot provide crisis response.

The quick-exit control navigates away but cannot erase browser history, downloads, network records or protect a monitored device.

## Local development
Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Netlify
Build command: `npm run build`

Publish directory: `dist`

The included `netlify.toml` supplies these settings.

## Before public launch
- Confirm brand and domain clearance.
- Add only reviewed educational content.
- Reconfirm every support organisation, official URL, telephone number and service availability before relying on it; current records distinguish published source details from contacts tested directly.
- Obtain appropriate safeguarding, privacy and legal review.
- Review English and French content with human reviewers.
- Test accessibility, security, mobile performance and all links.
- Review organisation toolkit resources with safeguarding and training specialists before external use.
- Select and configure any AI provider only after privacy and cost assessment.

## Governance
Each published resource should record its source, language, reviewer, review date and next review date. Support contact information should be rechecked regularly.

Safe Space is educational and informational. It is not an emergency service, counselling provider, law-enforcement agency or legal practice.