export const metadata = {
  title: "استشاريون الهندسة المدنية في الشارقة | شركات ومكاتب الهندسة المعمارية",
  description: "تقدم إنماء للاستشارات الهندسية تصاميم عالية الجودة ومبتكرة، تمزج بين الطابع الطبيعي والأسلوب العصري لتوفير حلول سكنية مخصصة تناسب احتياجاتك.",
  alternates: {
    canonical: 'https://www.enmaaengcon.com/ar/',
    languages: {
      "x-default": "https://www.enmaaengcon.com/",
      en: "https://www.enmaaengcon.com/",
      ar: "https://www.enmaaengcon.com/ar/",
    },
  },
  openGraph: {
    title: "استشاريون الهندسة المدنية في الشارقة | شركات ومكاتب الهندسة المعمارية",
    description: "تقدم إنماء للاستشارات الهندسية تصاميم عالية الجودة ومبتكرة، تمزج بين الطابع الطبيعي والأسلوب العصري لتوفير حلول سكنية مخصصة تناسب احتياجاتك.",
    type: "website",
    url: "https://www.enmaaengcon.com/ar/"
  },
  twitter: {
    card: "summary_large_image",
    title: "استشاريون الهندسة المدنية في الشارقة | شركات ومكاتب الهندسة المعمارية",
    description: "تقدم إنماء للاستشارات الهندسية تصاميم عالية الجودة ومبتكرة، تمزج بين الطابع الطبيعي والأسلوب العصري لتوفير حلول سكنية مخصصة تناسب احتياجاتك.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
}
import React from 'react'
import HomePage from './pages-content/homePage'
import Footer from '../components/footer'

export default function page() {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  )
}