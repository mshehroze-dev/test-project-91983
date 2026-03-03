# nuvra-landing

A fullstack application built with React, TypeScript, and Tailwind CSS.

## Feature Management

This project uses **dormant feature management**, allowing you to enable/disable features without regenerating code. All feature files are included in the project but remain dormant until explicitly activated.

### Feature Status

| Feature | Status | Description |
|---------|--------|-------------|
| Payment & Billing | 💤 Dormant | Stripe integration with subscriptions, billing, and payment processing |
| AI Assistant | 💤 Dormant | AI-powered features including content generation and assistant functionality |
| Authentication | 💤 Dormant | User authentication with login, signup, and protected routes |

### Activating Dormant Features

#### Payment & Billing

Stripe integration with subscriptions, billing, and payment processing

**Activation Steps:**
1. Set VITE_PAYMENT_ENABLED=true in .env.local
2. Configure VITE_STRIPE_PUBLISHABLE_KEY
3. Set up Stripe webhook endpoints
4. Configure subscription plans in Stripe dashboard

**Required Configuration:**
- `VITE_PAYMENT_ENABLED`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

**Dependencies:**
- Stripe account
- Supabase database

**Files Included:**
- `src/components/payment/`
- `src/lib/stripe.ts`
- `src/lib/payment-*.ts`
- `src/lib/subscription-*.ts`
- `src/pages/Billing.tsx`
- `src/pages/Checkout.tsx`
- `supabase/functions/stripe-webhooks/`
- `supabase/functions/create-checkout-session/`

---

#### AI Assistant

AI-powered features including content generation and assistant functionality

**Activation Steps:**
1. Set VITE_AI_ENABLED=true in .env.local
2. Configure VITE_OPENAI_API_KEY
3. Set up AI model preferences
4. Configure content generation settings

**Required Configuration:**
- `VITE_AI_ENABLED`
- `VITE_OPENAI_API_KEY`
- `OPENAI_MODEL`
- `AI_CONTENT_SETTINGS`

**Dependencies:**
- OpenAI API key
- AI model access

**Files Included:**
- `src/components/ai/`
- `src/pages/AIPlayground.tsx`
- `src/lib/ai-*.ts`
- `supabase/functions/ai-assistant/`
- `supabase/functions/ai-ingest/`

---

#### Authentication

User authentication with login, signup, and protected routes

**Activation Steps:**
1. Set VITE_AUTH_ENABLED=true in .env.local
2. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
3. Set up authentication providers in Supabase
4. Configure email templates and settings

**Required Configuration:**
- `VITE_AUTH_ENABLED`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

**Dependencies:**
- Supabase project
- Email service

**Files Included:**
- `src/components/auth/`
- `src/pages/Login.tsx`
- `src/pages/Signup.tsx`
- `src/pages/Profile.tsx`
- `src/lib/supabase.ts`

---

### Environment Configuration

Create a `.env.local` file with the following variables to activate features:

```bash
# Feature Activation
VITE_PAYMENT_ENABLED=true  # Enable Payment & Billing
VITE_AI_ENABLED=true  # Enable AI Assistant
VITE_AUTH_ENABLED=true  # Enable Authentication

# Configuration Variables
AI_CONTENT_SETTINGS=your_value_here
OPENAI_MODEL=your_value_here
STRIPE_SECRET_KEY=your_value_here
STRIPE_WEBHOOK_SECRET=your_value_here
SUPABASE_SERVICE_ROLE_KEY=your_value_here
VITE_OPENAI_API_KEY=your_value_here
VITE_STRIPE_PUBLISHABLE_KEY=your_value_here
VITE_SUPABASE_ANON_KEY=your_value_here
VITE_SUPABASE_URL=your_value_here
```

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Checking Feature Status

You can check which features are currently active/dormant:

```typescript
import { getActiveFeatures, isFeatureDormant } from './src/lib/features';

console.log('Active features:', getActiveFeatures());
console.log('Payment dormant:', isFeatureDormant('payment'));
console.log('AI dormant:', isFeatureDormant('ai'));
console.log('Auth dormant:', isFeatureDormant('auth'));
```

---

*Documentation generated on 2026-01-29 18:41:21 for fullstack project with 0 active and 3 dormant features.*
