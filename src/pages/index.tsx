import React from 'react'
import Layout from '../components/layouts/layout'
import CategorySelector from '@/components/ui/categorySelector'

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold'>Home</h1>
        <p className='text-lg'>Welcome to the home page!</p>
        <CategorySelector />
      </div>
    </Layout>
  )
}
