# Multi-Business Digital Membership Platform
### Product Documentation v1.0

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Product Positioning](#3-product-positioning)
4. [User Personas](#4-user-personas)
5. [User Flows](#5-user-flows)
6. [Feature Scope (MVP vs. Future)](#6-feature-scope-mvp-vs-future)
7. [System Architecture Overview](#7-system-architecture-overview)
8. [Data Model Overview](#8-data-model-overview)
9. [Tech Stack Recommendation](#9-tech-stack-recommendation)
10. [Development Roadmap](#10-development-roadmap)
11. [Business Model](#11-business-model)
12. [Risks & Open Questions](#12-risks--open-questions)
13. [Competitive Landscape](#13-competitive-landscape)

---

## 1. Executive Summary

A **two-sided SaaS platform** that lets any small or medium business create its own branded digital membership ecosystem — without building a custom app or investing in expensive software. Each business gets its own store profile, QR code, membership plans, and branding, while customers can join multiple businesses and manage all their memberships from a single app ("wallet" model).

It is **not** a marketplace (like Shopee/Lazada), **not** a POS system, and **not** a simple QR generator. It sits closer to a **loyalty/membership infrastructure layer** — similar in category to white-label loyalty platforms, but positioned for Philippine SMBs who need something simple and affordable.

---

## 2. Problem Statement

Small and medium businesses currently manage loyalty/membership through fragmented, unprofessional systems:
- Paper punch cards
- Facebook Messenger announcements
- Handwritten notebooks for customer names
- Disconnected, business-specific apps (expensive, overkill for SMBs)

Customers, meanwhile, end up juggling many physical cards or informal sign-ups across the businesses they frequent, with no unified way to track memberships, points, or promotions.

**Core insight:** Businesses want professional membership tools without app-development costs. Customers want one place to manage all their memberships instead of a wallet full of paper cards.

---

## 3. Product Positioning

| Category | Positioning |
|---|---|
| **Is** | Two-sided SaaS / membership infrastructure platform |
| **Is not** | Marketplace, POS system, or simple QR generator |
| **Closest analogy** | "Shopify, but for digital membership ecosystems instead of online stores" |
| **Primary market** | Philippine SMBs (single-branch owners, multi-business owners, franchises) |
| **Secondary beneficiary** | End customers who want a unified membership wallet |

**Key differentiator vs. global competitors:** Global white-label loyalty platforms (e.g., enterprise-priced solutions starting near £2,000/month) are built for enterprise budgets. This platform's edge is being **built for the PH SMB price point and context** (cash-heavy transactions, GCash/Maya familiarity, Messenger as the default "CRM" today).

---

## 4. User Personas

### 4.1 Rosa — Single Business, Single Branch Owner
- Owns one pet store, not tech-savvy
- Needs: simple setup, fast checkout scanning, low/no cost
- Will abandon the platform if it's slower than her current informal system
- Does **not** need: multi-branch tools, complex analytics, custom rules engines

### 4.2 Mark — Multi-Business Owner (3 businesses, 1 branch each)
- Owns a coffee shop, grocery, and gym — separate brands, separate customer bases
- Needs: one login, fully separate branding per business, unified overview dashboard
- Willing to pay more for the "one dashboard, many brands" value
- Requires staff permission scoping (staff of one business can't see another's data)

### 4.3 Grace — End Customer
- Frequents multiple local businesses
- Needs: fast, low-friction joining (no forced app download upfront), one place to see all memberships
- The "wallet" value only becomes real once she's joined 3+ businesses
- Cares about privacy — does not want her activity at one business visible to another

### 4.4 (Future) Franchise Partner
- Manages a specific branch on behalf of a main store owner
- Needs scoped access to their branch's data while staying connected to the main brand's ecosystem

---

## 5. User Flows

### 5.1 Business Owner Onboarding Flow (Rosa)
```
Register Business
  → Fill business info (name, category, address, contact)
  → Upload logo + select theme color
  → Add Membership Plan (choose template: Punch Card / Points / Tiered)
  → System auto-generates Store Profile Page + QR Code
  → Download/print QR code
  → Customer scans QR → views store profile → joins as member
  → Owner sees "New Member" notification
```

### 5.2 Checkout / Redemption Flow (Rosa, day-to-day use)
```
Staff opens dashboard → taps "Scan Member"
  → Scans customer's personal QR code
  → System displays member status (e.g., "7/10 punches")
  → Staff taps "Add Punch" / "Add Points" / "Apply Discount"
  → Count updates in real time on both staff and customer screens
```

### 5.3 Multi-Business Owner Flow (Mark)
```
Register Account
  → "Add Another Store" (repeated for each business)
  → Switch between stores via store switcher (top-level dropdown)
  → Per store: configure branding, membership plan type, promotions
  → Invite staff → assign to specific store only (scoped permissions)
  → View Overview Dashboard (all stores' key metrics side by side)
  → Drill into individual store dashboard for detailed data
```

### 5.4 Customer Joining Flow (Grace)
```
Scan QR at Business A → View public store profile (no login required yet)
  → Tap "Join as Member" → enter name + phone number → account created
  → Membership card + personal QR generated

[Later] Scan QR at Business B
  → Already recognized/logged in (same platform)
  → Tap "Join" → new membership added instantly

Open Wallet App
  → View all membership cards in one place
  → Tap a card → display personal QR for in-store scanning
  → Receive push notifications (e.g., "2 punches away from a reward")
```

### 5.5 Branch/Franchise Assignment Flow (Future)
```
Owner opens "Branches" tab
  → Add new branch (location, contact info)
  → Assign Partner/Franchise Manager to branch
  → Partner gets scoped dashboard access (their branch only)
  → Owner retains visibility into all branches' performance from main dashboard
```

---

## 6. Feature Scope (MVP vs. Future)

### MVP (Phase 1) — Build This First
- Business registration + branding customization (logo, colors, info)
- Single membership plan templates: Punch Card, Points-based
- Auto-generated store profile page + QR code
- Customer join flow (no forced app install — browser-based first)
- QR scan-to-verify + redeem at checkout
- Basic member list per business
- Single-branch, single-owner support

### Phase 2 — Multi-Business & Staff Management
- Multiple stores under one owner login (store switcher)
- Staff accounts with store-scoped permissions
- Unified owner dashboard across multiple businesses
- Promotions/announcements per store
- Basic analytics: active members, repeat visits, new members per month

### Phase 3 — Scale Features
- Multi-branch support per business
- Franchise/partner role with scoped branch access
- Tiered membership plans with custom rules
- Push notifications
- Customer-side companion app (installable, not just browser-based)
- Cross-business insights for multi-business owners

### Explicitly Out of Scope (for now)
- Full custom rules engine (keep to templates in MVP)
- Marketplace/e-commerce checkout features
- POS system replacement
- Payment processing (start with manual/in-store redemption only)

---

## 7. System Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Customer App (PWA)                   │
│         Wallet view · Store profiles · QR display         │
└───────────────────────┬───────────────────────────────────┘
                          │
┌───────────────────────▼───────────────────────────────────┐
│                    Business Owner Dashboard                │
│   Store setup · Branding · Membership plans · Staff mgmt   │
│              Analytics · Promotions · Multi-store switcher  │
└───────────────────────┬───────────────────────────────────┘
                          │
┌───────────────────────▼───────────────────────────────────┐
│                        Core API Layer                      │
│   Auth · Store service · Membership service · QR service   │
│         Points/Rewards engine · Notification service       │
└───────────────────────┬───────────────────────────────────┘
                          │
┌───────────────────────▼───────────────────────────────────┐
│                        Database Layer                      │
│   Businesses · Branches · Staff · Members · Memberships    │
│         Transactions · Promotions · Redemptions             │
└─────────────────────────────────────────────────────────────┘
```

**Multi-tenancy note:** Each business is a "tenant" scoped by `business_id`. All data (members, staff, promotions) is filtered by tenant to guarantee businesses never see each other's data — this is a core trust requirement, not optional.

---

## 8. Data Model Overview

**Core entities (simplified):**

- **User** — a person; can be a business owner, staff, or customer (or multiple roles)
- **Business** — the tenant; has branding, category, owner reference
- **Branch** — a physical location under a Business
- **Staff** — linked to a User + Business/Branch, with role/permissions
- **MembershipPlan** — the rules (punch card / points / tiered) for a Business
- **Membership** — links a customer User to a Business's MembershipPlan, tracks progress/points
- **Transaction/Redemption** — a scan event: which member, which branch, what was earned/redeemed
- **Promotion** — time-bound offer tied to a Business
- **QRCode** — unique per Business (store profile) and per Membership (customer identity)

**Key relationship to get right early:** a single `User` (customer) can hold many `Membership` records across different `Business` tenants — this is what powers the "wallet" experience.

---

## 9. Tech Stack Recommendation

Based on stack familiarity and what fits this kind of multi-tenant SaaS product:

| Layer | Recommendation |
|---|---|
| Frontend (customer + owner dashboard) | Next.js (App Router), TypeScript, Tailwind CSS |
| UI Components | shadcn/ui |
| Backend | Next.js API routes / Server Actions |
| ORM | Prisma |
| Database | PostgreSQL (better multi-tenant + JSON flexibility than MSSQL for this use case) |
| Auth | NextAuth / Auth.js (support both owner and customer roles) |
| QR generation/scanning | `qrcode` (generation) + browser-based scanner library (e.g., `html5-qrcode`) |
| File/image uploads (logos, covers) | Cloudinary |
| Notifications | Email (Resend/Nodemailer) for MVP; push notifications in Phase 3 |
| Hosting | Vercel (frontend/API) + managed Postgres (e.g., Neon/Supabase) |

This mirrors a stack already familiar from prior projects (JobPace, CareHomesSupportDocs), which shortens the learning curve for build speed.

---

## 10. Development Roadmap

### Phase 1 — MVP (Target: single-business, single-branch flow working end-to-end)
- Weeks 1–2: Data model, auth (owner + customer roles), business registration
- Weeks 3–4: Branding customization, membership plan templates, QR generation
- Weeks 5–6: Customer join flow, QR scan/redeem flow, basic member list
- Weeks 7–8: Testing with 1–2 pilot businesses (real-world validation)

### Phase 2 — Multi-Business & Dashboard
- Multi-store support under one owner account
- Staff roles and permission scoping
- Owner overview dashboard, basic analytics
- Promotions module

### Phase 3 — Scale & Network Effects
- Multi-branch + franchise/partner roles
- Companion installable app for customers
- Push notifications
- Cross-business insights (opt-in) for multi-business owners

**Recommended approach:** Launch Phase 1 hyperlocal — one town/area with 5–10 hand-picked businesses — so early customers experience the "multiple memberships in one wallet" value quickly, rather than spreading thin.

---

## 11. Business Model

**Primary revenue:** Subscription from business owners (B2B SaaS side)

Suggested tiers (draft — validate with real pricing research):
- **Starter** (Rosa-type): free or low-cost, 1 branch, basic templates only
- **Growth** (Mark-type): paid tier, multiple businesses under one login, unified dashboard, staff accounts
- **Scale** (franchise-type): higher tier, multi-branch + partner roles, advanced analytics

**Customers (Grace-type) do not pay** — their participation is the product's value driver, not a revenue source, at least initially. Future monetization on the customer side (e.g., premium wallet features) can be explored later once network effects are established.

---

## 12. Risks & Open Questions

| Risk | Notes |
|---|---|
| Chicken-and-egg adoption | Businesses need customers already using the app; customers need enough businesses to bother joining. Mitigated by hyperlocal launch strategy. |
| Scope creep | Franchise/partner/analytics features are appealing but heavy — must stay disciplined about MVP cut. |
| Shared reputation risk | A buggy experience at one unrelated business could hurt trust in the whole platform for a customer, indirectly affecting other businesses. |
| Fraud/security | QR-based "digital identity" requires anti-cloning/replay protection — not optional once real points/discounts are involved. |
| Pricing sensitivity | PH SMB willingness to pay is likely low; free/cheap entry tier is probably required for adoption. |
| Data privacy | Customer activity at one business must not be visible to unrelated businesses on the platform. |

**Open questions to resolve before building:**
1. Will customers need to install an app, or is browser-based (PWA) sufficient for MVP?
2. What exact revenue tiers and pricing will businesses actually accept?
3. Should the platform ever facilitate payments, or stay purely membership/loyalty tracking?
4. How is cross-promotion between a multi-business owner's stores handled — opt-in visibility or fully separate?

---

## 13. Competitive Landscape

| Category | Examples | Notes |
|---|---|---|
| Enterprise white-label loyalty | White Label Loyalty, Voucherify | Enterprise-priced, feature-heavy, not built for SMB budgets |
| Agency-focused white-label | Boomerangme | Targets agencies reselling to clients, not direct SMB self-serve |
| Wallet-native loyalty | Leal | Closest analog — targets small retail/cafés, uses Apple/Google Wallet instead of a custom app |
| Local (PH) informal alternatives | Facebook Messenger, paper cards, notebooks | The actual current "competitor" for most target businesses — low bar to beat on professionalism, but zero cost to switch away from |

**Strategic takeaway:** The opportunity is not "no one does this" — it's "no one does this well, cheaply, and locally for PH SMBs." Positioning and price point matter more than feature parity with enterprise players.

---

*Document version 1.0 — generated as a planning reference. Update as decisions are validated with real business owners and customers.*
