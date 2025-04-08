# LexHack 2025 Landing Page

This is the official landing page for LexHack 2025, the flagship event of the Center for Law, Technology & Innovation (CLTI).

## Project Overview

LexHack 2025 is a 24-hour hackathon that brings together law and technology students to develop innovative legal-tech solutions. The event follows a three-phase structure:

1. **BUILD** - Overnight hackathon where teams develop tech solutions
2. **DEFEND** - Teams defend their solutions against legal and regulatory challenges
3. **PITCH** - Shark Tank style presentation to industry experts and investors

This landing page serves as the primary information hub for potential participants.

## Project Structure

```mermaid
graph TD
    A[LexHack Landing] --> B[app]
    A --> C[components]
    A --> D[hooks]
    A --> E[lib]
    A --> F[public]
    A --> G[styles]
    
    B --> B1[globals.css]
    B --> B2[layout.tsx]
    B --> B3[page.tsx]
    
    C --> C1[about.tsx]
    C --> C2[faq.tsx]
    C --> C3[features.tsx]
    C --> C4[footer.tsx]
    C --> C5[hero.tsx]
    C --> C6[judges.tsx]
    C --> C7[mode-toggle.tsx]
    C --> C8[prizes.tsx]
    C --> C9[theme-provider.tsx]
    C --> C10[timeline.tsx]
    C --> C11[ui/]
    
    C11 --> C11_1[badge.tsx]
    C11 --> C11_2[breadcrumb.tsx]
    C11 --> C11_3[button.tsx]
    C11 --> C11_4[input.tsx]
    C11 --> C11_5[input-otp.tsx]
    C11 --> C11_6[progress.tsx]
    C11 --> C11_7[sheet.tsx]
    C11 --> C11_8[skeleton.tsx]
    C11 --> C11_9[slider.tsx]
    C11 --> C11_10[...]
    
    D --> D1[use-mobile.tsx]
    D --> D2[use-toast.ts]
    
    E --> E1[utils.ts]