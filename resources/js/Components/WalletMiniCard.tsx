interface WalletMiniCardProps {
  name: string
  src: string
}

export default function WalletMiniCard({ name, src }: WalletMiniCardProps) {
  return (
    <div className="w-full">
      <img src={src} alt={name} className="p-2 m-2 w-14" />
    </div>
  )
}
