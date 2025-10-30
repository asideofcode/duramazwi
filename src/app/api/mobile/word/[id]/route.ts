import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';
import { audioDataService } from '@/services/audioDataService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const wordId = decodeURIComponent(id);

    // Get word details (returns array of matches)
    const wordMatches = dataService.getWordDetails(wordId) as any[];

    if (!wordMatches || wordMatches.length === 0) {
      return NextResponse.json(
        { error: 'Word not found' },
        { status: 404 }
      );
    }

    // Get audio records for this word
    const audioRecords = audioDataService.getRecordsForEntry(wordId);

    // Get the first match (should only be one exact match)
    const wordData = wordMatches[0];

    // Add audio URLs at different levels
    const wordLevelAudio = audioRecords.find(r => r.metadata.level === 'word');
    
    // Enhance meanings with audio data
    const enhancedMeanings = wordData.meanings?.map((meaning: any, meaningIndex: number) => {
      // Match the format used in audio index: meaning-0, meaning-1, etc.
      const meaningLevelId = `meaning-${meaningIndex}`;
      const meaningAudio = audioRecords.find(
        r => r.metadata.level === 'meaning' && r.metadata.levelId === meaningLevelId
      );

      // Enhance definitions with audio data
      const enhancedDefinitions = meaning.definitions?.map((def: any, defIndex: number) => {
        // If definition has examples array, enhance each example with audio
        const enhancedExamples = def.examples?.map((example: any, exampleIndex: number) => {
          const exampleLevelId = `example-${meaningIndex}-${defIndex}-${exampleIndex}`;
          const exampleAudio = audioRecords.find(
            r => r.metadata.level === 'example' && r.metadata.levelId === exampleLevelId
          );
          
          return {
            ...example,
            audioUrl: exampleAudio?.url
          };
        });

        // Also check for single example field (new schema)
        const exampleLevelId = `example-${meaningIndex}-${defIndex}-0`;
        const exampleAudio = audioRecords.find(
          r => r.metadata.level === 'example' && r.metadata.levelId === exampleLevelId
        );

        return {
          ...def,
          examples: enhancedExamples,
          audioUrl: def.example ? exampleAudio?.url : undefined // Only add audioUrl if single example exists
        };
      });

      return {
        ...meaning,
        audioUrl: meaningAudio?.url,
        definitions: enhancedDefinitions
      };
    });

    // Return enhanced word data with audio URLs
    return NextResponse.json({
      ...wordData,
      audioUrl: wordLevelAudio?.url,
      meanings: enhancedMeanings
    });
  } catch (error) {
    console.error('Mobile word detail error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch word details' },
      { status: 500 }
    );
  }
}
