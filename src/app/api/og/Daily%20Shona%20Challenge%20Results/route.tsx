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
            {/* Top Section: Trophy + Header */}
            <div tw="flex flex-col items-center mb-28">
              {/* Trophy Circle */}
              <div tw="flex items-center justify-center mb-8" style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                <svg width="120" height="120" viewBox="0 0 576 512" fill="#d97706">
                  <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
                </svg>
              </div>
              
              <div tw="flex text-5xl mb-3 text-white">
                ✅ Completed my
              </div>
              <div tw="flex text-7xl font-bold text-blue-400 mb-6">
                Daily Shona Challenge!
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
                // width="220"
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
                Daily Shona Challenge
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
    const filename = 'Daily Shona Challenge Results.png';
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
