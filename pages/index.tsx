// app/page.tsx or pages/index.tsx (depending on your router)

/**
 * This component is a Server Component, perfectly suited for Server-Side Rendering (SSR).
 * It will render the final HTML on the server before sending it to the browser.
 */
export default function Home() {
  return (
    <main style={{ backgroundColor: 'rgb(255, 193, 7)' }} // Approximation for bg-amber-400
    >
      <h1 
        style={{ color: 'navy', padding: '2rem' }}
      >
        SSR or Next tsx app - use llm api ***
      </h1>
    </main>
  );
}