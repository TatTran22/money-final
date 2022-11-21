declare type Wallet = {
  id: string
  name: string
  user_id: string
  currency: string
  type: string
  description: string | null
  amount: number
  icon_url: string | null
  created_at: string | Date
  updated_at: string | Date
}
