# Ramschema
## Moment 4: Angular II

En webbplats skapad med Angular där användaren kan söka bland och sortera kurser från Mittuniversitetets ramschema. Kursinformationen hämtas från ett externt JSON-API och presenteras i en tabell.

Webbplats: https://moment4angular2.netlify.app/

## Funktioner

- Hämtar kursinformation från ett externt JSON-API
- Visar kurser i en tabell med kurskod, kursnamn och progression
- Sortering av kurser efter kurskod, kursnamn och progression
- Möjlighet att sortera i både stigande och fallande ordning
- Sökfunktion som filtrerar kurser direkt medan användaren skriver
- Sökning efter både kurskod och kursnamn
- Meddelande visas om inga kurser matchar sökningen
- Responsiv layout anpassad för olika skärmstorlekar

## Tekniker

Projektet är byggt med:

- Angular
- TypeScript
- HTML
- SCSS
- Angular Router
- Angular Forms / `ngModel`
- HttpClient för att hämta data från ett API
- RxJS och Observable för hantering av asynkrona anrop
- Komponentbaserad struktur
- Netlify för publicering

## Komponenter

Projektet använder följande centrala delar:

- `AppComponent` innehåller webbplatsens grundläggande layout med sidhuvud, huvudinnehåll och sidfot.
- `CourseComponent` hämtar och presenterar kursinformationen samt hanterar sökning och sortering.
- `FooterComponent` visar kontaktinformation och copyright i sidfoten.
- `CourseService` ansvarar för att hämta kursinformationen från JSON-API.
- `Course` ett TypeScript-interface som beskriver strukturen för ett kursobjekt.

## Installation och körning

För att köra projektet lokalt behöver du ha Node.js och Angular CLI installerade.

1. Klona projektet från GitHub:
```
git clone https://github.com/Aeja98/Angular2.git
```

2. Gå till projektmappen:
```
cd Angular2
```

3. Installera projektets beroenden:
```
npm install
```

4. Starta utvecklingsservern:
```
ng serve
```

5. Öppna webbläsaren och gå till:
http://localhost:4200/

## Filstruktur
```
Angular2/
├── public/
├── src/
│   ├── app/
│   │   ├── courses/
│   │   │   ├── courses.component.html
│   │   │   ├── courses.component.scss
│   │   │   └── courses.component.ts
│   │   ├── models/
│   │   │   └── course.ts
│   │   ├── services/
│   │   │   └── course.service.ts
│   │   ├── shared/
│   │   │   └── footer/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles/
│   │   ├── _fonts.scss
│   │   └── _theme.scss
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```
