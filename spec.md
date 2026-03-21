# Krishna Quote Video

## Current State
Scaffolded project with default frontend. No existing app content.

## Requested Changes (Diff)

### Add
- Full-screen Krishna Quote Video page matching the user's HTML exactly
- Black background with rain background video (https://www.w3schools.com/howto/rain.mp4) at 40% opacity
- Gold "Lord Krishna Message" heading with fadeIn animation
- Education quote paragraph with slideUp animation

### Modify
- Replace default App.tsx with the Krishna Quote Video page

### Remove
- All previous website builder UI

## Implementation Plan
1. Rewrite App.tsx as a full-screen video quote page
2. Background rain video, absolute positioned, muted, autoplay, loop, 40% opacity
3. Centered overlay with gold title and animated quote text
4. CSS animations: fadeIn (3s) on container, slideUp (5s) on paragraph
