// import PrivacyPolicy from '@/content/privacy-policy.mdx'
import PrivacyPolicy from './privacy-policy.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our privacy policy outlines how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PrivacyPolicy />
    </div>
  )
}
