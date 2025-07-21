
/**
 * A simple, centered loading spinner component.
 * This is used as a fallback for React.Suspense to provide a visual indicator
 * to the user while a lazy-loaded page or component is being fetched.
 */
const LoadingSpinner = () => {
  return (
    // This container centers the spinner on the page.
    // The height `h-[calc(100vh-200px)]` is an example to prevent the spinner
    // from being covered by a fixed header or footer. Adjust as needed.
    <div className="flex h-[calc(100vh-200px)] items-center justify-center">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
        role="status"
        aria-label="loading"
      >
        {/* This span is for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
