# React Interview — Two-Part Assessment

## Overview

Welcome! This interview consists of two parts:

1. **Task 1 (30 minutes)**: Button component and modal implementation
2. **Task 2 (30 minutes)**: Full AI assistants directory

We'll assess your React/TypeScript skills progressively, starting with fundamental UI components.

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The project uses:

- React with TypeScript
- Vite
- Tailwind CSS
- Mock API for data

---

## Task 1:

### Requirements

Build a button that opens a modal on click:

page: `src/pages/AssistantsPage.tsx`

1. **Create a Button Component**

- Create `src/components/Button.tsx`
- Accept props: `children`, `onClick`, `variant` (primary/secondary)
- Use TypeScript
- Style with Tailwind CSS classes

2. **Create a Modal Component**

- Create `src/components/Modal.tsx`
- Props: `title`
- Include a close button (×) in the header
- Use TypeScript

---

## Task 2: AI Assistants page

### Overview

Design and partially implement an AI assistants page. Focus on architecture and component design using pseudocode and comments.

Design Architecture for an AI assistants directory page with the following features:

- Search for assistants
- Grid display of assistants overview
- Modal for assistant details
- Error handling
- Loading states

### Requirements

1. **Component Architecture Design**

- Draw out your component hierarchy

2. **State Management Design**

- Define what state lives where

3. **Data Flow Design**

- How does data flow from the API to components?
- Where do you handle loading/error states?
- How do you manage the modal state?

4. **Implementation Focus Areas**
   - Grid layout with cards
   - Search functionality
   - Error/loading states

### Available Resources

#### Mock API

```typescript
// Already implemented in src/api/assistants.ts
fetchAssistants(params?: AssistantsParams): Promise<AssistantSummary[]>
fetchAssistantDetail(id: string): Promise<AssistantDetail>
```

TypeScript Types

```typescript
type AssistantCategory =
  | "general"
  | "coding"
  | "design"
  | "research"
  | "productivity";

interface AssistantSummary {
  id: string;
  name: string;
  category: AssistantCategory;
  shortDescription: string;
}

interface AssistantDetail extends AssistantSummary {
  capabilities: string[];
  longDescription: string;
  website?: string;
}
```
