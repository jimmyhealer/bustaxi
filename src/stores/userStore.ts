import { ref } from 'vue'
import { defineStore } from 'pinia'
import { firebaseApp } from '@/firebase'
import { getAuth, signInWithPopup, signOut as signOutByFirebase, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth'
import { type UserProfile, updateUserProfile as apiUpdateUserProfile, getUserProfile as apiGetUserProfile } from '@/api'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export const useUserStore = defineStore('user', () => {
  const userProfile = ref<UserProfile>()
  const isAuthenticated = ref(false)

  const setUser = (userEmail: string, userName: string) => {
    userProfile.value = {
      email: userEmail,
      name: userName,
      line: '',
      phone: '',
    }
    isAuthenticated.value = true
  }

  const clearUser = () => {
    userProfile.value = undefined
    isAuthenticated.value = false
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      if (user) {
        setUser(user.email || '', user.displayName || '')
      }
    } catch (error) {
      console.error('Google 登入失敗:', error)
    }
  }

  const signOut = async () => {
    try {
      await signOutByFirebase(auth)
      clearUser()
    } catch (error) {
      console.error('登出失敗:', error)
    }
  }

  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUser(user.email || '', user.displayName || '')
      } else {
        clearUser()
      }
    })
  }

  const getUserProfile = async () => {
    try {
      if (!userProfile.value?.email) {
        return
      }

      userProfile.value = await apiGetUserProfile(userProfile.value.email)
      if (userProfile.value?.email ) {
        isAuthenticated.value = true
      }
    } catch (error) {
      console.error('Failed to get user profile:', error)
    }
  }

  const saveUserProfile = async (data: UserProfile) => {
    try {
      await apiUpdateUserProfile(data)
      userProfile.value = data
    } catch (error) {
      console.error('Failed to update user profile:', error)
    }
  }

  return {
    userProfile,
    isAuthenticated,
    signInWithGoogle,
    signOut,
    checkAuthState,
    getUserProfile,
    saveUserProfile
  }
}, {
  persist: true,
})