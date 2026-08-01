// lib/ai.ts
// Utility functions for AI assistant integration

export interface AIRequest {
  message: string;
  context?: string;
  language?: 'en' | 'my';
}

export interface AIResponse {
  content: string;
  language: string;
}

// Simulated AI response generator
// In production, replace with actual Claude API call
export async function generateAIResponse(request: AIRequest): Promise<AIResponse> {
  const { message, context, language = 'en' } = request;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Generate contextual response
  const responses: Record<string, string> = {
    pulsesync:
      'PulseSync is a flagship multi-module Android project demonstrating senior-level architecture with Clean Architecture, Firebase backend, offline-first design, and full CI/CD pipeline. The key technical challenge was implementing real-time conflict resolution for offline edits, which I solved using CRDTs with Firebase Firestore.',
    architecture:
      'I specialize in Clean Architecture with MVVM/MVI patterns. Each project is structured with separate data, domain, and presentation layers for maximum testability and scalability. I use Kotlin Coroutines and Flow for asynchronous operations and state management.',
    kotlin:
      'Kotlin is my primary language for Android development. I leverage its powerful features including coroutines for async operations, sealed classes for state representation, extension functions for clean APIs, and Flow for reactive streams.',
    jetpack:
      'I extensively use Jetpack Compose for modern UI development, combining it with Navigation Compose for routing, Room for local storage, Paging 3 for efficient data loading, and Hilt for dependency injection.',
    ai:
      'I integrate AI using a hybrid approach: TensorFlow Lite for on-device machine learning (offline, privacy-preserving) and the Claude API for cloud-based natural language processing tasks. The MoekyawTranslator app demonstrates this dual strategy.',
    ci: 'I set up CI/CD pipelines using GitHub Actions for automated testing, linting, and deployment. This includes unit tests with JUnit and MockK, UI tests with Compose Test, and automated build distribution via Firebase App Distribution.',
  };

  const lowercaseMessage = message.toLowerCase();
  let content =
    "I can provide detailed information about Moe's projects, architecture patterns, tech stack choices, or specific technologies. Feel free to ask about PulseSync, architecture patterns, Kotlin, Jetpack Compose, AI integrations, or CI/CD pipelines.";

  for (const [key, value] of Object.entries(responses)) {
    if (lowercaseMessage.includes(key)) {
      content = value;
      break;
    }
  }

  // Burmese language response simulation
  if (language === 'my') {
    content =
      content ===
      responses[lowercaseMessage.split(' ').find((w) => responses[w]) || ''] || content;
    // Simplified Burmese translation for demo
  }

  return { content, language };
}
