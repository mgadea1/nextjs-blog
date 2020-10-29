import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Primer post</h1>
      <h2>
        <Link href="/">
          <a>Ir al inicio</a>
        </Link>
      </h2>
    </>
  )
}