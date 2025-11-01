import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const word = searchParams.get('word') || 'shona';
    const definition = searchParams.get('definition') || 'A Bantu language spoken in Zimbabwe';
    const partOfSpeech = searchParams.get('pos') || 'noun';
    const hasBothForms = searchParams.get('hasBothForms') === 'true';
    const totalMeanings = parseInt(searchParams.get('totalMeanings') || '1');
    
    // Format word display
    const displayWord = hasBothForms ? `${word} / ku-${word}` : word;
    
    // Truncate definition if too long
    const maxLength = 120;
    const displayDefinition = definition.length > maxLength 
      ? definition.substring(0, maxLength) + '...'
      : definition;

    // Color scheme based on part of speech
    const getColors = (pos: string) => {
      const colors: { [key: string]: { bg: string; text: string; badge: string } } = {
        'noun': { bg: '#1e40af', text: '#93c5fd', badge: '#3b82f6' },
        'verb': { bg: '#15803d', text: '#86efac', badge: '#22c55e' },
        'adjective': { bg: '#7e22ce', text: '#d8b4fe', badge: '#a855f7' },
        'adverb': { bg: '#ca8a04', text: '#fde047', badge: '#eab308' },
      };
      return colors[pos.toLowerCase()] || colors['noun'];
    };

    const colors = getColors(partOfSpeech);

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: `linear-gradient(135deg, ${colors.bg} 0%, #0f172a 100%)`,
          }}
        >
          <div tw="flex flex-col w-full h-full text-white px-16 py-12">
            {/* Header */}
            <div tw="flex items-center mb-8">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                <line x1="13" y1="8" x2="15" y2="8" />
                <line x1="13" y1="12" x2="15" y2="12" />
              </svg>
              <div tw="flex text-3xl ml-4" style={{ opacity: 0.9 }}>
                Shona Dictionary
              </div>
            </div>

            {/* Main Content */}
            <div tw="flex flex-col flex-1 justify-center">
              {/* Part of Speech Badge and Multiple Meanings Indicator */}
              <div tw="flex items-center gap-4 mb-6">
                <div 
                  tw="flex text-2xl px-6 py-3 rounded-full font-semibold"
                  style={{ 
                    background: colors.badge,
                    color: 'white'
                  }}
                >
                  {partOfSpeech}
                </div>
                {totalMeanings > 1 && (
                  <div 
                    tw="flex text-xl px-4 py-2 rounded-full font-semibold"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    +{totalMeanings - 1} more meaning{totalMeanings > 2 ? 's' : ''}
                  </div>
                )}
              </div>

              {/* Word */}
              <div tw="flex flex-col mb-8">
                <div tw="flex text-3xl mb-2" style={{ opacity: 0.7 }}>
                  Meaning of:
                </div>
                <div 
                  tw="flex font-bold mb-4"
                  style={{ 
                    color: colors.text,
                    fontSize: hasBothForms ? '72px' : '96px'
                  }}
                >
                  {displayWord}
                </div>
              </div>

              {/* Definition */}
              <div 
                tw="flex text-5xl leading-tight"
                style={{ 
                  opacity: 0.95,
                  maxWidth: '90%'
                }}
              >
                {displayDefinition}
              </div>
            </div>

            {/* Footer */}
            <div tw="flex justify-between items-end">
              <div tw="flex flex-col">
                <div tw="flex text-3xl" style={{ opacity: 0.7 }}>
                  Learn more at
                </div>
                <div tw="flex text-4xl font-bold">
                  shonadictionary.com
                </div>
              </div>
              
              {/* Decorative element */}
              <div tw="flex text-9xl" style={{ opacity: 0.1 }}>
                📖
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    imageResponse.headers.set('Content-Type', 'image/png');
    imageResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    
    return imageResponse;
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
