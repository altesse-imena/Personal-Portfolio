import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Altesse Imena - Software Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%), linear-gradient(-45deg, #1e293b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e293b 75%), linear-gradient(-45deg, transparent 75%, #1e293b 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            padding: '60px',
            borderRadius: '24px',
            border: '2px solid rgba(99, 102, 241, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            Altesse Imena
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#cbd5e1',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            Software Engineer
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              margin: '0',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Passionate about creating innovative solutions and building impactful applications
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
