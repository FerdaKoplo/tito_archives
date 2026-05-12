const WrtingLayout = ({
    children,
}: {
    children: React.ReactNode
})  => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <main>
            {children}
        </main>
    </div>
  )
}

export default WrtingLayout 