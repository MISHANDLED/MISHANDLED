// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: "https://mishandled.github.io",
  integrations: [
    mermaid({
      mermaidConfig: {
        theme: 'dark',
        themeVariables: {
        darkMode: true,
        
        // Dark background
        background: '#0f172a',
        mainBkg: '#0f172a',
        
        // BRIGHT, vibrant node colors with excellent contrast
        primaryColor: '#60a5fa',  // Bright blue
        primaryTextColor: '#000000',  // Black text for maximum contrast
        primaryBorderColor: '#93c5fd',
        
        secondaryColor: '#a78bfa',  // Bright purple  
        secondaryTextColor: '#000000',
        secondaryBorderColor: '#c4b5fd',
        
        tertiaryColor: '#34d399',  // Bright green
        tertiaryTextColor: '#000000',
        tertiaryBorderColor: '#6ee7b7',
        
        // Cluster/subgraph - slightly lighter background
        clusterBkg: '#1e293b',
        clusterBorder: '#60a5fa',
        
        // All text white on dark background
        textColor: '#ffffff',
        
        // Bright lines
        lineColor: '#60a5fa',
        arrowheadColor: '#60a5fa',
        
        // Node borders
        nodeBorder: '#93c5fd',
        
        // Edge labels
        edgeLabelBackground: '#1e293b',
        
        // Sequence diagram colors - bright boxes with black text
        actorBorder: '#93c5fd',
        actorBkg: '#60a5fa',
        actorTextColor: '#000000',
        actorLineColor: '#60a5fa',
        signalColor: '#ffffff',
        signalTextColor: '#ffffff',
        labelBoxBkgColor: '#60a5fa',
        labelBoxBorderColor: '#93c5fd',
        labelTextColor: '#000000',
        loopTextColor: '#ffffff',
        noteBorderColor: '#93c5fd',
        noteBkgColor: '#60a5fa',
        noteTextColor: '#000000',
        activationBorderColor: '#93c5fd',
        activationBkgColor: '#60a5fa',
        
        // Flowchart - vibrant, distinct colors with black text
        fillType0: '#60a5fa',  // Blue
        fillType1: '#a78bfa',  // Purple
        fillType2: '#34d399',  // Green
        fillType3: '#fbbf24',  // Amber
        fillType4: '#fb923c',  // Orange
        fillType5: '#f87171',  // Red
        fillType6: '#ec4899',  // Pink
        fillType7: '#2dd4bf',  // Teal
        }
      }
    })
  ],
});
