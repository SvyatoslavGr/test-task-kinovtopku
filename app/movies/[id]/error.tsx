'use client';

export default function Error({error}: {error: Error}) {
  return <p className="mx-auto my-auto">{error.message}</p>
}