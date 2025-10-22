'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SoundSettings {
  enabled: boolean;
  volume: number; // 0-1
}

interface SoundSettingsContextType {
  settings: SoundSettings;
  updateSettings: (newSettings: Partial<SoundSettings>) => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
}

const SoundSettingsContext = createContext<SoundSettingsContextType | undefined>(undefined);

const STORAGE_KEY = 'shona_dictionary.sound_settings';

const defaultSettings: SoundSettings = {
  enabled: true,
  volume: 0.7
};

export function SoundSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SoundSettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsedSettings = JSON.parse(stored);
          setSettings({ ...defaultSettings, ...parsedSettings });
        }
      } catch (error) {
        console.warn('Failed to load sound settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      } catch (error) {
        console.warn('Failed to save sound settings:', error);
      }
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<SoundSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const toggleMute = () => {
    setSettings(prev => ({ ...prev, enabled: !prev.enabled }));
  };

  const setVolume = (volume: number) => {
    // Clamp volume between 0 and 1
    const clampedVolume = Math.max(0, Math.min(1, volume));
    setSettings(prev => ({ ...prev, volume: clampedVolume }));
  };

  return (
    <SoundSettingsContext.Provider value={{
      settings,
      updateSettings,
      toggleMute,
      setVolume
    }}>
      {children}
    </SoundSettingsContext.Provider>
  );
}

export function useSoundSettings() {
  const context = useContext(SoundSettingsContext);
  if (context === undefined) {
    throw new Error('useSoundSettings must be used within a SoundSettingsProvider');
  }
  return context;
}
