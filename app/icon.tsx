import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          height={32}
          viewBox="0 0 32 32"
          width={32}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="15" fill="#18181b"/>
          <g transform="translate(0.7, 1.25)">
            <path
              d="M13.2 23.5H9.5V6h11.6v3.1h-7.9v4.1h7.1v3.1h-7.1v7.2z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
