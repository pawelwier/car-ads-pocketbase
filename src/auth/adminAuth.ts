import PocketBase from 'pocketbase'

export async function adminAuth(pb: PocketBase): Promise<void> {
  await pb.admins.authWithPassword('test@test.test', 'Testtest1!')
}