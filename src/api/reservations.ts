import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { getDB } from '@/api/db'

export type Reservations = {
  email: string
  origin: string
  destination: string
  date: string
  headcount: number
}

const RESERVATION_COLLECTION = 'reservations'

export async function postReservation(data: Reservations): Promise<string> {
  try {
    const db = getDB()
    const docRef = await addDoc(collection(db, RESERVATION_COLLECTION), data)
    return docRef.id
  } catch (error) {
    console.error('Failed to post reservation:', error)
    throw error
  }
}

export async function getReservations(email: string): Promise<Reservations[]> {
  try {
    const db = getDB()
    const q = query(collection(db, RESERVATION_COLLECTION), where('email', '==', email))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => doc.data() as Reservations)
  } catch (error) {
    console.error('Failed to get reservations:', error)
    throw error
  }
}
