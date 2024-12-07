import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { getDB } from '@/api/db'

export type UserProfile = {
  email: string
  name: string
  line: string
  phone: string
}

const USER_PROFILE_COLLECTION = 'userProfile'

export async function updateUserProfile(data: UserProfile): Promise<void> {
  try {
    const db = getDB()
    const q = query(collection(db, USER_PROFILE_COLLECTION), where('email', '==', data.email))
    const querySnapshot = await getDocs(q)
    if (querySnapshot.docs.length === 0) {
      await addDoc(collection(db, USER_PROFILE_COLLECTION), data)
    } else {
      const docId = querySnapshot.docs[0].id
      await addDoc(collection(db, USER_PROFILE_COLLECTION), { ...data, id: docId })
    }
  } catch (error) {
    console.error('Failed to update user profile:', error)
    throw error
  }
}

export async function getUserProfile(email: string): Promise<UserProfile> {
  try {
    const db = getDB()
    const q = query(collection(db, USER_PROFILE_COLLECTION), where('email', '==', email))
    const querySnapshot = await getDocs(q)
    const userProfile = querySnapshot.docs.map((doc) => doc.data() as UserProfile)[0]
    return userProfile
  } catch (error) {
    console.error('Failed to get user profile:', error)
    throw error
  }
}