import React from 'react'
import BlogHeader from '@/components/blog-header'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <BlogHeader />
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout