import React from "react"

export default function ClickableImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <a href={src} target="image">
      <img src={src} alt={alt} style={{ width: `100%` }} />
    </a>
  )
}
