# Sign Up Form Setup

Your sign up form has been created with the following components:

## Files Created:

1. **prisma/schema.prisma** - Database schema with User model
2. **app/api/signup/route.ts** - API endpoint to handle form submissions
3. **app/components/SignUpForm.tsx** - React form component
4. **.env.local** - Database configuration
5. **prisma/seed.js** - Database initialization script

## To Complete Setup:

Run these commands in order:

```bash
npm install @prisma/client prisma

npm run prisma:generate

npm run prisma:migrate

npm run dev
```

## How It Works:

- Users enter their name and email in the sign up form on the home page
- Form submission sends data to `/api/signup` endpoint
- Backend validates and stores data in SQLite database
- Success/error messages are displayed to the user
- Duplicate emails are prevented with database constraints

## Database Info:

- **Type**: SQLite
- **Location**: `prisma/dev.db`
- **Table**: Users with id, email, name, and createdAt fields

## Styling:

The form matches your existing design with:
- Black background
- White borders and text
- Responsive layout
- Hover effects on buttons
