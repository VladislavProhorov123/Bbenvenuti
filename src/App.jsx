import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import AppRoutes from './router/AppRoutes'

export default function App() {
  return (
    <div>
      <AppRoutes />
      <SpeedInsights />
    </div>
  )
}
