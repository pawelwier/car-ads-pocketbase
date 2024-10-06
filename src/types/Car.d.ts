export type RecordCommon = {
  collectionId: string
  collectionName: string
  created: string // Date?
  id: string
  updated: string // Date?
}

export type Car = RecordCommon & {
  make: string
  price: Number
}