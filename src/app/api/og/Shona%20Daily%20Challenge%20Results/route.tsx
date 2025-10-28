import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const score = searchParams.get('score') || '0';
    const accuracy = searchParams.get('accuracy') || '0';
    const correct = searchParams.get('correct') || '0';
    const total = searchParams.get('total') || '0';
    const time = searchParams.get('time') || '0:00';
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

    const accuracyNum = parseInt(accuracy);
    const getMessage = () => {
      if (accuracyNum === 100) return "My Shona is basically perfect! 🎉";
      if (accuracyNum >= 80) return "My Shona isn't too bad! 🌟";
      if (accuracyNum >= 60) return "My Shona is coming along! 👍";
      return "I (maybe) need to work on my Shona! 😅";
    };

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          }}
        >
          <div tw="flex flex-col items-center justify-center w-full h-full text-white text-center px-12 py-8">
            {/* Top Section: Centered Header */}
            <div tw="flex flex-col items-center mb-28">
              <div tw="flex text-5xl mb-3 text-white">
                ✅ Completed my daily
              </div>
              <div tw="flex text-7xl font-bold text-blue-400 mb-6">
                Shona Challenge!
              </div>
              <div tw="flex text-4xl text-white bg-gray-700 bg-opacity-40 px-8 py-4 rounded-3xl border border-blue-400 border-opacity-30">
                {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            
            {/* Middle Section: Hero + Grid + Message */}
            <div tw="flex items-center justify-center mb-28">
              {/* Hero on left */}
              <img 
                src="https://shonadictionary.com/challenge-hero.png"
                width="220"
                height="320"
                alt="Hero"
                style={{ marginRight: '40px' }}
              />
              
              {/* Stats Grid - 2x2 */}
              <div tw="flex flex-col">
                <div tw="flex mb-10">
                {/* Points Card */}
                <div tw="flex flex-col items-center justify-center bg-gray-700 bg-opacity-40 rounded-2xl border border-gray-600 border-opacity-30 mr-10" style={{ width: '320px', height: '180px' }}>
                  <div tw="flex text-8xl font-bold mb-2 text-blue-400">
                    {score}
                  </div>
                  <div tw="flex text-3xl text-white" style={{ opacity: 0.7 }}>
                    Points Earned
                  </div>
                </div>
                
                {/* Accuracy Card */}
                <div tw="flex flex-col items-center justify-center bg-gray-700 bg-opacity-40 rounded-2xl border border-gray-600 border-opacity-30" style={{ width: '320px', height: '180px' }}>
                  <div tw="flex text-8xl font-bold mb-2 text-green-400">
                    {accuracy}%
                  </div>
                  <div tw="flex text-3xl text-white" style={{ opacity: 0.7 }}>
                    Accuracy
                  </div>
                </div>
              </div>
              
              <div tw="flex">
                {/* Correct Answers Card */}
                <div tw="flex flex-col items-center justify-center bg-gray-700 bg-opacity-40 rounded-2xl border border-gray-600 border-opacity-30 mr-10" style={{ width: '320px', height: '180px' }}>
                  <div tw="flex text-8xl font-bold mb-2 text-purple-400">
                    {correct}/{total}
                  </div>
                  <div tw="flex text-3xl text-white" style={{ opacity: 0.7 }}>
                    Correct Answers
                  </div>
                </div>
                
                {/* Time Card */}
                <div tw="flex flex-col items-center justify-center bg-gray-700 bg-opacity-40 rounded-2xl border border-gray-600 border-opacity-30" style={{ width: '320px', height: '180px' }}>
                  <div tw="flex text-8xl font-bold mb-2 text-orange-400">
                    {time}
                  </div>
                  <div tw="flex text-3xl text-white" style={{ opacity: 0.7 }}>
                    Time Taken
                  </div>
                </div>
              </div>
              </div>
            </div>
            
            {/* Message */}
            <div tw="flex flex-col items-center mb-28">
              <div tw="flex text-5xl font-bold">
                {getMessage()}
              </div>
            </div>
            
            {/* Bottom Branding with Logo */}
            <div tw="flex flex-col items-center">
              <div tw="flex text-4xl text-white mb-4" style={{ opacity: 0.8 }}>
                Shona Daily Challenge
              </div>
              <div tw="flex items-center gap-4">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                  <line x1="13" y1="8" x2="15" y2="8" />
                  <line x1="13" y1="12" x2="15" y2="12" />
                </svg>
                <div tw="flex text-6xl font-bold text-white">
                  shonadictionary.com
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1920,
      }
    );

    // Set headers to display inline and suggest filename
    const filename = 'Shona Daily Challenge Results.png';
    imageResponse.headers.set('Content-Disposition', `inline; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`);
    imageResponse.headers.set('Content-Type', 'image/png');
    // Some browsers also check this header for download naming
    imageResponse.headers.set('X-Content-Type-Options', 'nosniff');
    
    return imageResponse;
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
