import { useEffect, useState } from 'react';

interface UseGoogleMapsScriptOptions {
  apiKey: string;
  libraries?: string[];
}

export const useGoogleMapsScript = ({ apiKey, libraries = ['places'] }: UseGoogleMapsScriptOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    if (!apiKey) {
      setError(new Error('Google Maps API key is required'));
      return;
    }

    // Check if script is already in DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // Script exists but not loaded yet, wait for it
      existingScript.addEventListener('load', () => setIsLoaded(true));
      existingScript.addEventListener('error', () => setError(new Error('Failed to load Google Maps script')));
      return;
    }

    // Create and load script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setError(new Error('Failed to load Google Maps script'));
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts before script loads
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [apiKey, libraries]);

  return { isLoaded, error };
};