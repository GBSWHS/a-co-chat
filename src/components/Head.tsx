import NextHead from 'next/head'

export default function Head () {
  return (
    <NextHead>
      <title>아코!</title>
      <meta name="description" content="경소고의 질문은 모두 아코가 해결해줄게!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
