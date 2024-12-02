'use server'
import { connectToDb } from './utils'
import { Post } from './models'
import { revalidatePath } from 'next/cache'

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData)

  try {
    connectToDb()

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    })

    await newPost.save()
    console.log('Saved to db')
    revalidatePath('/blog')
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async (formData) => {
  'use server'

  const { id } = Object.fromEntries(formData)

  try {
    connectToDb()
    await Post.findByIdAndDelete(id)
    console.log('Post deleted')
    revalidatePath('/blog')
  } catch (error) {
    console.log(error)
  }
}
