function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const heroArtwork = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1400" role="img" aria-label="Tattoo-inspired artwork">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111111"/>
      <stop offset="100%" stop-color="#2c1a14"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f4e8d8" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#f4e8d8" stop-opacity="0.45"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="1400" fill="url(#bg)"/>
  <path d="M180 280c120-120 350-120 470 0 120 120 120 350 0 470-120 120-350 120-470 0-120-120-120-350 0-470Z" fill="none" stroke="url(#glow)" stroke-width="18"/>
  <path d="M240 980c110-80 210-84 304-12 94 72 190 74 360 4" fill="none" stroke="#c48158" stroke-width="12" stroke-linecap="round"/>
  <path d="M240 1030c130 38 270 36 420-6 90-26 182-26 300 0" fill="none" stroke="#f4e8d8" stroke-width="8" stroke-linecap="round" opacity="0.75"/>
  <text x="100" y="220" fill="#f4e8d8" font-family="Georgia, serif" font-size="108" font-weight="700" letter-spacing="8">TRUE</text>
  <text x="100" y="350" fill="#f4e8d8" font-family="Georgia, serif" font-size="108" font-weight="700" letter-spacing="8">COLLECTIVE</text>
  <text x="100" y="520" fill="#c48158" font-family="Georgia, serif" font-size="66" font-weight="700" letter-spacing="10">CHICANO LETTERING</text>
  <text x="100" y="600" fill="#f4e8d8" font-family="Georgia, serif" font-size="32" letter-spacing="6">SHADOWS · BLACK & GREY · CUSTOM PIECES</text>
  <path d="M930 180c-44 20-82 58-108 112-26 54-30 102-16 164" fill="none" stroke="#f4e8d8" stroke-width="10" stroke-linecap="round"/>
  <path d="M1010 250c-82 6-154 46-214 120" fill="none" stroke="#c48158" stroke-width="8" stroke-linecap="round"/>
</svg>`);

export const artistOneArtwork = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" role="img" aria-label="Chicano lettering artwork">
  <rect width="1000" height="1100" fill="#171717"/>
  <path d="M110 780c90-160 240-230 390-210 150 20 250 100 390 20" fill="none" stroke="#f6eadb" stroke-width="14" stroke-linecap="round"/>
  <path d="M170 280c114-70 246-74 372-12 74 36 130 88 192 170" fill="none" stroke="#b65f42" stroke-width="12" stroke-linecap="round"/>
  <text x="90" y="360" fill="#f6eadb" font-family="Georgia, serif" font-size="104" font-weight="700" letter-spacing="6">GHOST</text>
  <text x="90" y="470" fill="#b65f42" font-family="Georgia, serif" font-size="56" font-weight="700" letter-spacing="8">LETTERING</text>
  <text x="90" y="560" fill="#f6eadb" font-family="Georgia, serif" font-size="36" letter-spacing="5">SHADOW WORK / FINE DETAILS</text>
</svg>`);

export const artistTwoArtwork = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" role="img" aria-label="Tattoo studio artwork">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#21140f"/>
      <stop offset="100%" stop-color="#0f0f0f"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1100" fill="url(#bg2)"/>
  <circle cx="790" cy="280" r="120" fill="none" stroke="#f6eadb" stroke-width="14"/>
  <path d="M130 820c120-120 220-150 340-90 120 60 240 40 380-90" fill="none" stroke="#c48158" stroke-width="12" stroke-linecap="round"/>
  <text x="90" y="320" fill="#f6eadb" font-family="Georgia, serif" font-size="92" font-weight="700" letter-spacing="5">TRUE</text>
  <text x="90" y="430" fill="#f6eadb" font-family="Georgia, serif" font-size="92" font-weight="700" letter-spacing="5">COLLECTIVE</text>
  <text x="90" y="525" fill="#c48158" font-family="Georgia, serif" font-size="52" font-weight="700" letter-spacing="10">BLACK & GREY</text>
</svg>`);

export const artistThreeArtwork = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" role="img" aria-label="Tattoo flash artwork">
  <rect width="1000" height="1100" fill="#1b1b1b"/>
  <path d="M120 320c120 80 210 120 300 118 90-2 178-44 280-126" fill="none" stroke="#f6eadb" stroke-width="12" stroke-linecap="round"/>
  <path d="M160 760c160 56 280 60 360 12 80-48 176-48 320 0" fill="none" stroke="#b65f42" stroke-width="10" stroke-linecap="round"/>
  <text x="120" y="500" fill="#f6eadb" font-family="Georgia, serif" font-size="96" font-weight="700" letter-spacing="8">ART</text>
  <text x="120" y="615" fill="#f6eadb" font-family="Georgia, serif" font-size="96" font-weight="700" letter-spacing="8">SESSION</text>
  <text x="120" y="710" fill="#b65f42" font-family="Georgia, serif" font-size="40" letter-spacing="8">LETTERS / SESSIONS / CUSTOM PIECES</text>
</svg>`);
