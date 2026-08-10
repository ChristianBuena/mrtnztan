# SCROLL-DRIVEN INTERACTIVITY SYSTEM — TAN / FIELD NOTES

Core shift: stop treating scroll as "the thing that moves content past animations that already played." Instead, **scroll position becomes the input that drives the animation** — so the interactivity is *tied to* how far the visitor has scrolled, not just triggered once and left alone. This is what makes a site feel alive the whole way down instead of just at each section's entrance.

---

## THE CORE PRINCIPLE

Two different techniques get confused constantly — know which one you're using:

- **Scroll-TRIGGERED animation**: something plays once when it enters the viewport (fade in, slide up). Time-based. This is what you already have from the earlier choreography spec. Good for entrances, gets stale if it's the *only* technique.
- **Scroll-SCRUBBED animation**: the animation's progress is directly bound to scroll position — scroll 50% through a section, the animation is 50% done. Reversible, feels physical, tied to the visitor's actual movement rather than a timer.

**The fix for "visitor gets bored" is scrubbing, not more triggering.** A page full of fade-ins still feels static once you've seen the pattern twice. A page where scrolling *physically drives* things — a line drawing itself, a sprite advancing frame by frame, a wave field intensifying — feels alive continuously, because the visitor's own scroll input is the animation's fuel.

---

## TECHNIQUE CATALOG

### 1. Scroll-scrubbed reveals
Instead of an image fading in once, tie its dither resolution (Section 19's "scan" effect) directly to scroll progress through that entry — coarse dither at 0% scrolled into view, fully resolved at 100%. Scroll back up, it un-resolves. Makes the archive feel responsive to the visitor's actual movement, not just their presence.

### 2. Pinned sections (scroll-jacking, used sparingly)
A section stays fixed on screen while an *internal* animation plays as the user keeps scrolling — the page doesn't advance until the internal sequence finishes. Best use here: **BUILT**. Pin the project index while scrolling advances through project detail content, or pin the whole viewport while a 3D carousel (from the Three.js spec) rotates through projects one scroll-tick at a time.

Use this in 1–2 places max. Overused, it becomes the thing visitors complain about ("why won't this let me scroll past").

### 3. Site-wide progress-driven elements
Two elements should be driven by *total page scroll*, not per-section scroll:
- **The Field Mark sprite** — instead of a looping idle animation, advance one frame per fixed amount of page scroll. By the time the visitor reaches Contact, the sprite has completed its full cycle. Scrolling becomes literally "flipping through the archive," frame by frame — a strong, specific payoff for the concept.
- **The Ledger** — its entry count and position already update on navigation; also let it tick smoothly as the user scrolls past entries within a section, not just on section change.

### 4. Self-drawing timeline (Field History)
The vertical connector in the experience timeline draws itself as a line whose length is bound to scroll progress through that section — extends downward as the visitor scrolls, like a pen tracing the ledger in real time.

### 5. Depth/parallax layering tied to scroll, not just cursor
The dotted wave field's parallax (Section 17A) should respond to scroll position, not only cursor movement — dots drift at a different rate than content as the page moves, reinforcing depth continuously rather than only near the cursor.

### 6. Horizontal micro-scroll within a vertical section
For LAB specifically: consider a contained horizontal scroll strip for the Experiment Log entries (the smaller, lower-stakes ones) nested inside the normal vertical scroll — a distinct rhythm change that signals "this is a different kind of record" without disorienting the visitor. Keep it short (5–8 entries) so it resolves quickly.

### 7. Threshold-triggered state changes
Certain elements change state permanently once a scroll threshold is crossed (not reversible like scrubbing) — e.g., the header/nav bar compresses and its label switches to the bitmap accent font once the visitor scrolls past the hero, staying compact for the rest of the visit. Small, but it registers as "this site is paying attention to where I am."

### 8. Scroll-velocity reactions
Wave field amplitude or particle speed can respond to how *fast* the visitor is scrolling, not just how far — fast scroll = brief, subtle intensification of the wave motion, settling back to calm ambient movement when scrolling slows or stops. This is a small touch but makes the background feel responsive rather than decorative.

---

## PER-SECTION APPLICATION

**HERO** — Portrait parallax already responds to cursor (Three.js spec); add scroll-response too: as the visitor starts scrolling away from Hero, the portrait's dither very slightly intensifies (coarsens) as if receding into the archive, then resolves normally when they scroll back up.

**RECORDS (Certifications)** — Corner index numbers `[01] [02] [03]` count/tick up as each certificate crosses into view rather than appearing instantly. Certificate cards can very slightly rotate into their final flat position as they enter (a few degrees, scroll-scrubbed, not time-based).

**BUILT** — Highest-interactivity section, matches Three.js carousel spec: pin the section, scrub the carousel rotation directly to scroll position so the visitor "spins" through projects by scrolling rather than only clicking the index.

**LAB** — Standard entries use scroll-scrubbed dither resolve (Technique 1). Experiment Log uses the horizontal micro-scroll (Technique 6) for a rhythm break partway through the section.

**FIELD HISTORY** — Self-drawing timeline (Technique 4) is the signature move here; it's a natural fit since a timeline drawing itself as you scroll is one of the clearest possible visualizations of "your scroll position = the archive's time."

**CONTACT** — Deliberately calmer. Let the wave field slow and simplify here (contrast with the site's energy elsewhere) so the ending feels weighty rather than continuing to escalate. The large closing text can scrub in line-by-line as the final scroll approaches, landing exactly as the visitor reaches the bottom.

---

## GUARDRAILS (important — this can go wrong easily)

- **Never trap scroll.** Pinned sections (Technique 2) must always let the visitor scroll past if they scroll hard/fast or use a "skip" affordance — nothing frustrates visitors faster than feeling stuck.
- **Respect scroll input fidelity.** Trackpad, mouse wheel, and touch all produce different scroll deltas — test scrubbed animations on all three, not just trackpad (the most common dev-testing device but not the most common visitor device).
- **Don't scrub everything.** If every single element is scroll-bound, the page can start to feel effortful rather than alive — mix scrubbed (physical, continuous) with triggered (fire-once) so there's rhythm, not constant demand on the visitor's scroll input.
- **`prefers-reduced-motion`still applies fully** — scrubbed animations should collapse to their end-state instantly rather than requiring scroll to "complete" them, and pinned sections should un-pin (become normal flow) when reduced motion is active.
- **Performance:** scroll-bound animations run on every scroll event/frame — throttle with `requestAnimationFrame`, avoid layout-thrashing (batch reads/writes), and prefer transform/opacity changes over properties that trigger reflow.

---

## TOOLS

- **GSAP + ScrollTrigger** — the standard for this exact pattern (scrubbing, pinning, `onUpdate` progress callbacks). Handles cross-browser scroll-delta inconsistencies well. This is the most direct path to everything above.
- **Lenis** (or Locomotive Scroll) — adds smooth, inertia-based scrolling site-wide, which makes scroll-scrubbed animations feel considerably more premium than raw native scroll. Pair with ScrollTrigger (they're designed to work together).
- **Framer Motion's `useScroll` / `useTransform`** — if building in React and want to stay in one ecosystem rather than adding GSAP.
- **Three.js integration:** pass normalized scroll progress (0–1) into your shader uniforms directly — e.g., feed it into the dotted wave field's amplitude uniform, or the carousel's rotation value — so Three.js scenes respond to the same scroll input driving your 2D/CSS animations, keeping everything synchronized to one source of truth.

---

## MINIMAL CODE PATTERN (GSAP ScrollTrigger — scrub + pin)

```javascript
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Scrubbed dither-resolve on a project image
gsap.to('.project-image', {
  filter: 'contrast(1) brightness(1)', // from a coarser starting filter
  scrollTrigger: {
    trigger: '.project-entry',
    start: 'top bottom',   // animation starts as element enters viewport
    end: 'top center',     // finishes once it reaches center
    scrub: true,            // <-- this is what ties it to scroll position, not time
  }
});

// Pinned section with internal progress (e.g. BUILT carousel)
ScrollTrigger.create({
  trigger: '.built-section',
  start: 'top top',
  end: '+=2000',           // stays pinned for 2000px of scroll
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress; // 0 to 1
    rotateCarouselToProgress(progress); // your Three.js carousel rotation fn
  }
});

// Site-wide progress driving the Field Mark sprite frame
ScrollTrigger.create({
  trigger: document.body,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    const frame = Math.floor(self.progress * totalSpriteFrames);
    setFieldMarkFrame(frame);
  }
});
```

---

## SUMMARY

The visitor stops getting bored not because there's more motion, but because **their own scrolling is what's producing the motion** — the timeline draws itself as they scroll, the sprite advances as they move through the archive, the carousel spins under their scroll input, the dither resolves in step with their movement. That's a fundamentally different feeling from a sequence of animations playing at them. Prioritize the site-wide sprite-frame binding and the self-drawing timeline first — both are cheap to build and both directly demonstrate "scroll = you moving through my archive," which is the actual concept payoff.
