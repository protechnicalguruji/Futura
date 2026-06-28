import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }: { title: string; description: string }) {
  return (
    <Helmet>
      <title>{title} | Futura Groups</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
