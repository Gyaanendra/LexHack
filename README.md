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
flowchart LR
    classDef root fill:#f9d6ff,stroke:#333,stroke-width:2px,color:#000
    classDef app fill:#d0f0c0,stroke:#333,stroke-width:1px,color:#000
    classDef components fill:#ffb6c1,stroke:#333,stroke-width:1px,color:#000
    classDef ui fill:#ffd700,stroke:#333,stroke-width:1px,color:#000
    classDef hooks fill:#87cefa,stroke:#333,stroke-width:1px,color:#000
    classDef lib fill:#ffa07a,stroke:#333,stroke-width:1px,color:#000
    classDef public fill:#98fb98,stroke:#333,stroke-width:1px,color:#000
    classDef styles fill:#dda0dd,stroke:#333,stroke-width:1px,color:#000
    classDef files fill:#f0f8ff,stroke:#333,stroke-width:1px,color:#000

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

    A:::root
    B:::app
    C:::components
    D:::hooks
    E:::lib
    F:::public
    G:::styles
    C11:::ui
    B1:::files
    B2:::files
    B3:::files
    C1:::files
    C2:::files
    C3:::files
    C4:::files
    C5:::files
    C6:::files
    C7:::files
    C8:::files
    C9:::files
    C10:::files
    C11_1:::files
    C11_2:::files
    C11_3:::files
    C11_4:::files
    C11_5:::files
    C11_6:::files
    C11_7:::files
    C11_8:::files
    C11_9:::files
    C11_10:::files
    D1:::files
    D2:::files
    E1:::files```