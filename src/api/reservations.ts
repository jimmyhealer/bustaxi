import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { getDB } from '@/api/db'

export type Reservations = {
  email: string
  origin: string
  destination: string
  date: string
  headcount: number
  fee?: number
  carbonEmmision?: number
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
    const ressevations = querySnapshot.docs.map((doc) => doc.data() as Reservations)

    // Add fake fee and carbon emmision
    ressevations.forEach((reservation) => {
      reservation.fee = 60 * reservation.headcount
      reservation.carbonEmmision = 10 + Math.floor(Math.random() * 42)
    })

    return ressevations
  } catch (error) {
    console.error('Failed to get reservations:', error)
    throw error
  }
}
