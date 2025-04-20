# Video Annotation Tool

A comprehensive platform enabling collaborative video review with synchronized audio feedback, visual annotations, and categorized feedback.

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router) with React 18
- **State Management**: React Context API + SWR for data fetching
- **UI Components**: Tailwind CSS + Headless UI
- **Video Player**: Video.js with custom React wrapper
- **Audio Recording**: Web Audio API
- **Drawing/Annotation**: Canvas API with custom React implementation
- **Authentication**: NextAuth.js integrated with Azure AD B2C
- **Database Access**: Prisma ORM
- **API Design**: RESTful endpoints via Next.js API routes
- **Testing**: Jest, React Testing Library, Cypress
- **CI/CD**: GitHub Actions + Azure DevOps
- **Cloud Infrastructure**: Azure (App Service, Cosmos DB, Blob Storage, Media Services, etc.)

## Getting Started

1. Clone the repository
2. Copy `.env.local.example` to `.env.local` and update the variables
3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   ├── projects/
│   ├── videos/
│   │   ├── [id]/
│   │   │   ├── page.tsx
│   │   │   ├── review/
│   │   │   └── replay/
│   ├── api/
│   │   ├── auth/
│   │   ├── projects/
│   │   ├── videos/
│   │   ├── sessions/
│   │   └── users/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── video-player/
│   ├── annotation-tools/
│   ├── feedback-categories/
│   ├── session-controls/
│   └── shared/
├── hooks/
├── lib/
├── services/
└── types/
```

## Development Guidelines

- Follow the TypeScript type definitions
- Use Tailwind CSS for styling
- Write tests for components and API routes
- Follow the established project structure

## Testing

```bash
npm run test
```

## Deployment

This application is designed to be deployed to Azure App Service. See the technical implementation plan for more details on the Azure resources required.

## License

This project is proprietary and confidential.
