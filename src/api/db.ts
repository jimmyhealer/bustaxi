import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from '@/firebase'

let dbInstance: ReturnType<typeof getFirestore> | null = null

export function getDB() {
  if (!dbInstance) {
    dbInstance = getFirestore(firebaseApp)
  }

  return dbInstance
}
