import * as React from 'react';

export const useScript = (url: string) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    setLoading(false);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return { loading };
};
